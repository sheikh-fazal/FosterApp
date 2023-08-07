import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  useGetSocialWorkerByIdQuery,
  usePostSocialWorkerApiMutation,
  usePutSocialWorkerByIdMutation,
} from "@root/services/foster-child/social-worker-details/la-social-worker/laSocialWorkerApi";
import { ActiveSupervisingSocialWorkerFormSchema, defaultValues } from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import {
  useGetSupervisingSocialWorkerByIdQuery,
  usePostSupervisingSocialWorkerApiMutation,
  usePutSupervisingSocialWorkerByIdMutation,
} from "@root/services/foster-child/social-worker-details/supervising-social-worker/SupervisingSocialWorkerApi";

export const useSupervisingSocialWorkerForm = () => {
  const router = useRouter();

  const { data } = useGetSupervisingSocialWorkerByIdQuery(router?.query?.id, {
    refetchOnMountOrArgChange: true,
  });
  const [postData, { isError, isSuccess, isLoading }] =
    usePostSupervisingSocialWorkerApiMutation();

  const [putData] = usePutSupervisingSocialWorkerByIdMutation();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(ActiveSupervisingSocialWorkerFormSchema),
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
      startDateOfAssignment: new Date(data?.data?.startDateOfAssignment),
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
          id: router?.query?.id,
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
