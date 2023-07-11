import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MandatoryformSchemaValidation, MandatoryInitialValues,  } from '.';

export const useMandatoryModal = () => {
    const methods: any = useForm({
        resolver: yupResolver(MandatoryformSchemaValidation),
        defaultValues: MandatoryInitialValues ,
    });
    const { reset, handleSubmit, formState: { errors, isSubmitting, isDirty }, }: any = methods;


  const onSubmit = (data: any) => {
  console.log("Form data:", data);
  
};

  return {
    methods,
    onSubmit,
    handleSubmit

  }
}
