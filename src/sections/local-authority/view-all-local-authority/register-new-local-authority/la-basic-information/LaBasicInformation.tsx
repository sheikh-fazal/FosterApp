import { Grid, Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import PhoneIcon from "../../../../../assets/svg/local-authority/phone-icon.svg";
import { FormProvider } from "@root/components/hook-form";
import { useLaBasicInformation } from "./useLaBasicInformation";
import { laBasicInformationFormData } from ".";
import Image from "next/image";

const LaBasicInformation = ({ handleNextTab }: any) => {
  const { theme, handleSubmit, onSubmit, methods, isSubmitting, router } = useLaBasicInformation({ handleNextTab: handleNextTab })

  return (
    <Box >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} sx={{ py: "30px", }} >
          {laBasicInformationFormData.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i} >
                <Typography sx={styles.label(theme)}>{form.title}</Typography>
                {form.component ? (
                  <form.component disabled={router.query.action === 'view-local-authority' && true} size="small" {...form.otherOptions} >
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                      : null}
                  </form.component>
                ) : (
                  <Box display="flex" gap="10px" alignItems="center" sx={{ cursor: "pointer" }}>
                    <Typography sx={styles.title(theme)}>{form.head}</Typography>
                    <Box sx={styles.phoneImg}><Image src={PhoneIcon} alt="" /></Box>
                  </Box>
                )}
              </Grid>
            );
          })}

          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              
              <Button sx={styles.submitButton}
                type="button"
                variant="contained"
              >
                Back
              </Button>
              {router.query.action !== 'view-local-authority' &&
                <LoadingButton type="submit" variant="contained" loading={isSubmitting} >
                  Next
                </LoadingButton>
              }
            </Box>
          </Grid>
        </Grid>
      </FormProvider>

    </Box>
  );
};
export default LaBasicInformation;

const styles = {
  label: (theme: any) => ({ fontWeight: 600, mb: 0.2, color: theme.palette.mode === "light" ? "#343A40" : theme.palette.mode }),
  title: (theme: any) => ({ fontSize: "16px", fontWeight: 600, margin: 0, color: theme.palette.primary.main }),
  phoneImg: () => ({ backgroundColor: "#F6830F", borderRadius: "10px", boxShadow: "2px 3px 5px rgba(14, 145, 140, 0.3)", p: 0.5 }),
  submitButton: { backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F" }, }
}
