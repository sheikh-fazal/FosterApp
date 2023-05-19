import React from "react";
import { formData } from ".";
import { useContactInfoModal } from "./useContactInfoModal";
import { FormProvider } from "@root/components/hook-form";
import { Modal, Backdrop, Grid, Button, Box, Typography } from "@mui/material";

// ======================================================================================================

const ContactInfoModal = (props: any) => {
  const { open, setOpen } = props;
  const { methods, handleSubmit, onSubmit } = useContactInfoModal();

  return (
    <Box>
      <Modal
        open={open.isToggle}
        onClose={() => setOpen({ isToggle: false, data: {} })}
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
          <Box sx={Styles.mainTitle}>Contact Information</Box>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4} paddingY={2}>
              {formData.map((form: any, i: any) => {
                return (
                  <Grid item xs={12} md={form?.gridLength} key={i}>
                    <Typography>{form?.title}</Typography>
                    <form.component disabled={props.disabled} size="small" {...form.otherOptions}>
                      {form.otherOptions.select
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
                  <Button
                    sx={{
                      marginRight: "1rem",
                      backgroundColor: "#F6830F",
                      "&:hover": {
                        backgroundColor: "#F6830F",
                      },
                    }}
                    type="button"
                    variant="contained"
                    onClick={() => setOpen({ isToggle: false, data: {} })}
                  >
                    Cancel
                  </Button>

                  <Button
                    sx={{
                      backgroundColor: "#0E918C",
                      "&:hover": {
                        backgroundColor: "#0E918C",
                      },
                    }}
                    type="submit"
                    variant="contained"
                  >
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </FormProvider>
        </Box>
      </Modal>
    </Box>
  );
};

export default ContactInfoModal;

//-----------------------------------------------------------------------
// styles
const Styles = {
  root: (theme: any) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "65%",
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  mainTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
};