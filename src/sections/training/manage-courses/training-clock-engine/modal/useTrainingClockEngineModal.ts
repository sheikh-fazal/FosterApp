import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { formSchema, initialValues, NotificationSettingsInitialValues } from '.';

export const useTrainingClockEngineModal = () => {
    const methods: any = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: initialValues || NotificationSettingsInitialValues,
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
