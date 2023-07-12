import { useRouter } from "next/router";
// @mui
import { Grid, Box, Button, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider, RHFTextField } from "@root/components/hook-form";
//
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { useForm } from "react-hook-form";
import { useChildEducationForm } from "./useChildEducationForm";
import Link from "next/link";

const ChildEducationInfoForm = () => {
  const { methods, isSubmitting, theme, handleSubmit, onSubmitHandler, childEducationInfoFormData } =
    useChildEducationForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container columnSpacing={2}>
        {childEducationInfoFormData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography
                sx={{
                  mt: 2,
                  color:
                    theme.palette.mode === "light"
                      ? "#343A40"
                      : theme.palette.mode,
                }}
              >
                {form.title}
              </Typography>
              <form.component size="small" {...form.otherOptions}>
                {form?.otherOptions?.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : form?.heading}
              </form.component>
            </Grid>
          );
        })}

        <Grid item xs={12} mt={3}>
          {/* {!disabled && ( */}
          <Grid item xs={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
              // loading={isSubmitting}
              // color={isError ? "error" : isSuccess ? "success" : "primary"}
            >
              "Submit"
            </LoadingButton>
            <Link
              href={"/foster-child/education-records/child-education"}
              style={{ textDecoration: "none" }}
            >
              <Button type="button" variant="contained">
                Back
              </Button>
            </Link>
          </Grid>
          {/* )} */}
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default ChildEducationInfoForm;
