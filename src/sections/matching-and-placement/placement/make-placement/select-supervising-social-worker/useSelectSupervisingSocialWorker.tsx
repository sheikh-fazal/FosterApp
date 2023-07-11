import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SelectSupervisingSocialWorkerDefaultValues, SelectSupervisingSocialWorkerValidationSchema } from ".";
import { useTheme } from '@mui/material';

const useSelectSupervisingSocialWorker = () => {
    const methods: any = useForm({
    resolver: yupResolver(SelectSupervisingSocialWorkerValidationSchema),
    defaultValues: SelectSupervisingSocialWorkerDefaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
  console.log(data, "submitted data");
}
const theme = useTheme()
  return {
    methods,
    handleSubmit,
    onSubmit,
    theme
  };
}

export default useSelectSupervisingSocialWorker
