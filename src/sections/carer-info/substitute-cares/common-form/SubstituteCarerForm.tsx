import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Button } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues, SUBSTITUTECARERFORMDATA } from ".";
import Error from "@root/components/Error";
import { LoadingButton } from "@mui/lab";

//component function
export default function SubstituteCarerForm(props: any) {
  const { disabled, onSubmit, data, status }: any = props;
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: disabled ? data : defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmitHandler = (data: any) => {
    onSubmit(data);
    reset();
  };

  const formEl = (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container spacing={3}>
        {SUBSTITUTECARERFORMDATA.map((form: any) => {
          return (
            <Grid
              item
              xs={12}
              md={form?.gridLength}
              key={form.id}
              {...form.gridProps}
            >
              <form.component
                size="small"
                {...form.componentProps}
                disabled={disabled}
              >
                {form.componentProps.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : form.componentProps.typographytext}
              </form.component>
            </Grid>
          );
        })}
        {!disabled && (
          <Grid item xs={12} container gap={3}>
            <LoadingButton
              loading={status?.isLoading}
              size="large"
              disabled={status?.isLoading}
              type="submit"
              color={
                status?.isError
                  ? "error"
                  : status?.isSuccess
                  ? "success"
                  : "primary"
              }
              variant="contained"
            >
              {status?.isError ? "Try Again" : "Submit"}
            </LoadingButton>
            <Button
              size="large"
              type="submit"
              disabled={status?.isLoading}
              variant="contained"
              color="secondary"
            >
              Save as Draft
            </Button>
            <Button
              size="large"
              disabled={status?.isLoading}
              type="submit"
              variant="contained"
              color="warning"
            >
              Back
            </Button>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );

  if (status?.isError) return <Error />;
  return formEl;
}
