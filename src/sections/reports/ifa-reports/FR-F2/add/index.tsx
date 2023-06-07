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
  nameOfFosterCarer: "",
  relationshipToFosterCarer: "",
  positiveAspects: "",
  negativeAspects: "",
  strengthsOFTheFosterCarer: "",
  feelSupported: "",
  anythingElse: "",
  signature: "",
  date: "",
};

export const formSchema = Yup.object().shape({
  name: Yup.string().required("Field is required."),
  nameOfFosterCarer: Yup.string().required("Field is required."),
  relationshipToFosterCarer: Yup.string().required("Field is required."),
  positiveAspects: Yup.string().required("Field is required."),
  negativeAspects: Yup.string().required("Field is required."),
  strengthsOFTheFosterCarer: Yup.string().required("Field is required."),
  feelSupported: Yup.string().required("Field is required."),
  anythingElse: Yup.string().required("Field is required."),
  signature: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
});

export const FRD1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Name",
      name: "name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of foster carer",
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
    gridLength: 6,
    otherOptions: {
      label: "Relationship to foster carer",
      name: "relationshipToFosterCarer",
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
    otherOptions: {
      label:
      "What are the positive aspects of living in the fostering household or supporting a foster carer?",
      name: "positiveAspects",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label:
      "What are the negative aspects of living in the fostering household or supporting a foster carer?",
      name: "negativeAspects",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Please comment on the strengths of the foster carer",
      name: "strengthsOFTheFosterCarer",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "Do you feel adequately supported by the fostering service?",
    otherOptions: {
      name: "feelSupported",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Is there anything else you would like to say?",
      name: "anythingElse",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Signature",
      name: "signature",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];

