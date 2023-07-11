import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchoolDetailInfoFormSchema, defaultValues } from ".";
import { usePostSchoolDetailInfoApiMutation,useGetSchoolDetailInfoByIdQuery } from "@root/services/foster-child/education-records/school-detail-info/schoolDetailInfoApi";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useSchoolDetailInfoForm = () => {
  const router = useRouter();
  const {data}=useGetSchoolDetailInfoByIdQuery(router?.query?.schoolInfoId,{skip:!!!router?.query?.schoolInfoId})
  const [postData, { isError, isSuccess, isLoading }] =
    usePostSchoolDetailInfoApiMutation();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(SchoolDetailInfoFormSchema),
    defaultValues
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;
useEffect(()=>{
  reset((formValues: any) => ({
    ...formValues,
    ...data?.data,
  }));
},[data, reset])
  const onSubmit = async (data: any) => {
    console.log("onSubmit", data);
    try {
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
