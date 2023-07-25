import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { defaultValues, StudySupportInfoFormSchema } from ".";
import { useForm } from "react-hook-form";
import {
  useGetStudySupportInfoByIdQuery,
  usePostStudySupportInfoApiMutation,
  usePutStudySupportInfoByIdMutation,
} from "@root/services/foster-child/education-records/study-support-info/studySupportInfoAPI";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

export const useStudySupportInfoForm = () => {
  const router = useRouter();

  const { data } = useGetStudySupportInfoByIdQuery(
    router?.query?.schoolInfoId,
    { refetchOnMountOrArgChange: true }
  );
  const [postData, { isError, isSuccess, isLoading }] =
    usePostStudySupportInfoApiMutation();

  const [putData] = usePutStudySupportInfoByIdMutation();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(StudySupportInfoFormSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset((formValues: any) => ({
      ...formValues,
      ...data?.data,
    }));
  }, [data, reset]);
  
  const onSubmit = async (data: any) => {
    try {
      if (router?.query?.action === "add") {
        const res: any = await postData({
          body: data,
          fosterChildId: router?.query?.fosterChildId,
        }).unwrap();
        enqueueSnackbar(res?.message ?? `Added Successfully!`, {
          variant: "success",
        });
        router.push(
          `/foster-child/education-records/school-detail-info?fosterChildId=${router?.query?.fosterChildId}`
        );
      } else if (router?.query?.action === "edit") {
        const res: any = await putData({
          body: data,
          schoolInfoId: router?.query?.schoolInfoId,
        }).unwrap();
        enqueueSnackbar(res?.message ?? `Update Successfully!`, {
          variant: "success",
        });
        router.push(
          `/foster-child/education-records/school-detail-info?fosterChildId=${router?.query?.fosterChildId}`
        );
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };
  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isError,
    isSuccess,
    isLoading,
  };
};
