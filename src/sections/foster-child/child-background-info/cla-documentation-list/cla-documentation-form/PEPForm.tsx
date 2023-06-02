import React from 'react'
import { useForm } from 'react-hook-form';
import { Box, Grid, List, Paper, Typography } from '@mui/material';
import { PEPFormData, PEPFormValidation, StrategiesAndEvidence, TargetsAndObjectivesData } from '..';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider } from '@root/components/hook-form';
import LoadingButton from '@mui/lab/LoadingButton';


export default function PEPForm(props: any) {

  const { defaultValues } = props;

  const methods: any = useForm({
    resolver: yupResolver(PEPFormValidation),
    defaultValues
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);

  };

  return (
    <Paper elevation={4} sx={{ padding: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {PEPFormData?.map((item: any) => (
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
};

export function TargetsAndObjectives() {
  return (

    <Grid container columnSpacing={4}>
      <Grid item xs={12} md={6}>
        {TargetsAndObjectivesData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}
              size={"small"}>
              {item?.heading}
              <Box sx={{ display: "flex", alignItems: "top", flexWrap: "nowrap" }}>
                <h4> {item?.paraTitle}</h4>
                <Box sx={{ mb: 2 }}>{item?.para}</Box>
              </Box>
            </item.component>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        {StrategiesAndEvidence?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}
              size={"small"}>
              {item?.heading}
              <li>{item?.para}</li>
            </item.component>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}