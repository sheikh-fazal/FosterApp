// import React from 'react'

// function AbsenceInfoForm() {
//   return (
//     <div>AbsenceInfoForm</div>
//   )
// }

// export default AbsenceInfoForm
import {
    Box,
    Grid,
    Typography,
    FormControlLabel,
    RadioGroup,
    Radio,
  } from "@mui/material";
  import React from "react";
  import { FormProvider } from "@root/components/hook-form";
  import { absenceInfoFormData } from "./index";
  import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
  import { useAbsenceInfoForm } from "./useAbsenceInfoForm";
  import { LoadingButton } from "@mui/lab";
  import IsFetching from "@root/components/loaders/IsFetching";
  function AbsenceInfoForm(props: any) {
    const { action, id } = props;
    //Allegation Custom Hook
    const {
      router,
      onSubmit,
      isLoading,
      theme,
      setValue,
      trigger,
      handleSubmit,
      getValues,
      methods,
      isFetching,
      isSubmitting,
    } = useAbsenceInfoForm(action, id);
  
    if (isLoading) return <SkeletonFormdata />;
    return (
      <>
        {/* <Typography
          sx={{
            color: theme.palette.grey[500],
            fontWeight: theme.typography.fontWeightMedium,
            mb: theme.spacing(2),
          }}
          variant="subtitle2"
        >
          URN Number : CH001
        </Typography> */}
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <IsFetching isFetching={isFetching} />
          <Grid container rowSpacing={2} columnSpacing={5} alignItems="center">
            {absenceInfoFormData.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form.id}>
                  <Box sx={{ px: 0.9, py: 1 }}>
                    {form.component !== "RadioGroup" && (
                      <form.component
                        size="small"
                        {...form.otherOptions}
                        disabled={action === "view" ? true : false}
                        InputLabelProps={{
                          shrink: action === "view" ? true : undefined,
                          disabled: action === "view" ? true : undefined,
                        }}
                      >
                        {form.otherOptions.select
                          ? form.options.map((option: any) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))
                          : null}
                      </form.component>
                    )}
                    {form.component === "RadioGroup" && (
                      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <Typography
                          sx={{
                            color: theme.palette.grey[500],
                            fontWeight: theme.typography.fontWeightMedium,
                          }}
                          variant="body1"
                          color="initial"
                        >
                          {form.otherOptions.label}
                        </Typography>
                        <RadioGroup
                          name={form.otherOptions.name}
                          defaultValue={getValues(`${form.otherOptions.name}`)}
                          onChange={(e) => {
                            setValue(
                              `${form.otherOptions.name}`,
                              `${e.target.value === "yes" ? true : false}`
                            );
                            trigger(`${form.otherOptions.name}`);
                          }}
                          //  value={getValues(`${form.otherOptions.name}`)}
                          sx={{ display: "flex", flexDirection: "row" }}
                        >
                          {form?.Options?.map((mode: any, index: any) => {
                            return (
                              <Grid key={mode} item>
                                <FormControlLabel
                                  label={mode === true ? "yes" : "No"}
                                  control={<Radio />}
                                  value={mode}
                                  disabled={action === "view" ? true : false}
                                />
                              </Grid>
                            );
                          })}
                        </RadioGroup>
                      </Box>
                    )}
                  </Box>
                </Grid>
              );
            })}
            {action === "add" || action === "edit" ? (
              <Grid
                xs={12}
                sx={{
                  mt: 2,
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                }}
                item
              >
                <LoadingButton
                  type="submit"
                  loading={isSubmitting}
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    "&:hover": { bgcolor: theme.palette.primary.main },
                  }}
                  variant="contained"
                >
                  Submit
                </LoadingButton>
                <LoadingButton
                  sx={{
                    bgcolor: theme.palette.grey[800],
                    "&:hover": { bgcolor: theme.palette.grey[800] },
                  }}
                  variant="contained"
                  onClick={() =>
                    router.push(
                      "/carer-info/personal-info/carer-chronology-of-events"
                    )
                  }
                >
                  Save as draft
                </LoadingButton>
                <LoadingButton
                  sx={{
                    bgcolor: theme.palette.orange.main,
                    "&:hover": { bgcolor: theme.palette.orange.main },
                  }}
                  variant="contained"
                  onClick={() =>
                    router.push(
                      "/carer-info/personal-info/carer-chronology-of-events"
                    )
                  }
                >
                  Back
                </LoadingButton>
              </Grid>
            ) : null}
          </Grid>
        </FormProvider>
  
        {action === "view" && (
          <Grid container>
            <Grid xs={12} sx={{ mt: 2 }} item>
              <LoadingButton
                sx={{
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
                onClick={() =>
                  router.push(
                    "/carer-info/personal-info/carer-chronology-of-events"
                  )
                }
              >
                Back
              </LoadingButton>
            </Grid>
          </Grid>
        )}
      </>
    );
  }
  
  export default AbsenceInfoForm;
  