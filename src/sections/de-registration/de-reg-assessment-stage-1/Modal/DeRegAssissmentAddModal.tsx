import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { RegAssessmentModalData } from ".";
import useDeRegAssissmentAddModal from "./useDeRegAssissmentAddModal";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

interface IProps {
  open: boolean;
  handleClose: () => void;
  disabled?: boolean;
  onSubmit?:Function;
  isHideSubmitButton?:boolean,
  title:string,
  initialValues?: any;

}

const DeRegAssissmentAddModal = (props: IProps) => {
  const { open, handleClose, disabled, onSubmit,title,isHideSubmitButton,initialValues} = props;
  const { methods, handleSubmit } = useDeRegAssissmentAddModal();
  const ModalContent = styled(DialogContent)`
    @media (max-width: 852px) {
      width: 100%;
      height: auto;
    }
  `;

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          handleClose(), methods.reset();
        }}
        fullWidth={true}
        maxWidth={"sm"}
      >
        <ModalContent>
          <Typography component={"p"} sx={styles.styleTitle}>
            {title}
          </Typography>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {RegAssessmentModalData.map((item: any, i: number) => (
                <Grid item xs={12} md={item?.md} key={item?.id} mt={1.5}>
                  {item.component && (
                    <item.component
                      {...item.componentProps}
                      disabled={disabled}
                      size={"small"}
                    >
                      {item.componentProps.select
                        ? item.options.map((option: any) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))
                        : null}
                      {item?.heading}
                    </item.component>
                  )}
                  {!item.component && (
                    <RHFUploadFile
                      name={"updatePhoto"}
                      {...methods}
                      required
                      disabled={disabled}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12} mt={3}>
              <Box sx={{ display: "flex", gap: "1rem" }}>
              {isHideSubmitButton === false &&
                <Button type="submit" variant="contained" sx={styles.uploadBtn} >
                  Upload
                </Button>
}
                <Button
                  sx={styles.clearBtn}
                  type="button"
                  variant="contained"
                  onClick={() => {
                    handleClose(), methods.reset();
                  }}
                >
                  Clear
                </Button>
              </Box>
            </Grid>
          </FormProvider>
        </ModalContent>
      </Dialog>
    </>
  );
};

export default DeRegAssissmentAddModal;

// style

const styles = {
  uploadBtn: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19.36px",
    borderRadius: "4px",
    width: "84px",
    height: "46.57px",
  },
  clearBtn: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19.36px",
    borderRadius: "4px",
    width: "84px",
    height: "46.57px",
    backgroundColor: "#F6830F",
    "&:hover": { backgroundColor: "#F6830F" },
  },
  styleTitle: {
    fontWeight: 600,
    fontSize: "16px",
    mb: "14px",
    letterSpacing: "0.005em",
    color: "#343A40",
  },
};
