import { useState, FC } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
// utils
// components
import {
  FormProvider,
  RHFRadioGroup,
  RHFSwitch,
  RHFTextField,
} from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import { FormSchema, defaultValues } from "./formData";
import { useTheme } from "@emotion/react";

const DBS: FC<any> = () => {
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

  const havePs45 = useWatch({ control, name: "havePs45" });
  const onSubmit = async (data: any) => {
    console.log({ data });
  };

  return (
    <Grid item sm={12}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center" item sm={12}>
          {/* if a candidate have a valid enhanced DBS  */}
          <Grid item sm={12} container>
            {/* Issue Date */}
            <Grid item sm={6} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField name="textCode" label="Pay Tax Code*" />
              </Grid>
            </Grid>
            {/* DBS Online  */}
            <Grid item sm={6} container direction="column">
              <Grid item sx={{ padding: "0.5em" }}>
                <RHFTextField
                  name="nationalCode"
                  label="National Insurance No.*"
                />
              </Grid>
            </Grid>
            <Grid item sm={12} sx={{ padding: "0.5em" }}>
              <Typography sx={{ fontWeight: 600, color: "black" }}>
                Do you have a P45 from a previous employer within the current
                tax year?
              </Typography>
              <RHFRadioGroup
                name="havePs45"
                options={["Yes", "No"]}
              ></RHFRadioGroup>

              {/* File Uploader if he has P45  */}
              {havePs45 === "Yes" && (
                <>
                  <Typography sx={{ fontWeight: 600, color: "black" }}>
                    P45 File Upload
                  </Typography>
                  File Uploader
                </>
              )}

              <Typography sx={{ fontWeight: 600, color: "black" }}>
                Tax year runs from April 6 to Apr 5 following year.
              </Typography>
              <Typography sx={{ color: "#343A40" }}>
                Choose the statement that applies that applies to you, either
                A,B or C, and turn on the appropriate toggle
              </Typography>
              <Typography sx={{ fontWeight: 600, color: "black" }}>
                Please choose which statement applies to you
              </Typography>
            </Grid>

            {/* Option A  */}
            <Grid item sm={12} container sx={{ padding: "0.5em" }}>
              <Grid item sm={1}>
                <RHFSwitch name="optA" />
              </Grid>
              <Grid item sm={11}>
                <Typography sx={{ color: "#343A40", mt: 0.5 }}>
                  A. Do not choose this statement if you’re in receipt of a
                  State, works or private pension. Choose this statement if the
                  following applies.
                </Typography>
                <Typography sx={{ color: "#343A40", mt: 0.5, pr: 2 }}>
                  This is my first job since 6 April and since the 6 April I’ve
                  not received payments from any of the following :
                </Typography>
                <Typography sx={{ color: "#343A40", mt: 0.5 }}>
                  <ul>
                    <li>obseeker’s Allowance</li>
                    <li>Employement and Support Allowance</li>
                    <li>Incapacity Benefit</li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
            {/* Option B  */}
            <Grid item sm={12} container sx={{ padding: "0.5em" }}>
              <Grid item sm={1}>
                <RHFSwitch name="optB" />
              </Grid>
              <Grid item sm={11}>
                <Typography sx={{ color: "#343A40", mt: 0.5 }}>
                  B. Do not choose this statement if you’re in receipt of a
                  State, works or private pension. Choose this statement if the
                  following applies.
                </Typography>
                <Typography sx={{ color: "#343A40", mt: 0.5, pr: 2 }}>
                  This is my first job since 6 April and since the 6 April I’ve
                  not received payments from any of the following :
                </Typography>
                <Typography sx={{ color: "#343A40", mt: 0.5 }}>
                  <ul>
                    <li>obseeker’s Allowance</li>
                    <li>Employement and Support Allowance</li>
                    <li>Incapacity Benefit</li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
            {/* Option C  */}
            <Grid item sm={12} container sx={{ padding: "0.5em" }}>
              <Grid item sm={1}>
                <RHFSwitch name="optC" />
              </Grid>
              <Grid item sm={11}>
                <Typography sx={{ color: "#343A40", mt: 0.5 }}>
                  C. Do not choose this statement if you’re in receipt of a
                  State, works or private pension. Choose this statement if the
                  following applies.
                </Typography>
              </Grid>
            </Grid>
            {/* Types of student loans  */}
            <Grid
              item
              sm={12}
              container
              sx={{ padding: "0.5em" }}
              flexDirection="column"
            >
              <Grid item>
                <Typography sx={{ fontWeight: 600, color: "black" }}>
                  Student Loan
                </Typography>
              </Grid>
              {/* Plan 1  */}
              <Grid item container>
                <Typography sx={{ fontWeight: 600, color: "black" }}>
                  You&apos;ll Have a Plan 1 student Loan if:
                </Typography>
              </Grid>
              {/* plan 1 options  */}
              <Grid item container sx={{ pl: 2 }}>
                <ul>
                  <li>
                    You lived in England or Wales and started your undergraduate
                    course (undergraduate or post graduate)
                  </li>
                  <li>
                    You lived in England or Wales and started your undergraduate
                    course (undergraduate or post graduate)
                  </li>
                </ul>
              </Grid>

              {/* Plan 2  */}
              <Grid item container>
                <Typography sx={{ fontWeight: 600, color: "black" }}>
                  You&apos;ll Have a Plan 2 student Loan if:
                </Typography>
              </Grid>
              {/* plan 1 options  */}
              <Grid item container sx={{ pl: 2 }}>
                <ul>
                  <li>
                    You lived in England or Wales and started your undergraduate
                    course (undergraduate or post graduate)
                  </li>
                  <li>
                    You lived in England or Wales and started your undergraduate
                    course (undergraduate or post graduate)
                  </li>
                  <li>
                    You lived in England or Wales and started your undergraduate
                    course (undergraduate or post graduate)
                  </li>
                  <li>
                    You lived in England or Wales and started your undergraduate
                    course (undergraduate or post graduate)
                  </li>
                </ul>
              </Grid>
            </Grid>
            {/* Do you have one of the Student Loans */}
            <Grid item sm={12} sx={{ padding: "0.5em" }}>
              <Typography sx={{ fontWeight: 600, color: "black" }}>
                Do you have one of the Student Loans
              </Typography>
              <RHFRadioGroup
                name="studentLoanType1"
                options={["Yes", "No"]}
              ></RHFRadioGroup>
            </Grid>
            {/* Post Graduate Loan  */}
            {/* Types of student loans  */}
            <Grid
              item
              sm={12}
              container
              sx={{ padding: "0.5em" }}
              flexDirection="column"
            >
              <Grid item>
                <Typography sx={{ fontWeight: 600, color: "black" }}>
                  Post Graduate Loan
                </Typography>
              </Grid>
              {/* PostGraduate Loan  */}
              <Grid item container>
                <Typography sx={{ fontWeight: 600, color: "black" }}>
                  You&apos;ll Have a Postgraduate Loan if:
                </Typography>
              </Grid>
              {/* PostGraduate Loan  */}
              <Grid item container sx={{ pl: 2 }}>
                <ul>
                  <li>
                    You lived in England or Wales and started your undergraduate
                    course (undergraduate or post graduate)
                  </li>
                  <li>
                    You lived in England or Wales and started your undergraduate
                    course (undergraduate or post graduate)
                  </li>
                </ul>
              </Grid>
            </Grid>
            {/* Do you have one of the Student Loans */}
            <Grid item sm={12} sx={{ padding: "0.5em" }}>
              <Typography sx={{ fontWeight: 600, color: "black" }}>
                Do you have one of the Student Loans
              </Typography>
              <RHFRadioGroup
                name="postgraduateLoan"
                options={["Yes", "No"]}
              ></RHFRadioGroup>
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
    </Grid>
  );
};

export default DBS;
