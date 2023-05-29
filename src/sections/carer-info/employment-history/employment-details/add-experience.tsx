import { useFieldArray, useForm } from "react-hook-form";
import { Box, Button, Grid, Modal, Typography, useTheme } from "@mui/material";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddFormSchema, AddFormValues, addExperienceForm } from ".";
import AddIcon from "@mui/icons-material/Add";
import FormField from "../../personal-info/initial-home-visit/form-generator/FormField";
import { enqueueSnackbar } from "notistack";
import { useExperienceMutation } from "@root/services/carer-info/employment-history/employnmentDetailsApi";
import dayjs from "dayjs";
import { useState } from "react";

function AddExperiencesModal({ open, setOpen }: any) {
  const theme: any = useTheme();
  // const { register, control, handleSubmit } = useForm();

  const methods: any = useForm();

  const { control, register, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <Box>
        <Box sx={styles.root}>
          <Typography sx={styles.title(theme)}>Add Experience</Typography>
          
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
            <RHFTextField name="companyname" label="Company Name"  size="small"/>
            </Grid>
            <Grid item xs={6}>
            <RHFTextField name="location" label="Location"  size="small"/>
            </Grid>
            {fields.map((field, index) => (
              <div key={field.id}>
                <RHFTextField name={`experiences.${index}.title`}  size="small" />
                {/* <input
            {...register(`experiences.${index}.company`)}
            placeholder="Company"
          /> */}
                {/* Add more fields here */}
              </div>
            ))}
            <Box>
              <Button
                variant="text"
                startIcon={<AddIcon />}
                onClick={() => append({})}
              >
                Add
              </Button>
            </Box>
            <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "end" }}>
              <Button sx={styles.btnBack}>Cancel</Button>
              <Button sx={styles.btnSuccess}>Submit</Button>
            </Box>
            </Grid>
          </Grid>
          </FormProvider>
        </Box>
      </Box>
    </Modal>
  );
}

export default AddExperiencesModal;

const styles = {
  root: (theme: any) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(95vw, 60rem)",
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  title: (theme: any) => ({
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginBottom: "1rem",
  }),
  actionBtnBox: (theme: any) => ({
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    mt: 2,
  }),
  btnBack: (theme: any) => ({
    bgcolor: theme.palette.orange.main,
    color: theme.palette.primary.contrastText,
  }),
  btnSuccess: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minWidth: "100px",
    "&:hover": { bgcolor: theme.palette.primary.main },
    "&:disabled": {
      backgroundColor: theme.palette.grey[400],
    },
  }),
};
