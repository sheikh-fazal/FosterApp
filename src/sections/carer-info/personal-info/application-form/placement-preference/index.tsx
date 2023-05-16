import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";
import { IMMIGRATIONSTATUS } from "@root/dropdown-data/immigrationStatus";
import { NATIONALITYDROPDOWN } from "@root/dropdown-data/nationality";
import { PLACEMENTTYPE } from "@root/dropdown-data/placementType";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";
import * as Yup from "yup";
// utils

// ----------------------------------------------------------------------

export const defaultValues = {
  ageRange: "",
  placementType: "",
  noOfChildren: "",
  gender: "",
  siblingGroupAcceptable: "",
  ethnicity: "",
  nationality: "",
  religion: "",
  immigrationStatus: "",
  disability: "",
  stateIntrestedInFostering: "",
  childBehaviour: "",
  houseHoldDescription: "",
};

export const FormSchema = Yup.object().shape({
  ageRange: Yup.string().trim().required("Age Range is required"),
  placementType: Yup.string().trim().required("Placement Type is required"),
  noOfChildren: Yup.string().trim().required("Number Children is required"),
  gender: Yup.string().trim().required("Gender is required"),
  siblingGroupAcceptable: Yup.string()
    .trim()
    .required("Sibling Group Acceptable is required"),
  ethnicity: Yup.string().trim().required("Ethnicity is required"),
  nationality: Yup.string().trim().required("Nationality is required"),
  religion: Yup.string().trim().required("Religion is required"),
  immigrationStatus: Yup.string()
    .trim()
    .required("Immigration Status is required"),
  disability: Yup.string().trim().required("Field is required"),
  stateIntrestedInFostering: Yup.string()
    .required("Field is Required")
    .min(4, "Mininum 6 characters")
    .max(100, "Maximum 100 characters"),
  childBehviourWouldNotAccept: Yup.string()
    .required("Required")
    .min(4, "Mininum 6 characters")
    .max(100, "Maximum 100 characters"),
  houseHoldDescription: Yup.string()
    .required("Describe your householding is Required")
    .min(4, "Mininum 6 characters")
    .max(100, "Maximum 100 characters"),
});
export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "ageRange",
      label: "Age Range",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: 0, label: 0 },
      { value: 1, label: 1 },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "placementType",
      label: "Placement Type",
      fullWidth: true,
      select: true,
    },
    options: PLACEMENTTYPE,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "noOfChildren",
      label: "Number of Children",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "gender",
      label: "Gender",
      fullWidth: true,
      select: true,
    },
    options: GENDERDROPDOWNDATA,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "siblingGroupAcceptable",
      label: "Sibling Group acceptable",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "ethnicity",
      label: "Ethnicity",
      fullWidth: true,
      select: true,
    },
    options: ETHNICITYDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "nationality",
      label: "Nationality",
      fullWidth: true,
      select: true,
    },
    options: NATIONALITYDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "religion",
      label: "Religion",
      fullWidth: true,
      select: true,
    },
    options: RELIGIONDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "immigrationStatus",
      label: "Immigration Status",
      fullWidth: true,
      select: true,
    },
    options: IMMIGRATIONSTATUS,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "disability",
      label: "Disability",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "stateIntrestedInFostering",
      label: "Please state why you are interested in fostering",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "childBehviourWouldNotAccept",
      label:
        "Please tell us of any child behaviour you would not accept ( Example: Stealing)",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "houseHoldDescription",
      label:
        "Please describe your householding your own words (i.e Details of children at home or elsewhere who are likely to be  visiting your home regularly)",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as PlacementPreferenceForm } from "./PlacementPreferenceForm";
