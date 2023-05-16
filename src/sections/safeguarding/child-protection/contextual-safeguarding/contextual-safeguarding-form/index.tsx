import { Typography } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import { RHFRadioGroup, RHFTextField } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import React, { useState } from "react";
import * as Yup from "yup";

export const ContextualFormData = [
  {
    id: 1,
    heading: "What is your request for?",
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
      defaultValue: "Consideration of a multi-agency flag",
      name: "yourrequest",
      options: ["Consideration of a multi-agency flag", "Suspected perpetrator to b e discussed", "Location to be discussed", "Group to be discussed"],
    },
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
  },

  {
    id: 3,
    heading: "Details of location wherer child exploitation is believed to be occuring:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2, mt: 2 },
    },
    component: Typography,
  },
  {
    id: 3.5,
    heading:
      "Location:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 4,
    componentProps: {
      name: "location",
      label: "",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 5,
    heading:
      "Brief summary of the concerns:",
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
      name: "briefsummary",
      label: "",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 7,
    heading: "Details of Referrer:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },

  {
    id: 8,
    componentProps: {
      name: "referrersname",
      label: "Referrers Name:",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    id: 9,
    componentProps: {
      name: "telephone",
      label: "Telephone:",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    id: 10,
    componentProps: {
      name: "email",
      label: "Email:",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "agency",
      label: "Agency:",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 12,
    componentProps: {
      name: "dateofreferral",
      label: "Date Of Referral:",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];

export const ContextualFormDataValues = {
  yourrequest: "",
  location: "",
  briefsummary: "",
  referrersname: "",
  telephone: "",
  email: "",
  agency: "",
  dateofreferral: "",
};

export const ContextualFormValidationSchema = Yup.object().shape({
  yourrequest: Yup.string().trim().required("Field is Required"),
  location: Yup.string().trim().required("Field is Required"),
  briefsummary: Yup.string().trim().required("Field is Required"),
  referrersname: Yup.string().trim().required("Field is Required"),
  telephone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 6 characters")
    .max(15, "Maximum 15 characters"),
  email: Yup.string().trim().required("Field is Required").email("Invalid Email"),
  agency: Yup.string().trim().required("Field is Required"),
  dateofreferral: Yup.string().trim().required("Field is Required"),
});

export { default as ContextualSafeguardingForm } from "./contextual-safeguarding-form";