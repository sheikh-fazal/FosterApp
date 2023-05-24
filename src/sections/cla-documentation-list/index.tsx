import * as Yup from "yup";
import router from "next/router";
import { Box, Typography } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { RHFTextField } from "@root/components/hook-form";

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
              `/cla-documentation-list/cla-documentation-form`
            )
          }
        />
        <TableAction
          type="edit"
          onClicked={() =>
            router.push(
              `/carer-info/?${info.getValue()}`
            )
          }
        />
      </Box>
    ),
    header: "Actions",
    isSortable: false,
  },
];

export const ClaDocumentationListFormData = [
  {
    id: 0.5,
    heading: "Basic Details",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 1,
    componentProps: {
      name: "nameOfOwner",
      label: "Name of Owner(s)",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "nameOfAnimal",
      label: "Name of Animal(s)",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "typeOfAnimal",
      label: "Type of Animal(s)",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 4,
    heading: "Description",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 5,
    heading:
      "Describe The Animal(s) Including Any Relevant Information About their Personality, History And How they were Acquired",
    componentProps: {
      variant: "body2",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 6,
    componentProps: {
      name: "description",
      label: "Details Here",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 7,
    heading: "Housing And Routines",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 8,
    heading:
      "Describe Where The Animal(s) Live within the Home, Including Routines Such As Feeding And Grooming",
    componentProps: {
      variant: "body2",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 9,
    componentProps: {
      name: "housingAndRoutines",
      label: "Details Here",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
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

export const ClaDocumentationListFormValidation = Yup.object().shape({
  nameOfOwner: Yup.string().trim().required("Name of Owner is Required"),
  nameOfAnimal: Yup.string().trim().required("Name of Animal is Required"),
  typeOfAnimal: Yup.string().trim().required("Type of Animal is Required"),
  description: Yup.string().trim(),
  housingAndRoutines: Yup.string().trim(),
});

export { default as ClaDocumentationList } from "./ClaDocumentationList"