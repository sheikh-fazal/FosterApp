import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SelectLaSwDataDefaultValues, SelectLaSwDataValidationSchema } from ".";
import { useTheme } from '@mui/material';

const useSelectLaSwData = () => {
    const methods: any = useForm({
    resolver: yupResolver(SelectLaSwDataValidationSchema),
    defaultValues: SelectLaSwDataDefaultValues,
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

export default useSelectLaSwData
