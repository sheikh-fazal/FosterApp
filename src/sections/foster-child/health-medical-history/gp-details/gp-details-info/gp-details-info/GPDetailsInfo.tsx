import { Box, Grid } from "@mui/material";

import { FormProvider } from "@root/components/hook-form";
import { useGPDetailsInfo } from "./useGPDetailsInfo";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const GPDetailsInfo = () => {
  const { gpDetailsInfoFormData, methods, handleSubmit, submitGpDetailsInfoForm, getSingleGpDetailsInfoDataStatus, query, router } =
    useGPDetailsInfo();
    if (getSingleGpDetailsInfoDataStatus?.isLoading) return <SkeletonFormdata />;
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(submitGpDetailsInfoForm)}>
      <Grid container spacing={5}>
        {gpDetailsInfoFormData.map((form: any, index: number) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id + index}>
              <form.component
                {...form.componentProps}
                size="small"
              >
                {form.componentProps.select
                  ? form.componentProps.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
       
      </Grid>
     { query?.action !== "view"  &&
     <Box sx={{ display: "flex", mb: "1rem", mt:'1rem' }}>
          <LoadingButton
            sx={{ marginRight: "1rem" }}
            type="submit"
            variant="contained" >
            Submit
          </LoadingButton>
          <LoadingButton
            type="button"
            sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
            onClick={()=> router.push(
              `/foster-child/health-medical-history/gp-details/`
            )}
            variant="contained">
            back
          </LoadingButton>
        </Box>
}
    </FormProvider>
  );
};

export default GPDetailsInfo;
