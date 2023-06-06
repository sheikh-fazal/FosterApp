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

const ChildEducationInfoForm = ({ action, id }: any) => {
  const router = useRouter();
  const theme = useTheme();
  const methods: any = useForm({
    defaultValues,
  });
  return (
    <FormProvider methods={methods}>
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
                  disabled={action === "view" ? true : false}
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
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": {
                  backgroundColor: "#F6830F",
                },
              }}
              onClick={() => {
                router.push("/referral/referral-history");
              }}
              type="button"
              variant="contained"
            >
              Back
            </Button>
            <LoadingButton
              sx={{ marginLeft: "1rem" }}
              type="submit"
              variant="contained"
              //   onClick={handleNextTab}
            >
              Submit
            </LoadingButton>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default ChildEducationInfoForm;
