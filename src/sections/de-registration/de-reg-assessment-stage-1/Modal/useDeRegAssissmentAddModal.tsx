import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { RegAssessmentModalValidationSchema, RegAssessmentModalValues } from '.';

const useDeRegAssissmentAddModal = () => {
    const methods: any = useForm({
        resolver: yupResolver(RegAssessmentModalValidationSchema),
        defaultValues:  RegAssessmentModalValues,
    });
    const { reset, handleSubmit, formState: { errors, isSubmitting, isDirty }, }: any = methods;

  const onSubmit = (data: any) => {
  console.log("Form data:", data);
  }
  return {
    methods,
    onSubmit,
    handleSubmit,
  }

}
export default useDeRegAssissmentAddModal
