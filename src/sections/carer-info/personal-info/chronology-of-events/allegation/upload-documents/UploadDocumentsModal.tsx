import { Box, Grid, Button, Modal, Backdrop, Typography } from "@mui/material";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import { UploadDocFormData, defaultValues, formSchema } from "./index";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import CloseIcon from "@mui/icons-material/Close";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";

function UploadDocumentsModel(props: any) {
  const { open, setOpen, action } = props;
  const { postAllegationDetails, router, theme, onSubmit } =
    useUploadDocumentsTable();
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });
  const { handleSubmit } = methods;

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={Styles.root}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="subtitle1">
              Person Uploaded: Name Xname
            </Typography>
            <CloseIcon
              onClick={() => setOpen(false)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container rowSpacing={4} columnSpacing={2}>
              {UploadDocFormData.map((form: any) => (
                <Grid item xs={12} md={form?.gridLength} key={form.id}>
                  <form.component
                    {...form.componentProps}
                    size="small"
                    disabled={action === "view" ? true : false}
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
              ))}
              <Grid xs={12} item>
                <RHFUploadFile name="file" {...methods} />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              <Button
                type="submit"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
              >
                Upload
              </Button>
              <Button
                sx={{
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
                onClick={() => setOpen(false)}
              >
                Clear
              </Button>
            </Box>
          </FormProvider>
        </Box>
      </Modal>
    </>
  );
}

export default UploadDocumentsModel;

// styles
const Styles = {
  root: (theme: any) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: "35%" },
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
};
