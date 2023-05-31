import SignaturePad from "@root/components/SignaturePad";
import {
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  name: "",
  nameOfChild: "",
  relationshipToChild: "",
  nameOfFosterCarer: "",
  whatFosterCarerHasDone: "",
  whatFosterCarerHasDoneBetter: "",
  informationAboutComplaint: "",
  anythingElse: "",
  signature: "",
  date: "",
};

export const formSchema = Yup.object().shape({
  name: Yup.string().required("Field is required."),
  nameOfChild: Yup.string().required("Field is required."),
  relationshipToChild: Yup.string().required("Field is required."),
  nameOfFosterCarer: Yup.string().required("Field is required."),
  whatFosterCarerHasDone: Yup.string().required("Field is required."),
  whatFosterCarerHasDoneBetter: Yup.string().required("Field is required."),
  informationAboutComplaint: Yup.string().required("Field is required."),
  anythingElse: Yup.string().required("Field is required."),
  signature: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
});

export const FRD1FormData = [
  {
    gridLength: 6,
    title: "Name",
    otherOptions: {
      name: "name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Name of Child",
    otherOptions: {
      name: "nameOfChild",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    title: "Relationship to Child",
    otherOptions: {
      name: "relationshipToChild",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    title: "Name of Foster Carer",
    otherOptions: {
      name: "nameOfFosterCarer",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 12,
    title:
      "What has been the foster carer done well in caring for your child/children?",
    otherOptions: {
      name: "whatFosterCarerHasDone",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "What could the foster carer have done better in caring for your child/children?",
    otherOptions: {
      name: "whatFosterCarerHasDoneBetter",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title:
      "Have you been provided with information about how to make a complaint, if you want to?",
    otherOptions: {
      name: "informationAboutComplaint",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    title: "Is there anything else you would like to say?",
    otherOptions: {
      name: "anythingElse",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Signature",
    otherOptions: {
      name: "signature",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    title: "Date",
    otherOptions: {
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];

