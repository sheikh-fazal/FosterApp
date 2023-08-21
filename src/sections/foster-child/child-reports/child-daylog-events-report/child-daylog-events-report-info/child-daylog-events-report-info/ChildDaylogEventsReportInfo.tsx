import { Box, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useChildDaylogEventsReportInfo } from "./useChildDaylogEventsReportInfo";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const ChildDaylogEventsReportInfo = () => {
  const {
    allegationInfoFormData,
    methods,
    handleSubmit,
    submitAllegationInfoForm,
    isLoading,
    router,
    postChildDaylogEventsReportInfoDataStatus,
    patchChildDaylogEventsReportInfoDataStatus,
    theme,
    saveAsDraft,
  }: any = useChildDaylogEventsReportInfo();

  if (isLoading) return <SkeletonFormdata />;
  return (
    <>
      <Typography
        component={"p"}
        sx={{ fontWeight: "500", fontSize: "14px", mb: "20px" }}
      >
        URN Number: CH001
      </Typography>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(submitAllegationInfoForm)}
      >
        <Grid container spacing={5}>
          {allegationInfoFormData.map((form: any, index: number) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={form.id + index}>
                <form.component {...form.componentProps} size="small">
                  {form.componentProps.select
                    ? form.componentProps.options.map((option: any) => (
                        <option key={option.id} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : form?.heading
                    ? form?.heading
                    : null}
                </form.component>
              </Grid>
            );
          })}
        </Grid>
        {router.query?.action !== "view" && (
          <Box sx={{ display: "flex", mb: "1.5rem", mt: "1.5rem" }}>
            <LoadingButton
              sx={{ marginRight: "1rem" }}
              type="submit"
              variant="contained"
              disabled={
                patchChildDaylogEventsReportInfoDataStatus?.isLoading ||
                postChildDaylogEventsReportInfoDataStatus?.isLoading
              }
            >
              Submit
            </LoadingButton>
            <LoadingButton
              sx={{ marginRight: "1rem" }}
              disabled={
                patchChildDaylogEventsReportInfoDataStatus?.isLoading ||
                postChildDaylogEventsReportInfoDataStatus?.isLoading
              }
              onClick={() => saveAsDraft?.("Pending")}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
            >
              Save as Draft
            </LoadingButton>
            <LoadingButton
              type="button"
              sx={{
                marginRight: "1rem",
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.dark },
              }}
              onClick={() =>
                router.push({
                  pathname: `/foster-child/events-and-notification/allegation`,
                  query: {
                    ...(!!router?.query?.fosterChildId && {
                      fosterChildId: router?.query?.fosterChildId,
                    }),
                  },
                })
              }
              variant="contained"
              disabled={
                patchChildDaylogEventsReportInfoDataStatus?.isLoading ||
                postChildDaylogEventsReportInfoDataStatus?.isLoading
              }
            >
              back
            </LoadingButton>
          </Box>
        )}
      </FormProvider>
    </>
  );
};

export default ChildDaylogEventsReportInfo;
