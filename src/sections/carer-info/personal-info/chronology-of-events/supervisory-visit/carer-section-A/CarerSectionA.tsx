import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { carerSectionAlphaData } from ".";
import { useCarerSectionA } from "./useCarerSectionA";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import IsFetching from "@root/components/loaders/IsFetching";

export default function CarerSectionA(props: any) {
  const { action, id } = props;
  const {
    router,
    onSubmit,
    isLoading,
    theme,
    handleSubmit,
    methods,
    isFetching,
    isSubmitting,
    fosterCarerId,
  } = useCarerSectionA(action, id);
  if (isLoading) return <SkeletonFormdata />;
  return (
    <>
      <Typography
        variant="subtitle2"
        sx={{ mb: 4, color: theme.palette.grey[600] }}
      >
        Supervising Social Worker: Not Assigned
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <IsFetching isFetching={isFetching} />
        <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
          {carerSectionAlphaData.map((form: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id}>
                {form.id !== 7.5 && (
                  <form.component
                    size="small"
                    {...form.otherOptions}
                    disabled={action === "view" ? true : false}
                    InputLabelProps={{
                      shrink: action === "view" || "edit" ? true : undefined,
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
              <Button
                sx={{
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
                onClick={() =>
                  router.push({
                    pathname:
                      "/carer-info/personal-info/carer-chronology-of-events",
                    query: { fosterCarerId: fosterCarerId },
                  })
                }
              >
                Back
              </Button>
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
                router.push({
                  pathname:
                    "/carer-info/personal-info/carer-chronology-of-events",
                  query: { fosterCarerId: fosterCarerId },
                })
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
