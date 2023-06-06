import { useForm } from "react-hook-form";

import { useRouter } from "next/router";
import { gpDetailsInfoFormDataFunction } from ".";

export const useGPDetailsInfo = () => {
  const { query } = useRouter();
  const gpDetailsInfoFormData = gpDetailsInfoFormDataFunction(query?.action === "view");
  const methods: any = useForm({
    defaultValues: {},
  });
  const { trigger, setValue, handleSubmit, getValues, watch, reset } = methods;
  const onSubmitHandler = (data: any) => {
    console.log(data);
  };
  return {
    gpDetailsInfoFormData,
    methods,
    handleSubmit,
    onSubmitHandler,
  };
};
