import { UPLOADDOCUMENTSFORMDATA } from ".";
import { FormProvider } from "@root/components/hook-form";
import { Button, Dialog, DialogContent, Grid, Typography } from "@mui/material";
import useSocialWorkerFormDialogbox from "./useUploadDocumentsFormDialogbox";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const UploadDocumentsFormDialogbox = (props: any) => {
  const {
    handleCloseForm,
    openFormDialog,
    component,
    disabled,
    setOpenFormDialog,
  } = props;

  const { methods, handleSubmit, onSubmit } = useSocialWorkerFormDialogbox();

  return (
    <>
      <Dialog
        open={openFormDialog}
        onClose={handleCloseForm}
        aria-labelledby="responsive-dialog-title"
      >
        <Grid
          container
          justifyContent={"start"}
          alignItems={"center"}
          p={1}
          px={3}
          sx={{
            background: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
            color: "white",
            fontSize: 20,
          }}
        >
          Person Uploaded: Name Xame
        </Grid>

        <DialogContent>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {UPLOADDOCUMENTSFORMDATA?.map((form: any) => {
                return (
                  <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                    <>
                      <Grid>
                        {/* <Typography
                          color={theme.palette.primary.main}
                          variant="body2"
                        >
                          {form.heading}
                        </Typography> */}

                        <form.component
                          disabled={disabled}
                          size="small"
                          {...form.otherOptions}
                        >
                          {form.otherOptions
                            ? form.options?.map((option: any) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))
                            : null}
                        </form.component>
                      </Grid>
                    </>
                  </Grid>
                );
              })}

              <Grid item xs={12} md={12} p={2}>
                <Typography variant="h6">Front Sheet</Typography>
                <RHFUploadFile name="chooseFile" {...methods} />
              </Grid>

              <Grid item xs={12}>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
                  }}
                >
                  Upload
                </Button>
                <Button
                  onClick={() => {
                    setOpenFormDialog(false);
                  }}
                  type="button"
                  sx={{
                    color: "#fff",
                    ml: 1,
                  }}
                  size="large"
                  variant="contained"
                >
                  Back
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadDocumentsFormDialogbox;
