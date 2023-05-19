import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import Link from "next/link";
import { AForm, defaultValues } from ".";
import { LoadingButton } from "@mui/lab";
import { usePersonalInfo } from "./usePersonalInfo";

export default function PersonalInfo({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
}: any) {
 
  const { methods, onSubmit, handleSubmit, isSubmitting } =
    usePersonalInfo({
      onSubmitHandler,
      disabled,
      initialValueProps,
      message
    });

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {AForm?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item?.heading}
            </item.component>
          </Grid>
        ))}
        {!disabled && (
          <Grid item xs={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
              loading={isSubmitting}
            >
              Next
            </LoadingButton>
            <Link
              href={"/referral/social-worker-request-form"}
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
