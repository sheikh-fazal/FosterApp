import { RHFRadioGroup } from "@root/components/hook-form";
import * as Yup from "yup";

export const defaultValues = {
  parentChildReport: "Yes",
  shortbreakFosteringReport: "Yes",
  permanentFosteringReport: "Yes",
  remandForestingReport: "Yes",
  otherSpecialistReport: "Yes",
};

export const FormSchema = Yup.object().shape({
  parentChildReport: Yup.string().required("Required"),
  shortbreakFosteringReport: Yup.string().required("Required"),
  permanentFosteringReport: Yup.string().required("Required"),
  otherSpecialistReport: Yup.string().required("Required"),
  remandForestingReport: Yup.string().required("Required"),
});
export const SPECIALISTREPORTSFORMDATA = [
  {
    id: 1,
    gridLength: 6,
    heading: "Parent and child report",
    otherOptions: {
      name: "parentChildReport",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    id: 2,
    gridLength: 6,
    heading: "Short break fostering report",
    otherOptions: {
      name: "shortbreakFosteringReport",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    id: 3,
    heading: "Permanent fostering report",
    gridLength: 6,
    otherOptions: {
      name: "permanentFosteringReport",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    id: 4,
    heading: "Remind fostering report",
    gridLength: 6,
    otherOptions: {
      name: "remandForestingReport",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    id: 5,
    heading: "Other specialist scheme report",
    otherOptions: {
      name: "otherSpecialistReport",
      options: ["Yes", "No"],
    },
    gridLength: 6,
    component: RHFRadioGroup,
  },
];

export { default as SpecialistReportsForm } from "./SpecialistReportsForm";
