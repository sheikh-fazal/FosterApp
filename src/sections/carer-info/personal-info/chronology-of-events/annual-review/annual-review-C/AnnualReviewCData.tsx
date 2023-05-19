import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
export const defaultValues = {
  complaintsReview: "Text",
  significantChanges: "Text",
  forestingImpact: "Text",
  specificPreparation: "Text",
  carerSupport: "Text",
  socialWorkers: "Text",
  otherProfessionals: "Text",
  otherFosterCarers: "Text",
  procedures: "Text",
};

export const FormSchema = Yup.object().shape({
  complaintsReview: Yup.string().required("required"),
  significantChanges: Yup.string().required("required"),
  forestingImpact: Yup.string().required("required"),
  specificPreparation: Yup.string().required("required"),
  carerSupport: Yup.string().required("required"),
  socialWorkers: Yup.string().required("required"),
  otherProfessionals: Yup.string().required("required"),
  otherFosterCarers: Yup.string().required("required"),
  procedures: Yup.string().required("required"),
});

export const annualReviewCData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "complaintsReview",
      label: "Complaints or Allegation during period under review:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "significantChanges",
      label: "Significant changes/events for Carers since last review:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    title: "Experience of working with birth parents",
    gridLength: 12,
    otherOptions: {
      name: "forestingImpact",
      label: "Impact of Foresting On Family:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    title: "Working relationship with the Agency",
    gridLength: 12,
    otherOptions: {
      name: "specificPreparation",
      label:
        "What specific preparation/training have the carer to assist them to become foster carers (First Review Only)?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "carerSupport",
      label: "Support for Carers:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    title: "Working relationship with professionals",
    gridLength: 12,
    otherOptions: {
      name: "socialWorkers",
      label: "Supervising Social Workers:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "otherProfessionals",
      label: "Other Professionals:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "otherFosterCarers",
      label: "Other Foster Carers:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "procedures",
      label: "Procedures:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as AnnualReviewC } from "./AnnualReviewC";
