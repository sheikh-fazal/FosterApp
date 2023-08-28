import { Typography } from "@mui/material";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";
import { LANGUAGESDROPDOWNDATA } from "@root/dropdown-data/languages";
import { NATIONALITYDROPDOWN } from "@root/dropdown-data/nationality";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";
import * as Yup from "yup";

export const PersonalInfoFormData = [
  {
    id: 1,
    componentProps: {
      name: "childCode",
      label: "Child Code",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "childIdentifier",
      label: "Child Identifier",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "childOrParent",
      label: "Child Or Parent & Child",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "areaOffice",
      label: "Area Office",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    heading: "Personal Details",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 6,
    md: 6,
  },
  {
    id: 7,
    componentProps: {
      name: "firstName",
      label: "First Name",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 8,
    componentProps: {
      name: "middleName",
      label: "Middle Name",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 9,
    componentProps: {
      name: "lastName",
      label: "Last Name",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 10,
    componentProps: {
      name: "dob",
      label: "Date of Birth",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "age",
      label: "Age",
      disabled: true,
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 12,
    componentProps: {
      name: "gender",
      label: "Gender",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    md: 6,
    options: GENDERDROPDOWNDATA,
  },
  {
    id: 13,
    componentProps: {
      name: "ethnicity",
      label: "Ethnicity",
      fullWidth: true,
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: ETHNICITYDROPDOWN,
  },
  {
    id: 14,
    componentProps: {
      name: "ofstedEthnicity",
      label: "Ofsted Ethnicity",
      fullWidth: true,
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: ETHNICITYDROPDOWN,
  },
  {
    id: 15,
    componentProps: {
      name: "language",
      label: "Language",
      fullWidth: true,
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: LANGUAGESDROPDOWNDATA,
  },
  {
    id: 16,
    componentProps: {
      name: "legalStatus",
      label: "Legal Status",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 17,
    componentProps: {
      name: "nationality",
      label: "Nationality",
      fullWidth: true,
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: NATIONALITYDROPDOWN,
  },
  {
    id: 18,
    componentProps: {
      name: "religion",
      label: "Religion",
      fullWidth: true,
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: RELIGIONDROPDOWN,
  },
  {
    id: 19,
    componentProps: {
      name: "immigrationStatus",
      label: "Immigration Status",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 20,
    componentProps: {
      name: "disability",
      label: "Disability",
      fullWidth: true,
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: [
      {
        value: "Yes",
        label: "Yes",
      },
      {
        value: "No",
        label: "No",
      },
    ],
  },
  {
    id: 21,
    componentProps: {
      name: "behaviour",
      label: "Behavior",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 22,
    componentProps: {
      name: "synopsis",
      label: "Synopsis",
      multiline: true,
      fullWidth: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 23,
    componentProps: {
      name: "currentlyStudent",
      label: "Is the Child Currently in Education?",
      fullWidth: true,
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: [
      {
        value: "Yes",
        label: "Yes",
      },
      {
        value: "No",
        label: "No",
      },
    ],
  },
  {
    id: 24,
    componentProps: {
      name: "otherSiblings",
      label: "Are there any other Siblings?",
    },
    component: RHFCheckbox,
    md: 6,
  },
];

export const defaultValues = {
  childCode: "", //1
  childIdentifier: "", //2
  childOrParent: "", //3
  areaOffice: "", //4
  image: null, //5
  firstName: "", //6
  middleName: "", //7
  lastName: "", //8
  dob: null, //9
  age: "", //10
  gender: "", //11
  ethnicity: "", //12
  ofstedEthnicity: "", //13
  language: "", //14
  legalStatus: "", //15
  nationality: "", //16
  religion: "", //17
  immigrationStatus: "", //18
  disability: "", //19
  behaviour: "", //20
  synopsis: "", //21
  currentlyStudent: "", //22
  otherSiblings: false, //23
};

export const validationSchema = Yup.object().shape({
  childCode: Yup.string().trim().required("Field is Required"),
  childIdentifier: Yup.string().trim().required("Field is Required"),
  childOrParent: Yup.string().trim().required("Field is Required"),
  areaOffice: Yup.string().trim().required("Field is Required"),
  image: Yup.mixed().required("Photo is is required"),
  firstName: Yup.string().trim().required("Field is Required"),
  middleName: Yup.string().trim(),
  lastName: Yup.string().trim().required("Field is Required"),
  dob: Yup.date().required("Field is required"),
  gender: Yup.string().trim().required("Field is Required"),
  ethnicity: Yup.string().trim().required("Field is Required"),
  ofstedEthnicity: Yup.string().trim().required("Field is Required"),
  language: Yup.string().trim().required("Field is Required"),
  legalStatus: Yup.string().trim().required("Field is Required"),
  nationality: Yup.string().trim().required("Field is Required"),
  religion: Yup.string().trim().required("Field is Required"),
  immigrationStatus: Yup.string().trim().required("Field is Required"),
  disability: Yup.string().trim().required("Field is Required"),
  behaviour: Yup.string().trim().required("Field is Required"),
  synopsis: Yup.string().trim().required("Field is Required"),
  currentlyStudent: Yup.string().trim().required("Field is Required"),
  otherSiblings: Yup.boolean(),
});

export { default as PersonalInfoForm } from "./PersonalInfoForm";
