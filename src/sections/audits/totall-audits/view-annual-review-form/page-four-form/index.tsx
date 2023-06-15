import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const formFields = [
  {
    title: "Particular issues arising from placements:",
    gridLength: 12,
    otherOptions: {
      name: "particularIssues",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Training Issues:",
    gridLength: 12,
    otherOptions: {
      name: "trainingIssues",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    heading: "Safety Issues",
  },
  {
    title: "Last Health and Safety Date:",
    gridLength: 6,
    otherOptions: {
      name: "safetyDate",
    },
    component: RHFDatePicker,
  },
  {
    title: "Equipment:",
    gridLength: 12,
    otherOptions: {
      name: "equipment",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "General Comments on Placements:",
    gridLength: 12,
    otherOptions: {
      name: "generalComments",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Supervising Social Worker Recommendations:",
    gridLength: 12,
    otherOptions: {
      name: "supervising",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Implications and descions for the future:",
    gridLength: 12,
    otherOptions: {
      name: "descions",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Review Officer Comments:",
    gridLength: 12,
    otherOptions: {
      name: "officerComments",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Pannel Recommendation:",
    gridLength: 12,
    otherOptions: {
      name: "pannelRecommendation",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Need for Change in Current Terms of Approval:",
    gridLength: 12,
    otherOptions: {
      name: "termsApproval",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Target Date for considration by Agency Pannel:",
    gridLength: 6,
    otherOptions: {
      name: "targetDate",
    },
    component: RHFDatePicker,
  },
  {
    title: "Birth Children Comments:",
    gridLength: 12,
    otherOptions: {
      name: "childrenComments",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "CLA Comments:",
    gridLength: 12,
    otherOptions: {
      name: "claComments",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Foster Carer Comments:",
    gridLength: 12,
    otherOptions: {
      name: "carerComments",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "IRO Comments:",
    gridLength: 12,
    otherOptions: {
      name: "iroComments",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Final Outcome:",
    gridLength: 12,
    otherOptions: {
      name: "finalOutcome",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Category",
    gridLength: 6,
    otherOptions: {
      name: "category",
      select: true,
      options: [{ value: "Diasabeled Choice", label: "Diasabeled Choice" }],
    },
    component: RHFSelect,
  },
  {
    tag: <br />,
  },
  {
    title: "Home Visit Type",
    gridLength: 6,
    otherOptions: {
      name: "homeVisitType",
      select: true,
      options: [{ value: "Diasabeled Choice", label: "Diasabeled Choice" }],
    },
    component: RHFSelect,
  },
  {
    title: "Home Visit Status",
    gridLength: 6,
    otherOptions: {
      name: "homeVisitStatus",
      select: true,
      options: [{ value: "Diasabeled Choice", label: "Diasabeled Choice" }],
    },
    component: RHFSelect,
  },
  {
    title: "Date of Visit:",
    gridLength: 6,
    otherOptions: {
      name: "visitDate",
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "fileSeen",
      label: "Home File Seen",
      sx: { mt: "20px" },
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "sheetChecked",
      label: "Medication Sheet Checked",
      sx: { mt: "20px" },
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "authorityFeedback",
      label: "Local Authority Feedback Required",
      sx: { mt: "20px" },
    },
    component: RHFCheckbox,
  },
  {
    title: "Nature of Visit:",
    gridLength: 12,
    otherOptions: {
      name: "natureOfVisit",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
];
