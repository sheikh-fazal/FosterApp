import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useRouter } from "next/router";
import React from "react";
import { ActiveSocialWorkerFormData } from ".";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { useActiveSocialWorkerForm } from "./useActiveSocialWorkerForm";

export default function ActiveSocialWorkerForm(props: any) {
  const router = useRouter();

  const { disabled } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isError,
    isSuccess,
    isLoading,
  } = useActiveSocialWorkerForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
    <Grid container spacing={4}>
      {ActiveSocialWorkerFormData?.map((item) => (
        <Grid item xs={12} md={item?.md} key={item?.id}>
          <item.component
            disabled={disabled}
            {...item.componentProps}
            size={"small"}
            fullWidth
          >
            {item?.componentProps?.select
              ? item?.options?.map((option: any) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))
              : null}
          </item.component>
        </Grid>
      ))}
      {!disabled && (
        <Grid item xs={12}>
          <LoadingButton
            type="submit"
            variant="contained"
            sx={{ mr: 2 }}
            loading={isLoading}
            color={isError ? "error" : isSuccess ? "success" : "primary"}
          >
            {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"}
          </LoadingButton>
          <Link
            href={`/foster-child/social-worker-details/la-social-worker?fosterChildId=${router?.query?.fosterChildId}`}
            style={{ textDecoration: "none" }}
          >
            <Button type="button" variant="contained">
              Back
            </Button>
          </Link>
        </Grid>
      )}
    </Grid>
  </FormProvider>
  );
}
