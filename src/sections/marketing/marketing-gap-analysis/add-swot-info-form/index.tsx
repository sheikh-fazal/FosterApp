import * as Yup from "yup";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const initialValues = {
  competitor: "",
  location: "",
  swotTopic: "",
  swotDuration: null,
  swotCompetitor: null,
  researcherRole: "",
  date: null,
  strengths: "",
  weaknesses: "",
  opportunities: "",
  threats: "",
};
export const formSchema = Yup.object().shape({
  competitor: Yup.string().required("Field is required"),
  location: Yup.string().required("Field is required"),
  swotTopic: Yup.string().required("Field is required"),
  swotDuration: Yup.string().required("Field is required"),
  swotCompetitor: Yup.string().required("Field is required"),
  researcherRole: Yup.string().required("Field is required"),
  date: Yup.string().required("Field is required"),
  strengths: Yup.string().required("Field is required"),
  weaknesses: Yup.string().required("Field is required"),
  opportunities: Yup.string().required("Field is required"),
  threats: Yup.string().required("Field is required"),
});

export const formFields = [
  {
    title: "Competitor",
    gridLength: 6,
    otherOptions: {
      name: "competitor",
    },
    component: RHFTextField,
  },
  {
    title: "Location",
    gridLength: 6,
    otherOptions: {
      name: "location",
    },
    component: RHFTextField,
  },
  {
    title: "SWOT Topic",
    gridLength: 6,
    otherOptions: {
      name: "swotTopic",
    },
    component: RHFTextField,
  },
  {
    title: "SWOT Duration",
    gridLength: 6,
    otherOptions: {
      name: "swotDuration",
    },
    component: RHFDatePicker,
  },
  {
    title: "SWOT (Competitor)",
    gridLength: 6,
    otherOptions: {
      name: "swotCompetitor",
    },
    component: RHFDatePicker,
  },
  {
    title: "Researcher (Role)",
    gridLength: 6,
    otherOptions: {
      name: "researcherRole",
    },
    component: RHFTextField,
  },
  {
    title: "Date",
    gridLength: 6,
    otherOptions: {
      name: "date",
    },
    component: RHFDatePicker,
  },
  {
    title: "Strengths",
    gridLength: 12,
    otherOptions: {
      name: "strengths",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Weaknesses",
    gridLength: 12,
    otherOptions: {
      name: "weaknesses",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Opportunities",
    gridLength: 12,
    otherOptions: {
      name: "opportunities",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Threats",
    gridLength: 12,
    otherOptions: {
      name: "threats",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
];
