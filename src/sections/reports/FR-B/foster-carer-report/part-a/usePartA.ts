import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const usePartA = () => {

  const methods: any = useForm({
    // resolver: yupResolver({ dd:  }),
    defaultValues: {},
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;


  const onSubmit = async (data: any) => {
  };

  return {
    methods,
    handleSubmit,
    onSubmit
  }
}