import * as Yup from "yup";
import router from "next/router";
import { Box, Typography } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

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
              `/foster-child/child-background-info/cla-documentation/cla_document_type/${info?.row?.original?.DocumentType}`
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
      name: "dateOne",
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
      name: "OnFileOne",
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
      name: "Comments",
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
      name: "dateTwo",
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
      name: "OnFileTwo",
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
      name: "Comments",
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
      name: "dateThree",
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
      name: "OnFileThree",
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
      name: "Comments",
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
      name: "dateThree",
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
      name: "OnFileThree",
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
      name: "Comments",
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
      name: "dateThree",
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
      name: "OnFileThree",
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
      name: "Comments",
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
      name: "dateThree",
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
      name: "OnFileThree",
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
      name: "Comments",
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
      name: "dateThree",
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
      name: "OnFileThree",
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
      name: "Comments",
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
      name: "dateThree",
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
      name: "OnFileThree",
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
      name: "Comments",
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
      name: "dateThree",
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
      name: "OnFileThree",
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
      name: "Comments",
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
      name: "dateThree",
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
      name: "OnFileThree",
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
      name: "Comments",
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
      name: "dateThree",
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
      name: "OnFileThree",
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
      name: "Comments",
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
      name: "dateThree",
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
      name: "OnFileThree",
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
      name: "Comments",
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
      name: "dateThree",
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
      name: "OnFileThree",
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
      name: "Comments",
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
      name: "pepDuration",
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

];

export const PEPContentData = [
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
    para: "T1 - Child will consolidate all sounds and be able to apply these as initial medial and final sounds in vc cv and cvc words.The focus this term will be medial vowel e.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 6,
  },
  {
    id: 3,
    para: "T1 - Child will consolidate all sounds and be able to apply these as initial medial and final sounds in vc cv and cvc words.The focus this term will be medial vowel e.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 6,
  },
  {
    id: 4,
    para: "T1 - Child will consolidate all sounds and be able to apply these as initial medial and final sounds in vc cv and cvc words.The focus this term will be medial vowel e.",
    color: (theme: any) => theme.palette.primary.main,
    sx: { mb: 2 },
    component: Typography,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "",
      label: "",
      sx: { my: 4 },
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },

];


// export const defaultValues = {
//   nameOfOwner: "",
//   nameOfAnimal: "",
//   typeOfAnimal: "",
//   description: "",
//   housingAndRoutines: "",
// };

export const EHCPFormValidation = Yup.object().shape({
  nameOfOwner: Yup.string().trim().required("Name of Owner is Required"),
  nameOfAnimal: Yup.string().trim().required("Name of Animal is Required"),
  typeOfAnimal: Yup.string().trim().required("Type of Animal is Required"),
  description: Yup.string().trim(),
  housingAndRoutines: Yup.string().trim(),
});
export const PEPFormValidation = Yup.object().shape({
  name: Yup.string().trim().required("Name of Owner is Required"),
  class: Yup.string().trim().required("Name of Animal is Required"),
  plan: Yup.string().trim().required("Type of Animal is Required"),
  pepDuration: Yup.string().trim(),
  assessment: Yup.string().trim(),
});


export { default as ClaDocumentationList } from "./ClaDocumentationList"