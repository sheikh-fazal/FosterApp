import { useState, FC, Fragment } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
// utils
// components
import {
  FormProvider,
  RHFRadioGroup,
  RHFTextField,
} from "@root/components/hook-form";

import { FormSchema, defaultValues, fieldsInfo } from "./formData";
import { useTheme } from "@emotion/react";
import FullWidthFormField from "@root/components/form-generator/FullWidthFormField";
import HalfWidthFormField from "@root/components/form-generator/HalfWidthFormField";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFSwitch } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import { DotedHeadingWithDisc, HeadingWithDisc } from "./Headings/Headings";
import { HeadingsWithDesInfo } from "./static-info/heading-data";

const AddDeclaration: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const methods: any = useForm({
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
    activateNextForm();
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center" sx={{ padding: "0.5em" }}>
        <Grid container item xs={12}>
          <Grid item>
            <Typography
              variant="formTopHeading"
              sx={{ color: theme.palette.primary.main }}
            >
              Declaration
            </Typography>
          </Grid>
          <Grid item sm={12} container>
            <Grid item sm={12}>
              <Typography sx={{ margin: "0.5em 0", fontWeight: "500" }}>
                The following declaration statements are asked to candidates.
              </Typography>
              <Typography>
                The information in this application form is true and complete. I
                agree that any deliberate omission, falsification or
                misrepresentation in the application form will be grounds for
                rejecting this application or subsequent dismissal if employed
                by the Organisation. Where applicable, I consent that the
                organisation can seek clarification regarding professional
                registration details.
              </Typography>
            </Grid>

            <Grid item sm={12} container direction="column">
              <Grid item>
                <RHFSwitch
                  name="agreeToAboveDec"
                  label="I agree to the above Declaration."
                />
              </Grid>
            </Grid>
            {/* Does the candidate have the right to work  */}
            <Grid item sm={12} sx={{ margin: "0.5em 0" }}>
              <Typography sx={{ fontWeight: "500" }}>
                Does the candidate have the right to work in UK?
              </Typography>
            </Grid>
            <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0 0.5em" }}>
                <RHFRadioGroup
                  name="rightToWork"
                  options={["Yes", "No"]}
                ></RHFRadioGroup>
              </Grid>
            </Grid>
            <Grid item sm={12} container>
              <RHFTextField
                multiline
                rows={4}
                name="moreDetails"
                label="If Yes, please provide more details"
              />
            </Grid>
            {/* are you willing to  */}
            <Grid item sm={12} sx={{ margin: "0.5em 0" }}>
              <Typography sx={{ fontWeight: "500" }}>
                Are you willing to undergo a full enhanced DBA check at a price
                of £55 ?
              </Typography>
            </Grid>
            <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0 0.5em" }}>
                <RHFRadioGroup
                  name="areYouWilling"
                  options={["Yes", "No"]}
                ></RHFRadioGroup>
              </Grid>
            </Grid>

            <Grid item sm={12}>
              {HeadingsWithDesInfo.map(({ heading, des, com }): any => {
                return (
                  <HeadingWithDisc heading={heading} des={des} com={com} />
                );
              })}
            </Grid>
            <Grid item sm={12}>
              <DotedHeadingWithDisc
                heading={HeadingsWithDesInfo[0].heading}
                des={HeadingsWithDesInfo[0].des}
              />
            </Grid>
            {/* A Custom Field On Full Width  */}
            {/* <Grid item sm={12} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="previousExpCustom"
                  label="Previous Exp Custom"
                />
              </Grid>
            </Grid> */}
          </Grid>
          {!disabled && (
            <Grid item sm={12} container direction="column">
              <Grid item container spacing={1}>
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

export default AddDeclaration;
