import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Grid, Typography, Button, Box, useTheme } from "@mui/material";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

export const formFields = [
  {
    id: 1,
    title: "Meeting Date",
    gridLength: 6,
    otherOptions: {
      name: "meetingDate",

      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    title: "Time",
    gridLength: 6,
    otherOptions: {
      name: "meetingTime",

      fullWidth: true,
    },
    component: RHFTimePicker,
  },

  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "meetingAgenda",
      label: "Meeting Agenda:",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "meetingAttendees",
      label: "Meeting Attendees:",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "meetingOutcomes",
      label: "Meeting outcomes:",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "meetingAction",
      label: "Meeting Action:",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    title: "Next Assessment Date",
    gridLength: 6,
    otherOptions: {
      name: "meetingDate",

      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 8,
    title: "Next Assessment Time",
    gridLength: 6,
    otherOptions: {
      name: "meetingTime",

      fullWidth: true,
    },
    component: RHFTimePicker,
  },
  {
    id: 9,
    gridLength: 12,
    componentProps: {
      name: "image",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
];

const RegularAssessmentMeetingForm = (props: any) => {
  const { open, setOpen } = props;
  const theme: any = useTheme();
  const todayDate = dayjs().format("MM/DD/YYYY");
  const handleClose = () => setOpen(false);

  const defaultValues = {
    meetingDate: new Date(todayDate),
    meetingTime: "",
    meetingAgenda: "Nil",
    meetingAttendees: "Nil",
    meetingOutcomes: "Nil",
    meetingAction: "Nil",
    nextAssessmentDate: new Date(todayDate),
    nextAssessmentTime: "",
  };
  const FormSchema = Yup.object().shape({
    meetingDate: Yup.date().required("required"),
    meetingTime: Yup.string().required("Time is required"),
    // .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:mm)"),

    meetingAgenda: Yup.string().required("required"),
    meetingAttendees: Yup.string().required("required"),
    meetingOutcomes: Yup.string().required("required"),
    meetingAction: Yup.string().required("required"),
    nextAssessmentDate: Yup.date().required("required"),
    nextAssessmentTime: Yup.string().required("Time is required"),
  });
  const methods: any = useForm({
    mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;
  const onSubmitHandler = (data: any) => {
    console.log("🚀 ~ file: RegularAssessmentMeetingForm.tsx:70 ~ onSubmitHandler ~ data:", data);

    reset();
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={Styles.root}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
          <Grid container rowSpacing={2} columnSpacing={3} alignItems="center">
            {formFields?.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                  <>
                    {" "}
                    {form.component ? (
                      <Grid>
                        <Typography color={theme.palette.primary.main} variant="body2">
                          {form.heading}
                        </Typography>
                        <form.component
                          // disabled={disabled}
                          size="small"
                          {...form.otherOptions}
                        >
                          {form.otherOptions
                            ? form.options?.map((option: any) => (
                                <option key={option.value} value={option.value}>
                                  {" "}
                                  {option.label}{" "}
                                </option>
                              ))
                            : null}
                        </form.component>
                      </Grid>
                    ) : (
                      <Typography variant={form.variant} color={theme.palette.primary.main}>
                        {" "}
                        {form.heading}{" "}
                      </Typography>
                    )}{" "}
                  </>
                </Grid>
              );
            })}
          </Grid>
          <Box sx={Styles.buttonWrapper}>
            <Button onClick={onSubmitHandler} sx={Styles.buttonSuccess(theme)}>
              Upload
            </Button>
            <Button onClick={handleClose} sx={Styles.buttonError(theme)}>
              Clear
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Modal>
  );
};

export default RegularAssessmentMeetingForm;

const Styles = {
  root: (theme: any) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: 600 },
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    p: 2,
  }),
  innerBox: (theme: any) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  crossIcons: (theme: any) => ({
    fontSize: "100px",
    color: theme.palette.error.main,
  }),
  buttonWrapper: (theme: any) => ({
    display: "flex",

    gap: "10px",
    mt: 2,
  }),
  buttonError: (theme: any) => ({
    bgcolor: theme.palette.orange.main,
    color: theme.palette.primary.contrastText,
    "&:hover": { bgcolor: theme.palette.orange.main },
    px: 2,
    py: 1,
  }),
  buttonSuccess: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minWidth: "100px",
    "&:hover": { bgcolor: theme.palette.primary.main },
  }),
};
