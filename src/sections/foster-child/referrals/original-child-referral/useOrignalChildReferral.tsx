import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues, viewOriginalChild } from ".";

const useOrignalChildReferral = () => {
  const methods: any = useForm({
    resolver: yupResolver(viewOriginalChild),
    defaultValues,
  });

  const { handleSubmit, watch } = methods;

  const { mentalHealthStatus } = watch({
    name: "mentalHealthStatus",
  });
  const { childPhysicalDisability } = watch({
    name: "childPhysicalDisability",
  });

  const onSubmit = (data: any) => {
    const updatedData = {
      ...data,
      mentalHealthStatus: mentalHealthStatus === "Yes" ? true : false,
      childPhysicalDisability: childPhysicalDisability === "Yes" ? true : false,
    };
    console.log(updatedData);
  };

  return {
    methods,
    onSubmit,
    handleSubmit,
    mentalHealthStatus,
    childPhysicalDisability,
  };
};

export default useOrignalChildReferral;
