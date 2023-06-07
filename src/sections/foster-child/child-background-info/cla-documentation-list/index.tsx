import * as Yup from "yup";
import router from "next/router";
import { Box, Typography } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { TargetsAndObjectives } from "./cla-documentation-form/PEPForm";

export const columns = [
  {
    accessorFn: (row: any) => row,
    id: "srNo",
    cell: (info: any) => Number(info?.row?.id) + 1,
    header: "Sr. No",
  },
  {
    accessorFn: (row: any) => row.Date,
    id: "Date",
    cell: (info: any) => info.getValue(),
    header: "Date",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.Document,
    id: "Document",
    cell: (info: any) => info.getValue(),
    header: "Document",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.DocumentType,
    id: "Document Type ",
    cell: (info: any) => info.getValue(),
    header: "Document Type",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="view"
          onClicked={() =>
            router.push(
              `/foster-child/child-background-info/cla-documentation/${info?.row?.original?.id}?action=view`
            )
          }
        />
        <TableAction
          type="share"
          onClicked={() =>
            router.push(
              `?${info.getValue()}`
            )
          }
        />
      </Box>
    ),
    header: "Actions",
    isSortable: false,
  },
];
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
  {
    id: 22,
    componentProps: {
      name: "date",
      label: "Date",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 23,
    componentProps: {
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 24,
    componentProps: {
      name: "comments",
      label: "Comments",
      sx: { mb: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
      name: "date",
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
      name: "OnFile",
      label: "On File",
      sx: { mb: 4 },
      select: true
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
      name: "comments",
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
      name: "plan",
      label: "Plan",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "pep",
      label: "Pep Duration",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "assessment",
      label: "Assessment",
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
    id: 6,
    componentProps: {
      name: "overallOutcome",
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
    paraTitle: 'T1 ',
    para: " -Child will consolidate all sounds and be able to apply these as initial medial and final sounds in vc cv and cvc words.The focus this term will be medial vowel e.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 3,
    paraTitle: 'T2 ',
    para: "- Child will Improve auditory memory skills by means of sequencing and predication.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 4,
    paraTitle: 'T3 ',
    para: "- Child will know and recognize the first 40 keywords and be able to use them orally in context and in written form relation to T1.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 12,
  },
  {
    id: 5,
    paraTitle: 'T4 ',
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

export const defaultValues = {
  // EHCP Form Default Values
  date: "",
  OnFile: "",
  comments: "",

  // PEP Form Default Values
  name: "",
  class: "",
  plan: "",
  pep: "",
  assessment: "",
  overallOutcome: "",
};


export const EHCPFormValidation = Yup.object().shape({
  date: Yup.string().trim().required("Date is Required"),
  OnFile: Yup.string().trim().required("Selection is Required"),
  comments: Yup.string().trim().required("Comments is Required"),
});

export const PEPFormValidation = Yup.object().shape({
  name: Yup.string().trim().required("Name of Owner is Required"),
  class: Yup.string().trim().required("class is Required"),
  plan: Yup.string().trim().required("Plan Required"),
  pep: Yup.date().required(),
  assessment: Yup.date().required(),
  overallOutcome: Yup.string().trim().required("overcall outcome Required"),
});

export { default as ClaDocumentationList } from "./ClaDocumentationList"