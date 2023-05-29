import { useState, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
// utils
// components
import { FormProvider } from "@root/components/hook-form";

import { FormSchema, defaultValues, fieldsInfo } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";

const MedicalQuestionnaire: FC<any> = () => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log({ data });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center">
        <Grid container item xs={12}>
          <Grid item sm={12} container>
            <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                {/* Heading And Icon Con  */}
                <Grid item container>
                  <Grid item>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      Immunisation
                    </Typography>
                  </Grid>
                </Grid>
                {/* certificate issue And expiry date  */}
                <Grid container>
                  {/* Dynamically Generated Fields  */}
                  {fieldsInfo.map((item: any, index: number) => {
                    return (
                      <Fragment key={index}>
                        {/* if there is only one field that is accoupies whole width   */}
                        {item.length === 1 && (
                          <FullWidthFormField
                            item={item}
                            isSubmitting={isSubmitting}
                            disabled={disabled}
                          />
                        )}
                        {/* if there are two fields with 50% 50% width   */}
                        {item.length === 2 && (
                          <HalfWidthFormField
                            item={item}
                            isSubmitting={isSubmitting}
                            disabled={disabled}
                          />
                        )}
                      </Fragment>
                    );
                  })}
                  {/* A Custom Field On Full Width  */}
                </Grid>
                {/* Upload Certificates Heading And Icons  */}
                <Grid item sm={12}>
                  <Grid item container>
                    <Grid item>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        Upload Certificates
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {/* File Uploader  */}
                <Grid item sm={12}>
                  File Uploader
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {!disabled && (
            <Grid item sm={12} container direction="column">
              <Grid item container sx={{ padding: "0.5em" }} spacing={1}>
                <Grid item>
                  <Button variant="contained" type="submit">
                    Save
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" type="submit">
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default MedicalQuestionnaire;
