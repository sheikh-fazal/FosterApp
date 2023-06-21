import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  usePostAllegationDocumentsMutation,
  useUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/uploadDocumentsApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { defaultValues, formSchema } from "./index";
import { yupResolver } from "@hookform/resolvers/yup";

export const useUploadDocumentsModal = ({ view }: any) => {
  let theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(formSchema),
    defaultValues: defaultValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = methods;
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return { methods, handleSubmit, onSubmit, isSubmitting, isDirty, theme };
};
