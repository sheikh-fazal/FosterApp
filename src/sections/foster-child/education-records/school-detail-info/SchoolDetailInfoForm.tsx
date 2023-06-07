import React from "react";
import { useSchoolDetailInfoForm } from "./useSchoolDetailInfoForm";
import { FormProvider } from "../../../../components/hook-form";
import { Button, Grid } from "@mui/material";
import { SchoolDeatilInfoFormData, defaultValues } from ".";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";

export default function SchoolDetailInfoForm(props: any) {
  const {
    disabled,
    onSubmitHandler,
    initialValueProps = defaultValues,
    message,
    isError,
    isSuccess,
  } = props;

  const { methods, handleSubmit, onSubmit, isSubmitting } =
    useSchoolDetailInfoForm({
      onSubmitHandler,
      initialValueProps,
      message,
    });
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        {SchoolDeatilInfoFormData?.map((item) => (
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
  );
}
