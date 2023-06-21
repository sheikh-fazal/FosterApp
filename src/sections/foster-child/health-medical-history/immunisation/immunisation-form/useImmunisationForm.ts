import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { useTheme } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import {
  FormSchema,
  immunisationInfoFormValue,
  immunisationInfoListValue,
} from "..";

export const useImmunisationForm = () => {
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: immunisationInfoListValue,
  });
  const {
    trigger,
    setValue,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: any) => {};

  return {
    methods,
    onSubmit,
    handleSubmit,
    theme,
  };
};
