
import React, { useState } from 'react'
import { defaultValues } from ".";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export const useAddReferenceDataManagement = () => {
  const route = useRouter()
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
    route
  }
}
