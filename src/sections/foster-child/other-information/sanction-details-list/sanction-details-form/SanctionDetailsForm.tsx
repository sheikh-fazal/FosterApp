import { Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormProvider } from "@root/components/hook-form";
import { useSanctionDetailsForm } from "./useSanctionDetailsForm";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const SanctionDetailsForm = () => {
  const {
    methods,
    isSubmitting,
    theme,
    handleSubmit,
    onSubmitHandler,
    sanctionDetailsFormData,
    isLoading,
    router,
    postSanctionDetailsDataStatus,
    patchSanctionDetailsDataStatus,
  } = useSanctionDetailsForm();

  if (isLoading) return <SkeletonFormdata />;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container columnSpacing={2}>
        {sanctionDetailsFormData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <Typography
                sx={{
                  mt: 2,
                  fontWeight: form?.component == Typography ? "bold" : 300,
                  color:
                    theme.palette.mode === "light"
                      ? "#343A40"
                      : theme.palette.mode,
                }}
              >
                {form.title}:
                {form.titleValue && (
                  <Typography
                    sx={{
                      ml: 1,
                      display: "inline-block",
                      color:
                        theme.palette.mode === "light"
                          ? "#343A40"
                          : theme.palette.mode,
                    }}
                  >
                    {form.titleValue}
                  </Typography>
                )}
              </Typography>
              <form.component size="small" {...form.otherOptions} fullWidth>
                {form?.otherOptions?.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : form?.heading}
              </form.component>
            </Grid>
          );
        })}

        <Grid item xs={12} mt={3}>
          {router.query?.action !== "view" && (
            <Grid item xs={12}>
              <LoadingButton
                type="submit"
                variant="contained"
                sx={{ mr: 2 }}
                loading={
                  postSanctionDetailsDataStatus.isLoading ||
                  patchSanctionDetailsDataStatus.isLoading
                }
              >
                Submit
              </LoadingButton>
              <LoadingButton
                type="button"
                variant="contained"
                sx={{
                  marginRight: "1rem",
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.dark },
                }}
                onClick={() =>
                  router.push({
                    pathname: `/foster-child/other-information/sanction-details-list`,
                    query: {
                      ...(!!router?.query?.fosterChildId && {
                        fosterChildId: router?.query?.fosterChildId,
                      }),
                    },
                  })
                }
              >
                Back
              </LoadingButton>
            </Grid>
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default SanctionDetailsForm;
