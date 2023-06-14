import { yupResolver } from '@hookform/resolvers/yup';
import { usePostEhcpClaDocumentationListMutation } from '@root/services/foster-child/child-background-info/cla-documentation-list/CLADocumentationListAPI';
import { useRouter } from 'next/router';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useForm } from 'react-hook-form';
import { EHCPFormValidation, defaultValuesForEhcp } from '..';

export const useEhcpForm = (props: any) => {

    const router = useRouter();
    const { defaultValues, disabled } = props;
    const methods: any = useForm({
      resolver: yupResolver(EHCPFormValidation),
      defaultValues: defaultValuesForEhcp
    });
    const { handleSubmit, formState: { errors, isSubmitting, isDirty }, } = methods;
  
    const [postEhcpClaDocumentationList] = usePostEhcpClaDocumentationListMutation();
  
    const onSubmit = async (data: any) => {
      console.log(data);
      try {
        const res: any = await postEhcpClaDocumentationList(data).unwrap();
        console.log(res);
        router.push(`/foster-child/child-background-info/cla-documentation`);
        enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
          variant: "success",
        });
      } catch (error: any) {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      }
    };

  return (
    {
        methods, handleSubmit, onSubmit, disabled, router, isSubmitting
    }
  )
}
