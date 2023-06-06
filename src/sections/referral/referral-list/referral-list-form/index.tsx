import dayjs from "dayjs";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import img1 from "../../../../assets/svg/referral/referralListImg1.svg";
import img2 from "../../../../assets/svg/referral/referralListImg2.svg";
import img3 from "../../../../assets/svg/referral/referralListImg3.svg";

const todayDate = dayjs().format("MM/DD/YYYY");
export const ReferralListFormDefaultValues = {
  referralDate: new Date(todayDate),
  status: "",
  referredBy: "",
  referrerRole: "",
  areaOffice: "",
  localAuthority: "",
  reason: "",
  updatePhoto: null,
  firstName: "",
  middleName: "",
  lastName: "",
  DOB: new Date(todayDate),
  age: "",
  gender: "",
  ethnicity: "",
  ofstedEthnicity: "",
  specialNeeds: "",
  childGeography: "",
  religion: "",
  address: "",
  currentlyEducation: "",
  otherSiblings: "",
};

export const ReferralListFormSchema = Yup.object().shape({
  referralDate: Yup.string().trim().required("Field is Required"),
  status: Yup.string().required("Field is Required"),
  referredBy: Yup.string().trim().required("Field is Required"),
  referrerRole: Yup.string().trim().required("Field is Required"),
  areaOffice: Yup.string().trim().required("Field is Required"),
  localAuthority: Yup.string().trim().required("Field is Required"),
  reason: Yup.string().trim().required("Field is Required"),
  updatePhoto: Yup.string().required("Field is Required"),
  firstName: Yup.string().trim().required("Field is Required"),
  middleName: Yup.string().trim().required("Field is Required"),
  lastName: Yup.string().trim().required("Field is Required"),
  gender: Yup.string().trim().required("Field is Required"),
  DOB: Yup.string().trim().required("Field is Required"),
  age: Yup.string().trim().required("Field is Required"),
  ethnicity: Yup.string().trim().required("Field is Required"),
  ofstedEthnicity: Yup.string().trim().required("Field is Required"),
  specialNeeds: Yup.string().trim().required("Field is Required"),
  childGeography: Yup.string().trim().required("Field is Required"),
  religion: Yup.string().trim().required("Field is Required"),
  address: Yup.string().trim().required("Field is Required"),
  currentlyEducation: Yup.string().trim().required("Field is Required"),
  otherSiblings: Yup.string().trim().required("Field is Required"),
});

export { default as ReferralListForm } from "./ReferralListForm";
export const ReferralListFormData = [
  {
    gridLength: 6,
    label: "Referral Date",
    componentProps: {
      name: "referralDate",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Status",
    componentProps: {
      name: "status",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "curentReferral", label: "Curent Referral" },
      { value: "onHold", label: "OnHold" },
      { value: "rejected", label: "Rejected" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Referred By",
    componentProps: {
      name: "referredBy",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    label: "Referrer Role",
    componentProps: {
      name: "referrerRole",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "fosterCarer", label: "Foster Carer" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Area Office",
    componentProps: {
      name: "areaOffice",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "curentReferral", label: "Curent Referral" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Local Authority",
    componentProps: {
      name: "localAuthority",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "curentReferral", label: "Curent Referral" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 12,
    label: "Reason",
    componentProps: {
      name: "reason",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 12,
    heading: "Personal Details",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 4 },
    },
    component: Typography,
  },
  {
    gridLength: 6,
    uploadPhoto: true,
  },
  {
    gridLength: 6,
    label: "First Name",
    componentProps: {
      name: "firstName",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Middle Name",
    componentProps: {
      name: "middleName",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Last Name",
    componentProps: {
      name: "lastName",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Date of eSignature of Author",
    componentProps: {
      name: "DOB",
      sx: { mb: 4 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    label: "Age",
    componentProps: {
      name: "age",
      sx: { mb: 4 },
    },
    component: RHFTextField,
  },

  {
    gridLength: 6,
    label: "Gender",
    componentProps: {
      name: "gender",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
    component: RHFSelect,
    md: 6,
  },

  {
    gridLength: 6,
    label: "Ethnicity",
    componentProps: {
      name: "ethnicity",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "select", label: "select" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Ofsted Ethnicity",
    componentProps: {
      name: "ofstedEthnicity",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "select", label: "Select" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Special Needs",
    componentProps: {
      name: "specialNeeds",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Child Geography",
    componentProps: {
      name: "childGeography",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "select", label: "Select" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Religion",
    componentProps: {
      name: "religion",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "select", label: "Select" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 12,
    label: "Address",
    componentProps: {
      name: "address",
      fullWidth: true,
      sx: { mb: 4 },
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    label: "Is the child currently in education?",
    componentProps: {
      name: "currentlyEducation",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    gridLength: 6,
    label: "Are there any other siblings?",
    componentProps: {
      name: "otherSiblings",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },
];
