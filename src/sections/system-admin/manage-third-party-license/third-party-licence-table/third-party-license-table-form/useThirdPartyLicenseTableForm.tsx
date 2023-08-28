import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormData, FormDataValues, FormValidationSchema } from ".";
import { usePatchThirdPartyLicenceDataMutation, usePostThirdPartyLicenceDataMutation } from "@root/services/system-admin/third-party-licence/thirdPartyLicence";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";

export const useThirdPartyLicenceTableForm = () => {
  const router = useRouter();
  const theme: any = useTheme();

  const [postThirdPartyLicenceDataTrigger, postThirdPartyLicenceDataStatus] =
    usePostThirdPartyLicenceDataMutation();
    const [patchThirdPartyLicenceDataTrigger, patchThirdPartyLicenceDataStatus] =
    usePatchThirdPartyLicenceDataMutation();

  const methods: any = useForm({
    resolver: yupResolver(FormValidationSchema),
    defaultValues: FormDataValues,
  });

  const { handleSubmit } = methods;
  // ----------- POST and PATCH Hanlder --------------- //
  const combinedPost_PatchFunction = async (data: any, apiTOHit: any) => {
    const apiDataParameter = {
      body: {
        ...data,
        ...(router?.query?.id && {
          id: router?.query?.id,
        }),
      },
    };
    try {
      const res: any = await apiTOHit(apiDataParameter).unwrap();
      router.push({
        pathname: router?.query?.id
          ? `/system-admin/manage-third-party-license/third-party-license-form`
          : "/system-admin/manage-third-party-license",
        query: router?.query?.id && {
          action: "edit",
          id: router?.query?.id,
        },
      });

      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

// ----------- Submit Hanlder --------------- //
const onSubmit = async (data: any) => {
  if (!!router?.query?.id) {
    combinedPost_PatchFunction(data, patchThirdPartyLicenceDataTrigger);
    return;
  }
  combinedPost_PatchFunction(data, postThirdPartyLicenceDataTrigger);
};
  return {
    methods,
    FormData,
    handleSubmit,
    onSubmit,
  };
};
