import { Box, Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import { formData } from "./BackupCarerPlacementData";
import FormProvider from "@root/components/hook-form/FormProvider";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { useBackupCarerPlacementForm } from "./useBackupCarerPlacementForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import IsFetching from "@root/components/loaders/IsFetching";

const BackupCarerPlacementForm = () => {
  const {
    router,
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting,
    isLoading,
    action,
    fosterChildId,
  } = useBackupCarerPlacementForm();

  const theme: any = useTheme();
  if (isLoading) return <SkeletonFormdata />;
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <IsFetching isFetching={false} />
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                disabled={action == "view" ? true : false}
                size="small"
                {...form.otherOptions}
              >
                {form?.otherOptions?.select
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
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            {action == "view" ? (
              ""
            ) : (
              <LoadingButton
                sx={{ marginRight: "1rem" }}
                type="submit"
                variant="contained"
                loading={isSubmitting}
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
  );
};

export default BackupCarerPlacementForm;
