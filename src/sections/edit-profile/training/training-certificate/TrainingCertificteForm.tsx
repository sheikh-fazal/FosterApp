import { useState, FC } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import InfoIcon from "@mui/icons-material/Info";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
// utils
// components
import { FormProvider, RHFSwitch } from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import { FormSchema, defaultValues } from "./formData";
import { useTheme } from "@emotion/react";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const TrainingCertificteForm: FC<any> = () => {
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
            {/* A Custom Field On Full Width  */}
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
                      Training Certificates
                    </Typography>
                  </Grid>
                  <Grid item>
                    <InfoIcon sx={{ color: theme.palette.primary.main }} />
                  </Grid>
                </Grid>

                {/* Text Fields That Accupies 100% width by default  */}
                <RHFSwitch
                  name="physicallyAudit"
                  label="Physically Audited and no Document Uploaded"
                />
                <Grid item sm={12}>
                  <Typography sx={{ fontWeight: "600" }}>
                    Did you require further training (online or in person) ?
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <RHFSwitch name="yes" label="Yes" />
                </Grid>
                <Grid item sm={12}>
                  <RHFSwitch name="no" label="No" />
                </Grid>

                {/* further training  */}
                <Grid item sm={12}>
                  <Typography sx={{ fontWeight: "600" }}>
                    Did you require further training (online or in person) ?
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <RHFSwitch
                    name="single"
                    label="Single certificate covering multiple trainings."
                  />
                </Grid>
                <Grid item sm={12}>
                  <RHFSwitch
                    name="multiple"
                    label="Individual training cartificates, as the case may be."
                  />
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
                    <Grid item>
                      <InfoIcon sx={{ color: theme.palette.primary.main }} />
                    </Grid>
                  </Grid>
                </Grid>
                {/* File Uploader  */}
                <Grid item sm={12}>
                  File Uploader
                </Grid>

                {/* certificate issue And expiry date  */}
                <Grid container>
                  <Grid item sm={6} container direction="column">
                    <Grid item sx={{ padding: "0.5em" }}>
                      <RHFDatePicker
                        name="issue"
                        label="When was the certificate issued *"
                      />
                    </Grid>
                  </Grid>
                  <Grid item sm={6} container direction="column">
                    <Grid item sx={{ padding: "0.5em" }}>
                      <RHFDatePicker
                        name="expiry"
                        label="Certificate Expiry Date *"
                      />
                    </Grid>
                  </Grid>
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

export default TrainingCertificteForm;
