import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  SuperversionTrainingPolicyDefaultValues,
  SuperversionTrainingPolicyValidationSchema,
} from ".";

export const useSuperversionTrainingSupportPolicyForm = ({handleNextBtn }: any) => {
  const methods: any = useForm({
    resolver: yupResolver(SuperversionTrainingPolicyValidationSchema),
    defaultValues: SuperversionTrainingPolicyDefaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
  console.log(data, "submitted data");
  handleNextBtn() ;
}
  return {
    methods,
    handleSubmit,
    onSubmit,
  };
};
