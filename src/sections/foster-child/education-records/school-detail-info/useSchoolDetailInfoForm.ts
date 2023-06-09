import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchoolDetailInfoFormSchema, defaultValues } from ".";



export const useSchoolDetailInfoForm = ({
  onSubmitHandler,
  initialValueProps,
  message,
}: any) => {

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
    try {
        // const res: any = await onSubmitHandler(data).unwrap();
        // enqueueSnackbar(res?.message ?? `Carer Family ${message} Successfully!`, {
        //   variant: "success",
        // });
        // router.push("/carer-info/personal-info/carer-family-support-network");
      } catch (error: any) {
        // const errMsg = error?.data?.message;
        // enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
      }
  };

  return {
    methods, handleSubmit, onSubmit, isSubmitting 
  };
};
