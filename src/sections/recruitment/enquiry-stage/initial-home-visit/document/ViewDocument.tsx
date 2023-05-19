import { Box, Grid, Modal, useTheme } from "@mui/material";
import { viewDocumentForm } from ".";
import { styled } from "@mui/material/styles";
import FormGenerator from "@root/sections/carer-info/personal-info/initial-home-visit/form-generator/FormGenerator";

export const ViewDocument = (props: any) => {
  const { isModalOpen, defaultValues, setIsModalOpen } = props;
  const theme = useTheme();

  const ModalPaper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  }));
  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          container
          minHeight={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={4}>
            <ModalPaper>
              <Grid container>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                  <FormGenerator
                    // FormSchema={BackgroudnFormSchema}
                    // defaultValues={BackgroudFormValues}
                    fieldsInfo={viewDocumentForm}
                    // submitClickHand={submitBackgroundForm}
                  />
                </Grid>
                <Grid item md={1}></Grid>
              </Grid>
            </ModalPaper>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Modal>
    </>
  );
};
