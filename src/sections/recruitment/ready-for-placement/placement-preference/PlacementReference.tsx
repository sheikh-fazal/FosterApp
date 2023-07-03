import React from "react";
import RHFUploadFile from "@root/sections/carer-info/personal-info/form-f/components/RHFUploadFile";
import { FormSchema, defaultValues, placementReferenceData } from ".";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@root/components/hook-form";
import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const PlacementReference = () => {
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;
  const onSubmitHandler = (data: any) => {
    reset();
  };
  return (
    <Card sx={{ p: 1.5 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.palette.grey[600], mb: 2 }}
        >
          Foster Carer Placement Preference
        </Typography>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 4 }}
          columnSpacing={5}
          justifyContent="center"
        >
          {placementReferenceData.map((form: any) => (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              {form.id === 1 && (
                <Grid item xs={12} md={6} sx={{ mb: 3 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.grey[600] }}
                  >
                    Upload Video / Audio Recording of your Placement Preference
                  </Typography>
                  <RHFUploadFile name="uploadPhoto" {...methods} />
                </Grid>
              )}
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600], mb: 1 }}
              >
                {form?.title}
              </Typography>
              {form.id !== 7.5 && (
                <form.component
                  size="small"
                  {...form.otherOptions}
                  sx={{ color: theme.palette.grey[600] }}
                >
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
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <LoadingButton
            color="primary"
            size="medium"
            type="submit"
            variant="contained"
          >
            Submit
          </LoadingButton>
        </Box>
      </FormProvider>
    </Card>
  );
};

export default PlacementReference;
