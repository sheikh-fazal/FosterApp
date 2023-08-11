import {
  Box,
  Grid,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import IsFetching from "@root/components/loaders/IsFetching";
import { HospitalizationFromvalue } from ".";

export const ReviewOfficerReportsForm = (props: any) => {
  const { action, fosterChildId, hospitalizationId } = props;
  // const { SubmitData, getDefaultValue, isloading, isFatching } =
  //   useHospitalizationForm({
  //     action: action,
  //     fosterChildId: fosterChildId,
  //     hospitalizationId: hospitalizationId,
  //   });
  const methods: any = useForm({
    // mode: "onTouched",
    //   resolver: yupResolver(FormSchema),
    //   defaultValues: getDefaultValue,
  });
  const {
    trigger,
    setValue,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const theme: any = useTheme();

  // if (isloading) return <SkeletonFormdata />;

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <Box sx={{ px: 1, py: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <FormProvider methods={methods} onSubmit={handleSubmit()}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="name"
                  select
                  label="Name of foster carer"
                  // defaultValue="EUR"
                  helperText="Please select your currency"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  // id="outlined-textarea"
                  label="Date of review meeting"
                  // placeholder="Placeholder"
                  multiline
                />
              </Grid>
            </Grid>
            {/* <IsFetching isFetching={isFatching} /> */}
            {HospitalizationFromvalue.map((form: any, index) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={index}>
                  <Box sx={{ px: 0.5, py: 1 }}>
                    {form.component === "label" ? (
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.grey[600],
                          fontWeight: theme.typography.fontWeightMedium,
                        }}
                      >
                        {form.label}
                      </Typography>
                    ) : (
                      <form.component
                        size="small"
                        {...form.otherOptions}
                        disabled={
                          action === "view" ||
                          (action === "edit" && form.id === 1)
                            ? true
                            : false
                        }
                        InputLabelProps={{
                          shrink:
                            action === "view" ||
                            (action === "edit" && form.id === 1)
                              ? true
                              : undefined,
                          disabled:
                            action === "view" ||
                            (action === "edit" && form.id === 1)
                              ? true
                              : undefined,
                        }}
                      />
                    )}
                  </Box>
                </Grid>
              );
            })}
          </FormProvider>
        </Grid>
      </Grid>
    </Box>
  );
};
