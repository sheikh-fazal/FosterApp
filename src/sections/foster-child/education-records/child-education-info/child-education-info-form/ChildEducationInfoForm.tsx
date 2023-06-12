import { useRouter } from "next/router";
// @mui
import { Grid, Box, Button, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider, RHFTextField } from "@root/components/hook-form";
//
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { defaultValues, educationInfoFormData } from ".";
import { useForm } from "react-hook-form";
import { useChildEducationForm } from "./useChildEducationForm";
import Link from "next/link";

const ChildEducationInfoForm = (props: any) => {
  const {
    disabled,
    onSubmitHandler,
    initialValueProps = defaultValues,
    message,
    isError,
    isSuccess,
  } = props;
  const { methods, handleSubmit, onSubmit, isSubmitting, theme } =
    useChildEducationForm({
      onSubmitHandler,
      initialValueProps,
      message,
    });
  // const router = useRouter();
  // const theme = useTheme();
  // const methods: any = useForm({
  //   defaultValues,
  // });
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4} rowSpacing={3}>
        {educationInfoFormData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography
                sx={{
                  fontWeight: 600,
                  mb: 0.3,
                  color:
                    theme.palette.mode === "light"
                      ? "#343A40"
                      : theme.palette.mode,
                }}
              >
                {form.title}
              </Typography>
              {form.component ? (
                <form.component
                  disabled={disabled}
                  size="small"
                  {...form.otherOptions}
                >
                  {form?.otherOptions?.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : form?.heading}
                </form.component>
              ) : (
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                  }}
                >
                  {form.head}
                </Typography>
              )}
            </Grid>
          );
        })}

        <Grid item xs={12}>
          {!disabled && (
            <Grid item xs={12}>
              <LoadingButton
                type="submit"
                variant="contained"
                sx={{ mr: 2 }}
                loading={isSubmitting}
                color={isError ? "error" : isSuccess ? "success" : "primary"}
              >
                {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"}
              </LoadingButton>
              <Link
                href={"/carer-info/personal-info/carer-family-support-network"}
                style={{ textDecoration: "none" }}
              >
                <Button type="button" variant="contained">
                  Back
                </Button>
              </Link>
            </Grid>
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default ChildEducationInfoForm;
