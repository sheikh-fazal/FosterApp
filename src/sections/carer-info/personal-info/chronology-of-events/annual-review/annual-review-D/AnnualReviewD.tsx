import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues, annualReviewD } from "./AnnualReviewData";

export default function AnnualReviewD(props: any) {
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
    <Box sx={{ mt: 1 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
        <Grid container rowSpacing={2} columnSpacing={5} alignItems="center">
          {annualReviewD.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                <Typography
                  sx={{ mb: 2, color: theme.palette.primary.main }}
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
    </Box>
  );
}
