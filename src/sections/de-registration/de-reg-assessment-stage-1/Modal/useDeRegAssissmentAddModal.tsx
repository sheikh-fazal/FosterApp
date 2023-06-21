import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { RegAssessmentModalValidationSchema, RegAssessmentModalValues } from '.';
import { DeRegAssessmentTableMockData } from '..';

const useDeRegAssissmentAddModal = () => {
    const methods: any = useForm({
        resolver: yupResolver(RegAssessmentModalValidationSchema),
        defaultValues:  RegAssessmentModalValues,
    });
    const { reset, handleSubmit, formState: { errors, isSubmitting, isDirty }, }: any = methods;

   
    
  return {
    methods,
    handleSubmit,

  }

}
export default useDeRegAssissmentAddModal
