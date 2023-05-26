import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  OtherPoliciesFormDataValues,
  OtherPoliciesFormValidationSchema,
  OtherPoliciesFormData,
} from ".";

export const useOtherPolicesForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(OtherPoliciesFormValidationSchema),
    defaultValues: OtherPoliciesFormDataValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };
  return {
    methods,
    handleSubmit,
    onSubmit,
    OtherPoliciesFormData
  };
};
