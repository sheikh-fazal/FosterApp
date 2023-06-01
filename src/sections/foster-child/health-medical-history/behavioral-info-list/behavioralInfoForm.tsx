import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { FormProvider } from "@root/components/hook-form";
import router from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BehaviouralInfoDefultValue,
  BehaviouralInfoFromData,
  FormSchema,
} from ".";

function BehavioralInfoForm(props: any) {
  const { action, id } = props;
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: BehaviouralInfoDefultValue,
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
  const submitHander = (data: any) => {
    console.log(data);
  };

  const theme: any = useTheme();
  console.log(errors);
  return (
    <Paper elevation={2} sx={{ borderRadius: 2 }}>
      <Box sx={{ px: 1, py: 2 }}>
        <Grid container>
          <Grid item xs={12}>
            <FormProvider
              methods={methods}
              onSubmit={handleSubmit(submitHander)}
            >
              <Grid container>
                {BehaviouralInfoFromData.map((form: any, index) => {
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
                            disabled={action === "view" ? true : false}
                            InputLabelProps={{
                              shrink: action === "view" ? true : undefined,
                              disabled: action === "view" ? true : undefined,
                            }}
                          />
                        )}
                      </Box>
                    </Grid>
                  );
                })}
                <Grid
                  item
                  sx={{
                    mt: 2,
                    display: "flex",
                    gap: "15px",
                    flexWrap: "wrap",
                    px: 0.9,
                  }}
                  xs={12}
                >
                  {action === "edit" || action === "add" ? (
                    <Button
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        "&:hover": { bgcolor: theme.palette.primary.main },
                      }}
                      variant="contained"
                      type="submit"
                    >
                      Submit
                    </Button>
                  ) : null}

                  <Button
                    sx={{
                      bgcolor: theme.palette.orange.main,
                      "&:hover": { bgcolor: theme.palette.orange.main },
                    }}
                    variant="contained"
                    onClick={() =>
                      router.push(
                        "/foster-child/health-medical-history/behavioural-info/"
                      )
                    }
                  >
                    back
                  </Button>
                </Grid>
              </Grid>
            </FormProvider>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default BehavioralInfoForm;