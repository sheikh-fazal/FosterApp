import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const FormData = [
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
      name: "type",
      label: "Type of License",
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
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "guide_link_name",
      label: "Guide",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "guide_link",
      label: "Guide Link",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "email",
      label: "Email",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "phone",
      label: "Phone",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
];

export const FormDataValues = {
  name: "Foster Talk",
  type: "Public Domain",
  description:
    "Ut magna pariatur culpa commodo veniam veniam amet id commodo dolor in sunt. Aliquip eu do tempor aliqua. Anim incididunt incididunt nisi proident quis culpa id irure. Ut voluptate laboris non ad nostrud ullamco labore veniam magna deserunt nostrud magna consequat. Non qui dolore cupidatat cillum dolor labore amet.",
  guide_link_name: "QuickBook",
  guide_link: "https://sandbox-quickbooks.api.intuit.com",
  email: "test@yopmail.com",
  phone: "test@yopmail.com",
};

export const FormValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Field is Required"),
  type: Yup.string().trim().required("Field is Required"),
  description: Yup.string().trim().required("Field is Required"),
  guide_link_name: Yup.string().trim().required("Field is Required"),
  guide_link: Yup.string().trim().required("Field is Required"),
  email: Yup.string().trim().required("Field is Required"),
  phone: Yup.string().trim().required("Field is Required"),
});
