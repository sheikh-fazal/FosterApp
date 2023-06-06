import { Typography } from "@mui/material";
import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const defaultValues = {
  parentAndChild: "",
};

export const educationInfoFormData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "placement",
      label: "Does this child have a Placement?",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  {
    id: 2,
    heading:
      "Describe Any issue in relation to health and hygiene, and how they will be managed?",
    componentProps: {
      variant: "body2",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 1 },
    },
    component: Typography,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "parentAndChild",
      label: "Carer Code",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "areaOffice", label: "Carer Status", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "areaOffice", label: "No of Carer(s)", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: {
  //     label: "Approval Date",
  //     name: "uploadDate",
  //     fullWidth: true,
  //   },
  //   component: RHFDatePicker,
  // },
  {
    gridLength: 12,
    otherOptions: {
      name: "areaOffice",
      label: "If Joint applicant, tick the Checkbox",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  // {
  //   head: "Personal Details",
  // },
  // // {
  // //   gridLength: 6,
  // //   title: "Title",
  // //   otherOptions: {
  // //     name: "Title",
  // //     fullWidth: true,
  // //     select: true,
  // //   },
  // //   options: [
  // //     { value: "Victor Krum (Safeguarding Officer)", label: "Victor Krum (Safeguarding Officer)" },
  // //   ], component: RHFSelect,
  // // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "areaOffice", label: "Title", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { fileUpload: true, label: 'Upload image' },
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "areaOffice", label: "Local Authority", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "areaOffice", label: "Area Office", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "areaOffice", label: "First Name", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "areaOffice", label: "Last Name", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: {
  //     label: "Date of Birth",
  //     name: "uploadDate",
  //     fullWidth: true,
  //   },
  //   component: RHFDatePicker,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Age", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Gender", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Ethnicity", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Ofstead Ethnicity", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Partnership status", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Nationality", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Language", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Religion", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Age Range", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Immigration Status", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Behaviour", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Agency Social Worker", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Siblings group accepted?", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   head: "Contact Details",
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Email", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Phone number", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "City/Town", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "County", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "County", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: { name: "age", label: "Postal code", fullWidth: true },
  //   component: RHFTextField,
  // },
  // {
  //   gridLength: 12,
  //   otherOptions: {
  //     name: "address",
  //     label: "Address",
  //     multiline: true,
  //     minRows: 3,
  //     fullWidth: true,
  //     size: "small",
  //   },
  //   component: RHFTextField,
  // },
];
