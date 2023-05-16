import { Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const AForm = [
  {
    id: 0.5,
    heading: "Safeguarding Policy Document",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 4,
    componentProps: {
      name: "dateUploaded",
      label: "Date Uploaded",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "uploadImage",
      label: "Upload Image",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "description",
      label: "Description",
      multiline:true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 3,
    componentProps: {
      name: "version",
      label: "Version",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "creatorRole",
      label: "Creator role",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "createdBy",
      label: "Created by",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "creationTime",
      label: "Creation time",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "approvedBy",
      label: "Approved by",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "approverRole",
      label: "Approver role",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "lastModifiedTime",
      label: "Last modified time",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "lastModifiedBy",
      label: "Last modified by",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "dateOfESignatureOfAuthor",
      label: "Date of eSignature of Author",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "eSignatureOfAuthor",
      label: "eSignature of Author",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "dateOfESignatureOfApprover",
      label: "Date of eSignature of Approver",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "eSignatureOfApprover",
      label: "eSignature of Approver",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];

export const AFormDefaultValues = {
  nameOfOwner: "",
  nameOfAnimal: "",
  typeOfAnimal: "",
  description: "",
  housingAndRoutines: "",
};

export const AFormValidationSchema = Yup.object().shape({
  nameOfOwner: Yup.string().trim().required("Name of Owner is Required"),
  nameOfAnimal: Yup.string().trim().required("Name of Animal is Required"),
  typeOfAnimal: Yup.string().trim().required("Type of Animal is Required"),
  description: Yup.string().trim(),
  housingAndRoutines: Yup.string().trim(),
});

export { default as PetQuestionnaireAFrom } from "./addCaringPolicyForm";
