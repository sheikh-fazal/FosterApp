// @mui
import { Grid, Box, Button, Typography } from "@mui/material";
// components
import { panelChairData } from "./index";
import { usePanelChairForm } from "./usePanelChairForm";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

// ===========================================================================================

const PanelAdministratorForm = (props: any) => {
  const { theme, router, handleSubmit, onSubmit, methods } = usePanelChairForm();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={styles.card}>
        <Grid container columnSpacing={4} rowSpacing={3}>
          {panelChairData.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                <Typography sx={{ fontWeight: 600, mb: 0.3, color: theme.palette.mode === "light" ? "#343A40" : theme.palette.mode }}>
                  {form.title}
                </Typography>
                {form.requireFileUpload && <RHFUploadFile name="uploadPhoto" {...methods} require />}
                {form.component ? (
                  <form.component disabled={props.disabled} size="small" {...form.otherOptions}>
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                ) : (
                  <Typography sx={{ fontSize: "16px", fontWeight: 700, color: theme.palette.primary.main }}>{form.head}</Typography>
                )}
              </Grid>
            );
          })}

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": {
                    backgroundColor: "#F6830F",
                  },
                }}
                onClick={() => {
                  router.push("/panel/panel-tools/administrator");
                }}
                type="button"
                variant="contained"
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};
export default PanelAdministratorForm;

//  ========================================================================
const styles = {
  card: {
    background: "#FFFFFF",
    boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
    px: 1,
    py: 2,
  },
};
