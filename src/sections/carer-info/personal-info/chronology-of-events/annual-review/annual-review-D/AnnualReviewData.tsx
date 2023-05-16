import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";
import dayjs from "dayjs";

const todayDate = dayjs().format("MM/DD/YYYY");

export const defaultValues = {
  placementIssues: "Text",
  trainingIssues: "Text",
  safetyDate: new Date(todayDate),
  equipment: "Text",
  generalPlacements: "Text",
  implications: "Text",
  reviewOfficer: "Text",
  recommendation: "Text",
  termsApproval: "Text",
  agencyPanel: new Date(todayDate),
  childrenComments: "Text",
  claComments: "Text",
  carerComments: "Text",
  iroComments: "Text",
  finalOutcome: "Text",
};

export const FormSchema = Yup.object().shape({
  placementIssues: Yup.string().required("required"),
  trainingIssues: Yup.string().required("required"),
  safetyDate: Yup.date().required("required"),
  equipment: Yup.string().required("required"),
  generalPlacements: Yup.string().required("required"),
  implications: Yup.string().required("required"),
  reviewOfficer: Yup.string().required("required"),
  recommendation: Yup.string().required("required"),
  termsApproval: Yup.string().required("required"),
  agencyPanel: Yup.date().required("required"),
  childrenComments: Yup.string().required("required"),
  claComments: Yup.string().required("required"),
  carerComments: Yup.string().required("required"),
  iroComments: Yup.string().required("required"),
  finalOutcome: Yup.string().required("required"),
});

export const annualReviewD = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "placementIssues",
      label: "Particular issues arising from placements:",
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
      name: "trainingIssues",
      label: "Training Issues:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    title: "Safety Issues",
    gridLength: 6,
    otherOptions: {
      name: "safetyDate",
      label: "Last Health and Safety Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "equipment",
      label: "Equipment:",
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
      name: "generalPlacements",
      label: "General Comments on Placements:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "implications",
      label: "Implications and decisions for the future:",
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
      name: "reviewOfficer",
      label: "Review Officer Comments:",
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
      name: "recommendation",
      label: "Panel Recommendation:",
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
      name: "termsApproval",
      label: "Need for change in Current Terms of Approval:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "agencyPanel",
      label: "Target Date for consideration by Agency Panel:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "childrenComments",
      label: "Birth Children Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      name: "claComments",
      label: "CLA Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 12,
    otherOptions: {
      name: "carerComments",
      label: "Foster Carer Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 12,
    otherOptions: {
      name: "iroComments",
      label: "IRO Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 12,
    otherOptions: {
      name: "finalOutcome",
      label: "Final Outcome:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as AnnualReviewD } from "./AnnualReviewD";
