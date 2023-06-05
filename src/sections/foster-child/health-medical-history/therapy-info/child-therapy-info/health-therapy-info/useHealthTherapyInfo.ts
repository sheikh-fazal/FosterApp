import { useForm } from "react-hook-form";
import { healthTherapyInfoFormDataFunction } from ".";
import { useRouter } from "next/router";

export const useHealthTherapyInfo = () => {
  const { query } = useRouter();
  const healthTherapyInfoFormData = healthTherapyInfoFormDataFunction(query?.action === "view");
  const methods: any = useForm({
    defaultValues: {},
  });
  const { trigger, setValue, handleSubmit, getValues, watch, reset } = methods;
  const onSubmitHandler = (data: any) => {
    console.log(data);
  };
  return {
    healthTherapyInfoFormData,
    methods,
    handleSubmit,
    onSubmitHandler,
  };
};
