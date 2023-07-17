import { useForm } from "react-hook-form";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import {
  defaultValueGpDetailsInfoForm,
  gpDetailsInfoFormDataFunction,
  gpDetailsInfoFormSchema,
} from ".";
import {
  useLazyGetSingleGpDetailsInfoDataQuery,
  usePatchGpDetailsInfoDataMutation,
  usePostGpDetailsInfoDataMutation,
} from "@root/services/foster-child/health-medical-history/gp-details/gpDetailsInfo";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

export const useGPDetailsInfo = () => {
  const router = useRouter();
  const theme: any = useTheme();
  const gpDetailsInfoFormData = gpDetailsInfoFormDataFunction(
    router?.query?.action === "view"
  );

  const [postGpDetailsInfoDataTrigger, postGpDetailsInfoDataStatus] =
    usePostGpDetailsInfoDataMutation();

  const [patchGpDetailsInfoDataTrigger, patchGpDetailsInfoDataStatus] =
    usePatchGpDetailsInfoDataMutation();

  const [getSingleGpDetailsInfoDataTrigger, getSingleGpDetailsInfoDataStatus] =
    useLazyGetSingleGpDetailsInfoDataQuery();
  // get api params
  const pathParams = {
    id: router.query?.gpInfoId,
  };

  const apiDataParameter = { pathParams };

  const setGpDetailsInfoDefaultValue = async () => {
    if (!!!router.query?.gpInfoId) return;
    const { data, isError } = await getSingleGpDetailsInfoDataTrigger(
      apiDataParameter,
      true
    );
    if (isError) {
      return defaultValueGpDetailsInfoForm(data);
    }
    return defaultValueGpDetailsInfoForm(data?.data);
  };

  const methods: any = useForm({
    resolver: yupResolver(gpDetailsInfoFormSchema),
    defaultValues: setGpDetailsInfoDefaultValue,
  });
  const { handleSubmit } = methods;

  const submitGpDetailsInfoForm = async (data: any) => {
    const queryParams = {
      fosterChildId: router.query.fosterChildId,
    };
    const apiDataParameter = { body: data, queryParams };
    if (!!router.query?.gpInfoId) {
      patchGpDetailsInfoForm(data);
      return;
    }
    try {
      const res: any = await postGpDetailsInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/health-medical-history/gp-details/gp-details-info`,
        query: {
          gpInfoId: res?.data?.id,
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
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

  const patchGpDetailsInfoForm = async (data: any) => {
    const pathParams = {
      id: router.query?.gpInfoId,
    };
    const apiDataParameter = { body: data, pathParams };
    try {
      const res: any = await patchGpDetailsInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/health-medical-history/gp-details/gp-details-info`,
        query: {
          gpInfoId: router.query?.gpInfoId,
          ...(!!router?.query?.fosterChildId && {
            fosterChildId: router?.query?.fosterChildId,
          }),
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

  return {
    gpDetailsInfoFormData,
    methods,
    handleSubmit,
    submitGpDetailsInfoForm,
    getSingleGpDetailsInfoDataStatus,
    router,
    postGpDetailsInfoDataStatus,
    patchGpDetailsInfoDataStatus,
    theme,
  };
};
