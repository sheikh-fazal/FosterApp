import React, { useRef, useState } from "react";
import TableAction from "@root/components/TableAction";
import { useTableParams } from "@root/hooks/useTableParams";
import { defaultValues } from ".";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

export const useSuspectedTable = () => {
  const [tableData, setTableDate] = useState<any>(null);
  const methods: any = useForm({
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    getValues,
    setValue,
  } = methods;

  const onClear = () => {
    setTableDate(null);
  };
  const onSubmit = async (data: any) => {
    setTableDate(JSON.stringify(data));
  };

  return {
    methods,
    handleSubmit,
    getValues,
    setValue,
    isValid,
    onSubmit,
    isSubmitting,
    tableData,
    onClear,
  };
};
