import { Button, Card, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import Link from "next/link";
import { CarerFamilySupportNetworkFormData, defaultValues } from "./";
import { LoadingButton } from "@mui/lab";
import { useCarerFamilySupportNetworkForm } from "./useCarerFamilySupportNetworkForm";

// ----------------------------------------------------------------------

export default function CarerFamilySupportNetworkForm({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
  isError,
  isSuccess,
}: any) {
  const { methods, handleSubmit, onSubmit, isSubmitting } =
    useCarerFamilySupportNetworkForm({
      onSubmitHandler,
      initialValueProps,
      message,
    });

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {CarerFamilySupportNetworkFormData?.map((item) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component
                disabled={disabled}
                {...item.componentProps}
                size={"small"}
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
                loading={isSubmitting}
                color={isError ? "error" : isSuccess ? "success" : "primary"}
              >
                {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"}
              </LoadingButton>
              <Link
                href={"/carer-info/personal-info/carer-family-support-network"}
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
    </Card>
  );
}
