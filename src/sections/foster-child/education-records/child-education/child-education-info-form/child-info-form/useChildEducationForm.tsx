import React, { useEffect } from "react";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValueEducationInfoForm, educationInfoFormDataFunction,  } from ".";
import dayjs from "dayjs";
import { fTimestamp } from "@root/utils/formatTime";
import { enqueueSnackbar } from "notistack";
import router, { useRouter } from "next/router";
import { useLazyGetSingleEducationInfoDataQuery, usePatchEducationInfoDataMutation, usePostEducationInfoDataMutation } from "@root/services/foster-child/education-records/child-education-info/ChildEducationInfoList";

export const useChildEducationForm = () => {
  const router = useRouter();
  const theme = useTheme();

  const [postEducationInfoDataTrigger, postEducationInfoDataStatus] =
    usePostEducationInfoDataMutation();

    const [patchEducationInfoDataTrigger, patchEducationInfoDataStatus] =
    usePatchEducationInfoDataMutation();

    const [getSingleEducationInfoDataTrigger, getSingleEducationInfoDataStatus] =
    useLazyGetSingleEducationInfoDataQuery();

    const childEducationInfoFormData = educationInfoFormDataFunction(
      router?.query?.action === "view"
    );

  const setEducationInfoDefaultValue = async () => {
    if (!!!router.query?.educationInfoId) return;
    const { data, isError } = await getSingleEducationInfoDataTrigger(
      {educationInfoId: router?.query?.educationInfoId},
      true
    );
    if (isError) {
      return defaultValueEducationInfoForm(data);
    }
    return defaultValueEducationInfoForm(data?.data);
  };

  const methods: any = useForm({
    // mode: "onTouched",
    // resolver: yupResolver(SchoolDetailInfoFormSchema),
    defaultValues: setEducationInfoDefaultValue,
  });
  const onSubmitHandler = async (data: any) => {
    console.log(data);

    const apiDataParameter = {
      body: data,
      fosterChildId: router.query?.educationInfoId,
    };

    if (!!router.query?.educationInfoId) {
      patchEducationInfoForm(data);
      return;
    }
    try {
      const res: any = await postEducationInfoDataTrigger(
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
  

  const patchEducationInfoForm = async (data: any) => {
    const pathParams = {
      educationInfoId: router?.query?.educationInfoId,
    };
    const apiDataParameter = { body: data, pathParams };
    try {
      const res: any = await patchEducationInfoDataTrigger(
        apiDataParameter
      ).unwrap();
      router.push({
        pathname: `/foster-child/education-records/child-education/child-education-info`,
        query: {
          educationInfoId: router.query?.educationInfoId,
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

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return {
    childEducationInfoFormData,
    methods,
    isSubmitting,
    theme,
    handleSubmit,
    onSubmitHandler,
  };
};
