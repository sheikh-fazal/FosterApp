/* eslint-disable react-hooks/rules-of-hooks */
import {
  Grid,
  useTheme,
  Button,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import { FormSchema, carInsuranceData, defaultValues } from ".";
import router from "next/router";
const DbsCheckForm = () => {
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const { reset, handleSubmit, setValue, getValues, trigger } = methods;

  const onSubmitHandler = (data: any) => {
    reset();
  };

  return (
    <>
      <Grid container alignItems="center">
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
            {carInsuranceData.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form.id}>
                  {form.component !== "RadioGroup" && (
                    <form.component size="small" {...form.otherOptions}>
                      {form.otherOptions.select
                        ? form.options.map((option: any) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))
                        : null}
                    </form.component>
                  )}
                  {form.component === "RadioGroup" && (
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Typography
                        sx={{
                          color: theme.palette.grey[500],
                          fontWeight: theme.typography.fontWeightMedium,
                        }}
                        variant="body1"
                        color="initial"
                      >
                        {form.otherOptions.label}
                      </Typography>
                      <RadioGroup
                        name={form.otherOptions.name}
                        onChange={(e) => {
                          setValue(`${form.otherOptions.name}`, e.target.value);
                          trigger(`${form.otherOptions.name}`);
                        }}
                        defaultValue={getValues(`${form.otherOptions.name}`)}
                        sx={{ display: "flex", flexDirection: "row" }}
                      >
                        {form?.Options?.map((mode: any) => {
                          return (
                            <Grid key={mode} item>
                              <FormControlLabel
                                label={mode === true ? "Yes" : "No"}
                                name={form.otherOptions.name}
                                control={<Radio />}
                                value={mode}
                              />
                            </Grid>
                          );
                        })}
                      </RadioGroup>
                    </Box>
                  )}
                </Grid>
              );
            })}

            <Grid
              xs={12}
              sx={{ mt: 2, display: "flex", gap: "15px", flexWrap: "wrap" }}
              spacing={2}
              item
            >
              <Button
                type="submit"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
                variant="contained"
              >
                Submit
              </Button>
              <Button
                sx={{
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
                onClick={() =>
                  router.push(
                    "/carer-info/background-checks/statutory-checks-list"
                  )
                }
              >
                back
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </Grid>
    </>
  );
};

export default DbsCheckForm;
