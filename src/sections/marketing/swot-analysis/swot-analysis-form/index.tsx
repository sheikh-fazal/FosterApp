import dayjs from "dayjs";
import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

const todayDate = dayjs().format("MM/DD/YYYY");
export const SwotAnalysisFormDefaultValues = {
  reportDate: "",
  topic: "",
  duration: "",
  competitor: null,
  date: "",
  reviewerRole: "",
  reviewerDate: "",
  strengths: "",
  weaknesses: "",
  opportunities: "",
  threats: "",
};
export const formSchema = Yup.object().shape({
  reportDate: Yup.string().required("Field is required"),
  topic: Yup.string().required("Field is required"),
  duration: Yup.string().required("Field is required"),
  competitor: Yup.string().required("Field is required"),
  date: Yup.string().required("Field is required"),
  reviewerRole: Yup.string().required("Field is required"),
  strengths: Yup.string().required("Field is required"),
  weaknesses: Yup.string().required("Field is required"),
  opportunities: Yup.string().required("Field is required"),
  threats: Yup.string().required("Field is required"),
});

export const SwotAnalysisFormData = [
  {
    gridLength: 12,
    heading: "SWOT Analysis Info",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 4 },
    },
    component: Typography,
  },
  {
    gridLength: 6,
    title: "SWOT Report Date",
    componentProps: {
      name: "reportDate",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    title: "SWOT Topic",
    componentProps: {
      name: "topic",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    title: "SWOT Duration",
    componentProps: {
      name: "duration",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    title: "SWOT (Competitor)",
    componentProps: {},
    uploadPhoto: true,
  },
  {
    gridLength: 6,
    title: "Date",
    componentProps: {
      name: "date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    title: "Reviewer Role",
    componentProps: {
      name: "reviewerRole",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "fosterCarer", label: "Foster Carer" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    title: "Review Date",
    componentProps: {
      name: "reviewerDate",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    title: "Strengths",
    componentProps: {
      name: "strengths",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Weaknesses",
    componentProps: {
      name: "weaknesses",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Opportunities",
    componentProps: {
      name: "opportunities",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    title: "Threats",
    componentProps: {
      name: "threats",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];
