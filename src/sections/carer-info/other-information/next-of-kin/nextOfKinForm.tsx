import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { FormProvider } from "@root/components/hook-form";
import { NextofkinFromData, nextofkinFormValues } from ".";
const NextOfKinForm = () => {
  const methods: any = useForm({
    // mode: "onTouched",
    // resolver: yupResolver(FormSchema),
    defaultValues: nextofkinFormValues,
  });
  const { trigger, setValue, handleSubmit, getValues, watch, reset } = methods;
  const submitHander = (data: any) => {
    console.log(data);
  };

  const theme = useTheme();
  console.log(theme);

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
                {NextofkinFromData.map((form: any, index) => {
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
                          <form.component size="small" {...form.otherOptions} />
                        )}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </FormProvider>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default NextOfKinForm;
