import { useState, useRef, FC } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
// components
import {
  FormProvider,
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import { FormSchema, defaultValues } from "./formData";
import { useTheme } from "@emotion/react";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const WriteToWork: FC<any> = () => {
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

  const validDBS = useWatch({ control, name: "haveValidDBS" });
  const onSubmit = async (data: any) => {
    console.log({ data });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center">
        <Grid container item xs={12}>
          {/* Does The Candidate Have a valid DBS  */}
          <Grid item sm={6} container direction="column">
            <Grid item sx={{ padding: "0.5em" }}>
              <RHFSelect
                name="haveValidDBS"
                label="Does the candidate have a valid Enhanced DBS ?"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </RHFSelect>
            </Grid>
          </Grid>
          {/*DBS ceritificate No  */}
          {validDBS === "Yes" && (
            <Grid item sm={6} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="dbsNumber"
                  label="DBS (PVG) Certificate Number"
                />
              </Grid>
            </Grid>
          )}

          {/* if a candidate have a valid enhanced DBS  */}
          {validDBS === "Yes" && (
            <Grid item sm={12} container>
              {/* Issue Date */}
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFDatePicker
                    name="dbsIssueDate"
                    label="DBS (PVG) issue Date"
                    fullWidth
                  />
                </Grid>
              </Grid>
              {/* DBS Online  */}
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFSelect name="isDbsOnline" label="Is DBS (PVG) online?">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </RHFSelect>
                </Grid>
              </Grid>
              {/* DBS Service No  */}
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFTextField
                    name="dbsUpdatedServiceNo"
                    label="DBS (PVG) Update Service No."
                  />
                </Grid>
              </Grid>
              {/* Upload Certidicates  */}
              <Grid item sm={12}>
                <Grid item sx={{ padding: "0.5em" }}>
                  {/* Upload Certificates */}
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default WriteToWork;
