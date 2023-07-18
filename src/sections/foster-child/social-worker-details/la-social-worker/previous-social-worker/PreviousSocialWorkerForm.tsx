import { Button, Card, Grid, Typography, useTheme } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useRouter } from "next/router";
import React from "react";
import { ActiveSocialWorkerFormData } from "../active-social-worker/index";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { usePreviousSocialWorkerForm } from "./usePreviousSocialWorkerForm";

export default function PreviousSocialWorkerForm(props: any) {
  const router = useRouter();
  const theme: any = useTheme();

  const { disabled } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isError,
    isSuccess,
    isLoading,
  } = usePreviousSocialWorkerForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ px: 2, pb: 3 }}>
        <Typography
          variant="h6"
          color={theme.palette.primary.main}
          sx={{ my: 2 }}
        >
          Previous LA Social Worker Contact Details
        </Typography>

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
      </Card>
    </FormProvider>
  );
}
