import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchoolDetailInfoFormSchema, defaultValues } from ".";
import { usePostSchoolDetailInfoApiMutation } from "@root/services/foster-child/education-records/school-detail-info/schoolDetailInfoApi";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";

export const useSchoolDetailInfoForm = () => {
  const [postData, { isError, isSuccess, isLoading }] =
    usePostSchoolDetailInfoApiMutation();
  const router = useRouter();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(SchoolDetailInfoFormSchema),
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

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
