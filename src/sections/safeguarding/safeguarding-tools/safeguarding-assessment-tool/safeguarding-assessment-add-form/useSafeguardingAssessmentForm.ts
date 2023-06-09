
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AssessmentFormValidationSchema, defaultValues } from ".";

export const useSafeguardingAssessmentForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(AssessmentFormValidationSchema),
    defaultValues: defaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };
  return {
    methods, handleSubmit, onSubmit
  }



}
