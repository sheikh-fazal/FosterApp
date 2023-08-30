import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Grid, Typography, useTheme } from "@mui/material";
import Page from "@root/components/Page";
import { FormProvider } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import { healthAndSafetyImmunisationData, FormSchema, defaultValues } from ".";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import usePath from "@root/hooks/usePath";

export const useImmunisationInfoTab = ({
  breadCrumbData,
  onSubmitHandler,
  initialValueProps,
  message,
  isAdding,
}: any) => {
  const theme: any = useTheme();
  const router = useRouter();
  const { makePath } = usePath();
  const { fosterCarerId } = router.query;
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: initialValueProps,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: any) => {
    try {
      const res: any = await onSubmitHandler({
        formData: data,
        fosterCarerId: fosterCarerId,
      }).unwrap();
      enqueueSnackbar(res?.message, {
        variant: "success",
      });
      {
        isAdding &&
          router.push(
            makePath({
              path: "/carer-info/medical-history/immunisations/add-immunisation-table-tabs",
              queryParams: { immunisationId: res?.data?.id },
            })
          );
      }
    } catch (error: any) {
      enqueueSnackbar(error?.message ?? "Something Went Wrong!", {
        variant: "error",
      });
      // formData(data);
    }
  };
  useEffect(() => {
    breadCrumbData("Immunisations Info");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    handleSubmit,
    onSubmit,
    methods,
    theme,
    router,
    isSubmitting,
    makePath,
    
  };
};
