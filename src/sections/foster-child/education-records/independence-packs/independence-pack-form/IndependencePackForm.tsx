// @mui
import { Grid, Box, Button, Typography, Card } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
// components
import { FormProvider, RHFTextField } from "@root/components/hook-form";
//
import { formData1 } from "..";
import { useIndependencePackForm } from "./useIndependencePackForm";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SingleLevel from "../Levels/SingleLevel";
import BronzeLevel from "@root/assets/svg/bronze-level";

export default function IndependencePackForm(props: any) {
  const { formType } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    router,
  } = useIndependencePackForm();

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <RHFTextField
              disabled={props.disabled}
              size="small"
              name="Name"
              label="Name"
            />
            <Box sx={{ mt: 4 }}>
              <RHFDatePicker
                disabled={props.disabled}
                size="small"
                name="fromDate"
                label="From Date"
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <SingleLevel
                levelName="Bronze"
                bgColor={"#A46628"}
                isBadge={true}
              >
                <BronzeLevel width="40" height="66" color={"#FFFFFF"} />
              </SingleLevel>
            </Box>
          </Grid>
          {formData1.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                <form.component
                  disabled={props.disabled}
                  size="small"
                  {...form.otherOptions}
                >
                  {form.otherOptions.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {" "}
                          {option.label}{" "}
                        </option>
                      ))
                    : null}
                </form.component>
              </Grid>
            );
          })}
          <Grid container item spacing={4} sm={6}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: theme.palette.primary.main }}
              >
                List of Skills
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <RHFTextField
                disabled={props.disabled}
                size="small"
                name="Name"
                label="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField
                disabled={props.disabled}
                size="small"
                name="Name"
                label="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField
                disabled={props.disabled}
                size="small"
                name="Name"
                label="Name"
              />
            </Grid>
          </Grid>
          <Grid container item spacing={4} sm={6}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: theme.palette.primary.main }}
              >
                List of Skills
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <RHFTextField
                disabled={props.disabled}
                size="small"
                name="Name"
                label="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField
                disabled={props.disabled}
                size="small"
                name="Name"
                label="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField
                disabled={props.disabled}
                size="small"
                name="Name"
                label="Name"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              {formType == "view" ? (
                ""
              ) : (
                <LoadingButton
                  sx={{ marginRight: "1rem" }}
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  disabled={!isDirty}
                >
                  Submit
                </LoadingButton>
              )}

              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": {
                    backgroundColor: "#F6830F",
                  },
                }}
                onClick={() => {
                  router.push(
                    "/carer-info/personal-info/carer-address-history"
                  );
                }}
                type="button"
                variant="contained"
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
}
