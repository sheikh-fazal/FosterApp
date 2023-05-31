import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  useTheme,
  Typography,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { FormProvider, RHFCheckbox } from "@root/components/hook-form";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues, SUBSTITUTECARERFORMDATA } from ".";
import dayjs from "dayjs";
import IsFetching from "@root/components/loaders/IsFetching";
import Error from "@root/components/Error";

//component function
export default function SubstituteCarerForm(props: any) {
  const { disabled, onSubmit, data, isError } = props;
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: disabled ? data : defaultValues,
  });

  const {
    reset,
    trigger,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmitHandler = (data: any) => {
    onSubmit(data);
    reset();
  };

  const formEl = (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container spacing={3}>
        {SUBSTITUTECARERFORMDATA.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
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
                  : null}
              </form.component>
            </Grid>
          );
        })}
        {!disabled && (
          <Grid item xs={12}>
            <Button size="large" type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );

  if (isError) return <Error />;
  return formEl;
}
