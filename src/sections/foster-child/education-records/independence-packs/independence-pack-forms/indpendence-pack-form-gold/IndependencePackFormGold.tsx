// @mui
import { Grid, Box, Button, Typography, Card } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
// components
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField,
} from "@root/components/hook-form";
//
import {
  formData1,
  ListOfSkills,
  ListOfSkillsWithEvidence,
  formData2,
} from ".";
import { useIndependencePackFormGold } from "./useIndependencePackFormGold";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SingleLevel from "../../Levels/SingleLevel";
import BronzeLevel from "@root/assets/svg/bronze-level";
import { RHFUploadFile } from "@root/sections/carer-info/personal-info/application-form/basic-information/RHFUploadFile";

export default function IndependencePackFormGold(props: any) {
  const { formType, level } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    router,
  } = useIndependencePackFormGold();

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
              <SingleLevel levelName={level} isBadge={true}>
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
          <Grid container spacing={2} item sm={6}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: theme.palette.primary.main }}
              >
                List of Skills
              </Typography>
            </Grid>
            {ListOfSkills.map((form: any, i: any) => {
              return (
                <Grid item xl={12} xs={12} key={i}>
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
          </Grid>
          <Grid container spacing={2} item sm={6}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: theme.palette.primary.main }}
              >
                List of Skills With My Evidence
              </Typography>
            </Grid>
            {ListOfSkillsWithEvidence.map((form: any, i: any) => {
              return (
                <Grid item xl={12} xs={12} key={i}>
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
          </Grid>
          {formData2.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                <form.component
                  {...form.otherOptions}
                  disabled={props.disabled}
                  size="small"
                >
                  {form.otherOptions?.select
                    ? form.options.map((option: any, index: any) => (
                        <option key={index} value={option.value}>
                          {" "}
                          {option.label}{" "}
                        </option>
                      ))
                    : null}
                </form.component>
              </Grid>
            );
          })}
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
                  router.back();
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
