import { useForm } from "react-hook-form";

import { useRouter } from "next/router";
import { useLazyGetSingleGpDetailsInfoDataQuery, usePatchGpDetailsInfoDataMutation, usePostGpDetailsInfoDataMutation } from "@root/services/foster-child/health-medical-history/gp-details/gp-details-info/gpDetailsInfo";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import { claMedicalInfoFormDataFunction, claMedicalInfoFormSchema, defaultValueClaMedicalInfoForm } from ".";

export const useClaMedicalInfo = () => {
  const { query } = useRouter();
  const router = useRouter();
  
  const claMedicalInfoFormData = claMedicalInfoFormDataFunction(query?.action === "view");

  const [postGpDetailsInfoDataTrigger, postGpDetailsInfoDataStatus] =
  usePostGpDetailsInfoDataMutation();

  const [patchGpDetailsInfoDataTrigger, patchGpDetailsInfoDataStatus] =
  usePatchGpDetailsInfoDataMutation();

const [getSingleGpDetailsInfoDataTrigger, getSingleGpDetailsInfoDataStatus] =
useLazyGetSingleGpDetailsInfoDataQuery();
// get api params
const pathParams = {
  id:
    query?.gpInfoId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
};

const dataParameter = { pathParams };

const setGpDetailsInfoDefaultValue = async () => {
  const { data, isError } = await getSingleGpDetailsInfoDataTrigger(
    dataParameter,
    true
  );
  if (isError) {
    return defaultValueClaMedicalInfoForm(data);
  }
  return defaultValueClaMedicalInfoForm(data?.data);
};

  const methods: any = useForm({
    resolver: yupResolver(claMedicalInfoFormSchema) ,
    defaultValues: setGpDetailsInfoDefaultValue,
  });
  const { trigger, setValue, handleSubmit, getValues, watch, reset } = methods;

 const submitGpDetailsInfoForm = async (data: any) => {
    const putDataParameter = { body: data };
    if(!!query?.gpInfoId) {
      patchGpDetailsInfoForm(data);
      return;
    }
    try {
      const res: any = await postGpDetailsInfoDataTrigger(
        putDataParameter
      ).unwrap();
      console.log(res)
      router.push(
        `/foster-child/health-medical-history/gp-details/gp-details-info/${res?.data?.id}`
      )
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const patchGpDetailsInfoForm = async (data:any) => {
    const pathParams = {
      id:
        query?.gpInfoId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
    };
    const putDataParameter = { body: data , pathParams};
    try {
      const res: any = await patchGpDetailsInfoDataTrigger(
        putDataParameter
      ).unwrap();
      router.push(
        `/foster-child/health-medical-history/gp-details`
      )
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  }


  return {
    claMedicalInfoFormData,
    methods,
    handleSubmit,
    submitGpDetailsInfoForm,
    getSingleGpDetailsInfoDataStatus,
    query,
    router
  };
};
