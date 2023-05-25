import { useForm } from "react-hook-form";
import { Box, Button, Grid, Modal, Typography, useTheme } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddFormSchema, AddFormValues, addExperienceForm } from ".";
import FormField from "../../personal-info/initial-home-visit/form-generator/FormField";
import { enqueueSnackbar } from "notistack";
import { useExperienceMutation } from "@root/services/carer-info/employment-history/employnmentDetailsApi";
import dayjs from "dayjs";

function AddExperiencesModal({ open, setOpen }: any) {

  const [addExperiences, { isLoading }] = useExperienceMutation();

  const methods: any = useForm({
    resolver: yupResolver(AddFormSchema),
    defaultValues: AddFormValues,
  });
  const FORMDATA: any = new FormData();
  const theme: any = useTheme();
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = async (data: any) => {
    FORMDATA.append("title", data.title);
    FORMDATA.append("employmentType", data.employmentType);
    FORMDATA.append("companyName", data.companyName);
    FORMDATA.append("location", data.location);
    FORMDATA.append("currentlyWorking", data.currentlyWorking);
    FORMDATA.append("startDate",dayjs(data.startDate).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]").toString());
    FORMDATA.append("endDate", dayjs(data.endDate).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]").toString());
    FORMDATA.append("headline", data.headline);
    FORMDATA.append("industry", data.industry);
    FORMDATA.append("description", data.description);
    FORMDATA.append("media", data.media);

    for (let [key, value] of FORMDATA.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const res: any = await addExperiences(FORMDATA).unwrap();
      if (res) {
        console.log(res);
        
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <Box sx={styles.root}>
        <Typography sx={styles.title(theme)}>Add Experience</Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} mb={5}>
            {addExperienceForm.map((data: any, index: number) => {
              const {
                type,
                name,
                label,
                title,
                options,
                gridSize = { xs: 12, md: 6 },
                getOptionLabel,
                ...other
              } = data;
              return (
                <Grid key={index} item {...gridSize}>
                  <FormField
                    fieldType={type}
                    name={name}
                    label={label}
                    fullWidth={true}
                    options={options}
                    size="small"
                    getOptionLabel={getOptionLabel}
                    {...other}
                    {...methods}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Box sx={styles.actionBtnBox}>
            <Button type="submit" sx={styles.btnSuccess}>
              Submit
            </Button>
            <Button sx={styles.btnError} onClick={() => setOpen(false)}>
              Back
            </Button>
          </Box>
        </FormProvider>
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
    width: "min(95vw, 50rem)",
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
  btnError: (theme: any) => ({
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
