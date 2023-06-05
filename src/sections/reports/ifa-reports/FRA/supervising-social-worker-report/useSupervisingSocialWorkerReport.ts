import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { initialValues } from ".";
import { useRouter } from "next/router";

export const useSupervisingSocialWorkerReport = () => {
  const path = '/reports/ifa-reports/FR-A';
  const router = useRouter();
  const handleBack = () => router.push(path);

  const methods: any = useForm({
    resolver: yupResolver(Yup.object({})),
    defaultValues: initialValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;


  const onSubmit = (data: any) => {
    console.log(data);

  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    handleBack
  }
}