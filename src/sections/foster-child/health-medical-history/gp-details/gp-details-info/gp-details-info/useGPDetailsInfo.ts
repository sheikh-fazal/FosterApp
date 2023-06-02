import { useForm } from "react-hook-form";
import { healthTherapyInfoFormDataFunction } from ".";
import { useRouter } from "next/router";

export const useGPDetailsInfo = () => {
  const { query } = useRouter();
  console.log(!!query.id);
  const healthTherapyInfoFormData = healthTherapyInfoFormDataFunction(!!!query?.id);
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
