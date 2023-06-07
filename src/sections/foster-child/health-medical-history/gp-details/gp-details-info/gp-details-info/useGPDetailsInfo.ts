import { useForm } from "react-hook-form";

import { useRouter } from "next/router";
import { defaultValueGpDetailsInfoForm, gpDetailsInfoFormDataFunction } from ".";
import { useLazyGetSingleGpDetailsInfoDataQuery, usePatchGpDetailsInfoDataMutation, usePostGpDetailsInfoDataMutation } from "@root/services/foster-child/health-medical-history/gp-details/gp-details-info/gpDetailsInfo";
import { enqueueSnackbar } from "notistack";

export const useGPDetailsInfo = () => {
  const { query } = useRouter();
  const router = useRouter();
  console.log(query.gpInfoId)
  const gpDetailsInfoFormData = gpDetailsInfoFormDataFunction(query?.action === "view");

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
    return defaultValueGpDetailsInfoForm(data);
  }
  return defaultValueGpDetailsInfoForm(data?.data);
};

  const methods: any = useForm({
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
    gpDetailsInfoFormData,
    methods,
    handleSubmit,
    submitGpDetailsInfoForm,
    getSingleGpDetailsInfoDataStatus,
    query
  };
};
