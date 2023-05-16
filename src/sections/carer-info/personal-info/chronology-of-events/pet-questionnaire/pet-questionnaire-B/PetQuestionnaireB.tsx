import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  useTheme,
} from "@mui/material";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import {
  FormSchema,
  petQuestionnaireData,
  defaultValues,
} from "./PetQuestionnaireData";
const PetQuestionnaireB = () => {
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
    <Box>
      <Typography
        sx={{ color: theme.palette.primary.main }}
        variant="subtitle1"
      >
        Health and Hygiene
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
        <Grid container>
          <FormProvider
            methods={methods}
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <Grid
              container
              rowSpacing={2}
              columnSpacing={5}
              alignItems="center"
            >
              {petQuestionnaireData.map((form: any) => {
                return (
                  <Grid item xs={12} md={form?.gridLength} key={form.id}>
                    <Typography
                      sx={{ mb: 3, color: theme.palette.primary.main }}
                      variant="subtitle1"
                    >
                      {form?.title}
                    </Typography>
                    {form.component !== "RadioGroup" && (
                      <form.component
                        size="small"
                        {...form.otherOptions}
                        disabled
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
                    {form.component === "RadioGroup" && (
                      <Box
                        sx={{ display: "flex", gap: 2, alignItems: "center" }}
                      >
                        <Typography
                          sx={{
                            color: theme.palette.grey[500],
                          }}
                          variant="subtitle1"
                        >
                          {form.otherOptions.label}
                        </Typography>
                        <RadioGroup
                          name="courtOrders"
                          sx={{ display: "flex", flexDirection: "row" }}
                        >
                          {form?.Options?.map((mode: any, index: any) => {
                            return (
                              <Grid key={mode} item>
                                <FormControlLabel
                                  label={mode}
                                  name={form.otherOptions.name}
                                  disabled={true}
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
            </Grid>
          </FormProvider>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default PetQuestionnaireB;
