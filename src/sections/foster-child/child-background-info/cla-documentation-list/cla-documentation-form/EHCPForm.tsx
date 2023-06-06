import React from 'react'
import { useForm } from 'react-hook-form';
import { Box, Grid, Paper } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider } from '@root/components/hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { EHCPFormValidation, EHCPFormData } from '..';

export default function EHCPForm(props: any) {

  const { defaultValues, disabled } = props;

  const methods: any = useForm({
    resolver: yupResolver(EHCPFormValidation),
    defaultValues
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);

  };


  return (
    <Paper elevation={4} sx={{ padding: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} disabled={disabled}>
        <Grid container columnSpacing={4}>
          {EHCPFormData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component
                {...item.componentProps}
            
                size={"small"}>
                {item?.componentProps?.select
                  ? item?.options?.map((option: any) => (
                    <option key={option?.value} value={option?.value}>
                      {option?.label}
                    </option>
                  ))
                  : null}
                {item?.heading}
              </item.component>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", mb: "1rem" }}>
          <LoadingButton
            sx={{ marginRight: "1rem" }}
            type="submit"
            variant="contained">
            Submit
          </LoadingButton>
          <LoadingButton
            type="button"
            sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
            variant="contained">
            back
          </LoadingButton>
        </Box>

      </FormProvider>
    </Paper>
  )
}