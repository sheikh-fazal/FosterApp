import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useGetActiveSocialWorkerByIdQuery, usePostActiveSocialWorkerApiMutation, usePutActiveSocialWorkerByIdMutation } from "@root/services/foster-child/social-worker-details/la-social-worker/laSocialWorkerApi";
import { ActiveSocialWorkerFormSchema, defaultValues } from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";

export const useActiveSocialWorkerForm = () => {
  const router = useRouter();

  const { data } = useGetActiveSocialWorkerByIdQuery(
    router?.query?.schoolInfoId,
    { refetchOnMountOrArgChange: true }
  );
  const [postData, { isError, isSuccess, isLoading }] =
  usePostActiveSocialWorkerApiMutation();

  const [putData] = usePutActiveSocialWorkerByIdMutation();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(ActiveSocialWorkerFormSchema),
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
          `/foster-child/social-worker-details/la-social-worker?fosterChildId=${router?.query?.fosterChildId}`
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
          `/foster-child/social-worker-details/la-social-worker?fosterChildId=${router?.query?.fosterChildId}`
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
