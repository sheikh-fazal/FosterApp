import { Typography } from "@mui/material";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";
import { personalEducationPlan } from "@root/dropdown-data/personalEducationPlan";
import { SCHOOLTYPE } from "@root/dropdown-data/schoolType";
import { schoolYear } from "@root/dropdown-data/schoolYear";

export const defaultValues = {
  placement: true,
  details: "",
  schoolType: "",
};

export const educationInfoFormData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "placement",
      label: "Does this child have a Placement?",
    },
    component: RHFCheckbox,
  },
  {
    id: 3,
    gridLength: 12,
    title:
      "Describe Any issue in relation to health and hygiene, and how they will be managed?",
    otherOptions: {
      name: "details",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    title: "School Type :",
    component: RHFSelect,
    gridLength: 6,
    otherOptions: {
      name: "schoolType",
      select: true,
    },
    options: SCHOOLTYPE,
  },
  {
    id: 2,
    title: "School Address",
    otherOptions: {
      variant: "body2",
    },
    component: Typography,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "currentSchool",
      label: "Is this child's Current School?",
    },
    component: RHFCheckbox,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "fosterPlacement",
      label: "Is this School due to Foster Placement change?",
    },
    component: RHFCheckbox,
  },
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "educationalNeeds",
      label: "Does the child have a statement of special educational needs?",
    },
    component: RHFCheckbox,
  },
  {
    id: 6,
    title: "Personal Education Plan",
    component: RHFSelect,
    gridLength: 6,
    otherOptions: {
      name: "personalEducation",
      select: true,
    },
    options: personalEducationPlan,
  },
  {
    id: 6,
    title: "School Year",
    component: RHFSelect,
    gridLength: 6,
    otherOptions: {
      name: "schoolYear",
      select: true,
    },
    options: schoolYear,
  },
  {
    id: 3,
    gridLength: 12,
    title: "Class Studying",
    otherOptions: {
      name: "classStudying",
      multiline: true,
      minRows: 3,
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
