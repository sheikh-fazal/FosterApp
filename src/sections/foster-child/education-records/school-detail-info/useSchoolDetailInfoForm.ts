import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchoolDetailInfoFormSchema, defaultValues } from ".";
import {
  usePostSchoolDetailInfoApiMutation,
  useGetSchoolDetailInfoByIdQuery,
  usePutSchoolDetailInfoByIdMutation,
} from "@root/services/foster-child/education-records/school-detail-info/schoolDetailInfoApi";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useSchoolDetailInfoForm = () => {
  const router = useRouter();
  const { data } = useGetSchoolDetailInfoByIdQuery(
    router?.query?.schoolInfoId,
    { refetchOnMountOrArgChange: true }
  );
  const [postData, { isError, isSuccess, isLoading }] =
    usePostSchoolDetailInfoApiMutation();

  const [putData] = usePutSchoolDetailInfoByIdMutation();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(SchoolDetailInfoFormSchema),
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
