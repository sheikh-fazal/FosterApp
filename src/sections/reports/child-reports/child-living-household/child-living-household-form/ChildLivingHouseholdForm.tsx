import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { useChildLivingHouseholdForm } from "./useChildLivingHouseholdForm";
import { FRF1FormData } from ".";

const ChildLivingHouseholdForm = ({ action, id }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods, onSubmit, handleSubmit, handleBack } =
    useChildLivingHouseholdForm();
  return (
    <Card sx={{ p: 2 }}>
      <Box textAlign={"center"}>
        <Typography
          sx={{
            fontWeight: 700,
            mb: "20px",
            fontSize: "17px",
            color: "#898989",
          }}
        >
          CHILD LIVING HOUSEHOLD
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            mb: "30px",
            fontSize: "16px",
            color: "#898989",
          }}
        >
          Fill this form with relevent information.
        </Typography>
      </Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {FRF1FormData.map((form, i) => (
            <Grid item key={i} md={form.gridLength} xs={12}>
              {form.otherOptions && (
                <form.component
                  disabled={disabled}
                  size="small"
                  {...form.otherOptions}
                >
                  {form.otherOptions.select
                    ? form.otherOptions.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              )}
            </Grid>
          ))}
<<<<<<< HEAD
          <Grid container item xs={12} spacing={4}>
            <Grid item xs={12} md={6}>
              <Grid item xs={12}>
                <Typography sx={(theme) => styles.title(theme, disabled)}>
                  Is there anything else you would like to tell us about
                  fostering, or would you like to draw a picture about
                  fostering? *
                </Typography>
                <RHFTextField
               
                  name={"familyFostering"}
                  multiline={true}
                  minRows={5}
                  fullWidth
                  sx={" mb: 4 "}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={(theme) => styles.title(theme, disabled)}
                  pt={2}
                >
                  Any additional comments from the person who helped the child
                  or young person to complete this form (where relevent) *
                </Typography>
                <Typography
                  sx={(theme) => styles.notice(theme, disabled)}
                  px={2}
                  py={1}
                >
                  Notice:
                </Typography>

                <Typography
                  sx={(theme) => styles.notice(theme, disabled)}
                  px={2}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  dicta enim nisi veritatis blanditiis incidunt quis? Doloribus,
                  in repudiandae ratione hic rem explicabo, ea at deleniti illum
                  suscipit labore. Ad!
                </Typography>
                <RHFTextField
                  fullWidth
                  name={"familyFostering"}
                  multiline={true}
                  minRows={5}
                  sx={" mb: 4 "}
                />
                <Typography
                  sx={(theme) => styles.notice(theme, disabled)}
                  my={2}
                >
                  Acknowleded By *
                </Typography>
                <RHFTextField
                  fullWidth
                  name={"familyFostering"}
                  sx={" mb: 4 "}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography sx={(theme) => styles.title(theme, disabled)} pb={2}>
                Child Drawing
              </Typography>
              <Image src={childImg} alt="img" width={700} />
            </Grid>
          </Grid>
=======
>>>>>>> morning-bugs

          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              {!disabled && (
                <LoadingButton type="submit" variant="contained">
                  Submit
                </LoadingButton>
              )}
              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": { backgroundColor: "#F6830F" },
                }}
                type="button"
                variant="contained"
                onClick={handleBack}
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default ChildLivingHouseholdForm;
<<<<<<< HEAD

const styles = {
  title: (theme: any, disabled: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: theme.palette.primary.main,
  }),
  notice: (theme: any, disabled: any) => ({
    fontSize: "16px",
    fontWeight: 500,
    color: theme.palette.primary.main
  }),
};
=======
>>>>>>> morning-bugs
