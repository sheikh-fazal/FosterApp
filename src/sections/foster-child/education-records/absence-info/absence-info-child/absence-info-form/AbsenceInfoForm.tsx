import {
  Box,
  Grid,
} from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
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
    theme,
    handleSubmit,
    methods,
    absenceInfoFormData,
  } = useAbsenceInfoForm(action, id);

  // if (isLoading) return <SkeletonFormdata />;
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2} columnSpacing={5} alignItems="center">
          {absenceInfoFormData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                <Box sx={{ px: 0.9, py: 1 }}>
                  <form.component
                    size="small"
                    {...form.otherOptions}
                    disabled={action === "view" ? true : false}
                    InputLabelProps={{
                      shrink: action === "view" ? true : undefined,
                      disabled: action === "view" ? true : undefined,
                    }}
                  ></form.component>
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
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
                onClick={() =>
                  router.push("/foster-child/education-records/absence-info")
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
                router.push("/foster-child/education-records/absence-info")
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
