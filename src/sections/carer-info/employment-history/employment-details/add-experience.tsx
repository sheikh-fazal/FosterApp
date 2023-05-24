import { useForm } from "react-hook-form";
import { Box, Button, Grid, Modal,Typography,useTheme } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddFormSchema, AddFormValues } from ".";
import FormField from "../../personal-info/initial-home-visit/form-generator/FormField";



const addExperienceForm = [
    {
      type: "text",
      name: "title",
      label: "Title",
    },
    {
      type: "text",
      name: "employmentType",
      label: "Employment Type",
    },
    {
      type: "text",
      name: "companyName",
      label: "Company Name",
    },
    {
      type: "text",
      name: "Location",
      label: "Location",
    },
    {
      type: "date",
      name: "startDate",
      label: "Start Date",
    },
    {
      type: "date",
      name: "endDate",
      label: "End Date",
    },
    {
      type: "textarea",
      name: "headline",
      label: "Headline",
      gridSize: { xs: 12 },
    },
    {
      type: "textarea",
      name: "industry",
      label: "Industry",
      gridSize: { xs: 12 },
    },
    {
      type: "textarea",
      name: "description",
      label: "Description",
      gridSize: { xs: 12 },
    },
    {
      type: "upload",
      name: "media",
      label: "Media",
    },
  ];


function AddExperiencesModal({ open, setOpen }: any) {
  const methods: any = useForm({
    resolver: yupResolver(AddFormSchema),
    defaultValues: AddFormValues,
  });
  const theme: any = useTheme();
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  return (
    <Modal
      open={open}
      onClose={()=>setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <Box sx={styles.root}>
        <Typography sx={styles.title(theme)}>Add Experience</Typography>
        <FormProvider methods={methods}>
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
                // disabled={isSubmitting || disabled}
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
            <Button disabled={!isValid} sx={styles.btnSuccess}>
              Submit
            </Button>
            <Button sx={styles.btnError} onClick={()=>setOpen(false)}>Back</Button>
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
  title:(theme:any)=>({
    color: theme.palette.primary.main,
    fontWeight:600,
    marginBottom:"1rem"
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
