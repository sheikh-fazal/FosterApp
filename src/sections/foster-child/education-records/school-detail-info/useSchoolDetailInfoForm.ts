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
  const Router: any = useRouter();
  const { action, schoolInfoId, fosterChildId } = Router.query;
  const { data } = useGetSchoolDetailInfoByIdQuery(schoolInfoId, {
    refetchOnMountOrArgChange: true,
  });
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
      if (action === "add") {
        const res: any = await postData({
          body: data,
          fosterChildId: fosterChildId,
        }).unwrap();
        enqueueSnackbar(res?.message ?? `Added Successfully!`, {
          variant: "success",
        });
        Router.push(
          `/foster-child/education-records/school-detail-info?fosterChildId=${fosterChildId}`
        );
      } else if (action === "edit") {
        const res: any = await putData({
          body: data,
          schoolInfoId: schoolInfoId,
        }).unwrap();
        enqueueSnackbar(res?.message ?? `Update Successfully!`, {
          variant: "success",
        });
        Router.push(
          `/foster-child/education-records/school-detail-info?fosterChildId=${fosterChildId}`
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
