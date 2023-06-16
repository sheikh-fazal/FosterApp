import * as Yup from "yup";
import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { TargetsAndObjectives } from "./cla-documentation-form/PEPForm";

export const EHCPFormData = [
  {
    id: 1,
    heading: "Foster Placement Agreement",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    componentProps: {
      name: "fosterPlacement.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "fosterPlacement.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "fosterPlacement.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 5,
    heading: "Placement Information Record / Placement Plan",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 6,
    componentProps: {
      name: "placementInfoRecord.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 7,
    componentProps: {
      name: "placementInfoRecord.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 8,
    componentProps: {
      name: "placementInfoRecord.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 9,
    heading: "Local Authority Placement Plan",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 10,
    componentProps: {
      name: "localAuthorityPlacementPlan.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "localAuthorityPlacementPlan.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 12,
    componentProps: {
      name: "localAuthorityPlacementPlan.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 13,
    heading: "Local Authority Risk Plan",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 14,
    componentProps: {
      name: "localAuthorityRiskAssesssment.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 15,
    componentProps: {
      name: "localAuthorityRiskAssesssment.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 16,
    componentProps: {
      name: "localAuthorityRiskAssesssment.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 17,
    heading: "Delegated Authority",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 18,
    componentProps: {
      name: "delegatedAuthority.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 19,
    componentProps: {
      name: "delegatedAuthority.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 20,
    componentProps: {
      name: "delegatedAuthority.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 21,
    heading: "CLA Medical Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  // {
  //   id: 22,
  //   componentProps: {
  //     name: "date",
  //     label: "Date",
  //     sx: { mb: 4 },
  //     fullWidth: true,
  //   },
  //   component: RHFDatePicker,
  //   md: 6,
  // },
  // {
  //   id: 23,
  //   componentProps: {
  //     name: "onfile",
  //     label: "On File",
  //     sx: { mb: 4 },
  //     select: true,
  //   },
  //   options: [
  //     { value: "Yes", label: "Yes" },
  //     { value: "No", label: "No" },
  //   ],
  //   component: RHFSelect,
  //   md: 6,
  // },
  // {
  //   id: 24,
  //   componentProps: {
  //     name: "comments",
  //     label: "Comments",
  //     sx: { mb: 4 },
  //     multiline: true,
  //     rows: 3,
  //   },
  //   component: RHFTextField,
  //   md: 12,
  // },
  {
    id: 25,
    heading: "CLA Review Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 26,
    componentProps: {
      name: "claReviewDate.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 27,
    componentProps: {
      name: "claReviewDate.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 28,
    componentProps: {
      name: "claReviewDate.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 29,
    heading: "CLA Plan Pt1 Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 30,
    componentProps: {
      name: "carePlanPt1.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 31,
    componentProps: {
      name: "carePlanPt1.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 32,
    componentProps: {
      name: "carePlanPt1.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 33,
    heading: "CLA Plan Pt2 Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 34,
    componentProps: {
      name: "carePlanPt2.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 35,
    componentProps: {
      name: "carePlanPt2.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 36,
    componentProps: {
      name: "carePlanPt2.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 37,
    heading: "PEP Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 38,
    componentProps: {
      name: "perDate.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 39,
    componentProps: {
      name: "perDate.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 40,
    componentProps: {
      name: "perDate.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 41,
    heading: "EHCP Date",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 42,
    componentProps: {
      name: "ehcpDate.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 43,
    componentProps: {
      name: "ehcpDate.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 44,
    componentProps: {
      name: "ehcpDate.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 45,
    heading: "Pathway PLan",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 46,
    componentProps: {
      name: "pathwayPlan.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 47,
    componentProps: {
      name: "pathwayPlan.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 48,
    componentProps: {
      name: "pathwayPlan.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 49,
    heading: "Grab Pack",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 50,
    componentProps: {
      name: "garbPack.date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 51,
    componentProps: {
      name: "garbPack.onfile",
      label: "On File",
      sx: { mb: 4 },
      select: true,
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 52,
    componentProps: {
      name: "garbPack.comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
];
export const PEPFormData = [
  {
    id: 1,
    componentProps: {
      name: "name",
      label: "Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "class",
      label: "Class",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "planDoneBy",
      label: "Plan",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "assessmentDate",
      label: "Assessment",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "from",
      label: "Pep Duration From",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "to",
      label: "Pep Duration to",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 5,
    component: TargetsAndObjectives,
    md: 12,
  },
  {
    id: 7,
    componentProps: {
      name: "overAllOutcome",
      label: "Overall Outcome",
      sx: { my: 3 },
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
];
export const TargetsAndObjectivesData = [
  {
    id: 1,
    heading: "Targets / Objectives:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    paraTitle: "T1 ",
    para: " -Child will consolidate all sounds and be able to apply these as initial medial and final sounds in vc cv and cvc words.The focus this term will be medial vowel e.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 3,
    paraTitle: "T2 ",
    para: "- Child will Improve auditory memory skills by means of sequencing and predication.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 4,
    paraTitle: "T3 ",
    para: "- Child will know and recognize the first 40 keywords and be able to use them orally in context and in written form relation to T1.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 5,
    paraTitle: "T4 ",
    para: "- Child will consolidate number and continue to develop those skills by adding and subtraction whith 20. Child will be able to recognize numbers up to 20 in both written and numerical form.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
];
export const StrategiesAndEvidence = [
  {
    id: 1,
    heading: "Strategies / Evidence:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2, listStyleType: "none" },
    },
    component: Typography,
  },
  {
    id: 2,
    para: " Use of Phonographix programme and letterland sounds consolidate / help retention.",
    component: Typography,
    md: 12,
  },
  {
    id: 3,
    para: "Tape recorder etc to produce and identify their own sounds.",
    componentProps: {
      sx: { mb: 2 },
    },
    component: Typography,
    md: 12,
  },
  {
    id: 4,
    para: "Sequencing pictures.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 5,
    para: "Memory games.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 5,
    para: "My Grandmother went to th market.",
    componentProps: {
      sx: { mb: 2 },
    },
    component: Typography,
    md: 12,
  },
  {
    id: 6,
    para: "Ladybird keywords.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 7,
    para: "Fishing game.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 8,
    para: "Busy bee.",
    componentProps: {
      sx: { mb: 2 },
    },
    component: Typography,
    md: 12,
  },
  {
    id: 9,
    para: "Deboys and Pitt early number work ideas.",
    component: Typography,
    md: 12,
  },
  {
    id: 10,
    para: "Multiple cubes.",
    component: Typography,
    md: 12,
  },
  {
    id: 11,
    para: "Practical number games within 20.",
    component: Typography,
    md: 12,
  },
  {
    id: 12,
    para: "Genesis Key Stage.",
    component: Typography,
    md: 12,
  },
];

// Default Values

// PEP Form Default Values
export const defaultValuesForPep = {
  name: "",
  class: "",
  planDoneBy: "",
  assessmentDate: null,
  from: null,
  to: null,
  overAllOutcome: "",
  document: "PEP personal Educational Plan",
};
// EHCP Form Default Values
export const defaultValuesForEhcp = {
  fosterPlacement: { date: null, onfile: "", comments: "" },

  placementInfoRecord: { date: null, onfile: "", comments: "" },

  localAuthorityPlacementPlan: { date: null, onfile: "", comments: "" },

  localAuthorityRiskAssesssment: { date: null, onfile: "", comments: "" },

  delegatedAuthority: { date: null, onfile: "", comments: "" },

  claReviewDate: { date: null, onfile: "", comments: "" },

  carePlanPt1: { date: null, onfile: "", comments: "" },

  carePlanPt2: { date: null, onfile: "", comments: "" },

  perDate: { date: null, onfile: "", comments: "" },

  ehcpDate: { date: null, onfile: "", comments: "" },

  pathwayPlan: { date: null, onfile: "", comments: "" },

  garbPack: { date: null, onfile: "", comments: "" },

  // test13: { date: null, onfile: "", comments: "" },

  document: "Educaton, Health, Care Plan Document"
};

// EHCP Validations
// export const EHCPFormValidation = Yup.object().shape({
//   date1: Yup.date(),
//   onfile1: Yup.string().trim().required("Selection is Required"),
//   comments1: Yup.string().trim().required("Selection is Required"),
//   date2: Yup.date(),
//   onfile2: Yup.string().trim().required("Selection is Required"),
//   comments2: Yup.string().trim().required("Selection is Required"),
//   date3: Yup.date(),
//   onfile3: Yup.string().trim().required("Selection is Required"),
//   comments3: Yup.string().trim().required("Selection is Required"),
//   date4: Yup.date(),
//   onfile4: Yup.string().trim().required("Selection is Required"),
//   comments4: Yup.string().trim().required("Selection is Required"),
//   date5: Yup.date(),
//   onfile5: Yup.string().trim().required("Selection is Required"),
//   comments5: Yup.string().trim().required("Selection is Required"),
//   date6: Yup.date(),
//   onfile6: Yup.string().trim().required("Selection is Required"),
//   comments6: Yup.string().trim().required("Selection is Required"),
//   date7: Yup.date(),
//   onfile7: Yup.string().trim().required("Selection is Required"),
//   comments7: Yup.string().trim().required("Selection is Required"),
//   date8: Yup.date(),
//   onfile8: Yup.string().trim().required("Selection is Required"),
//   comments8: Yup.string().trim().required("Selection is Required"),
//   date9: Yup.date(),
//   onfile9: Yup.string().trim().required("Selection is Required"),
//   comments9: Yup.string().trim().required("Selection is Required"),
//   date10: Yup.date(),
//   onfile10: Yup.string().trim().required("Selection is Required"),
//   comments10: Yup.string().trim().required("Selection is Required"),
//   date11: Yup.date(),
//   onfile11: Yup.string().trim().required("Selection is Required"),
//   comments11: Yup.string().trim().required("Selection is Required"),
//   date12: Yup.date(),
//   onfile12: Yup.string().trim().required("Selection is Required"),
//   comments12: Yup.string().trim().required("Selection is Required"),
//   date13: Yup.date(),
//   onfile13: Yup.string().trim().required("Selection is Required"),
//   comments13: Yup.string().trim().required("Selection is Required"),
// });

// PEP Validations
export const PEPFormValidation = Yup.object().shape({
  name: Yup.string().trim().required("Required"),
  class: Yup.string().trim().required("Required"),
  planDoneBy: Yup.string().trim().required("Required"),
  assessmentDate: Yup.date(),
  from: Yup.date(),
  to: Yup.date(),
  overAllOutcome: Yup.string().trim().required("Required"),
});

export { default as ClaDocumentationList } from "./ClaDocumentationTable";