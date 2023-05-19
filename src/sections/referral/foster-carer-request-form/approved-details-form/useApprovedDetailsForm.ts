import { useForm } from "react-hook-form";
import { ApprovedDetailsFormData, ApprovedDetailsFormValues, ApprovedDetailsFormValidationSchema } from ".";
import { yupResolver } from "@hookform/resolvers/yup";

export const useApprovedDetailsForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(ApprovedDetailsFormValidationSchema),
    defaultValues: ApprovedDetailsFormValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };
  return {
    onSubmit,
    handleSubmit,
    ApprovedDetailsFormData,
    methods
  }
}