import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography, useTheme } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import {
  FormSchema,
  defaultValues,
  carerSectionAlphaData,
} from "./PetQuestionnaireData";

export default function PetQuestionnaireA(props: any) {
  const theme: any = useTheme();
  const { onSubmit } = props;
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;
  const onSubmitHandler = (data: any) => {
    onSubmit(data);
    reset();
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Typography
        sx={{ color: theme.palette.primary.main }}
        variant="subtitle1"
      >
        Basic Details
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={5} alignItems="center">
        {carerSectionAlphaData.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              <Typography
                sx={{ mb: 3, color: theme.palette.primary.main }}
                variant="subtitle1"
              >
                {form?.title}
              </Typography>
              {form.id !== 7.5 && (
                <form.component size="small" {...form.otherOptions} disabled>
                  {form.otherOptions.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              )}
            </Grid>
          );
        })}
      </Grid>
    </FormProvider>
  );
}
