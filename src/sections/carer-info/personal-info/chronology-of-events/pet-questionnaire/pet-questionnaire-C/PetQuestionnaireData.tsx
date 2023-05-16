import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import dayjs from "dayjs";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");

export const defaultValues = {
  workerObservation: "Text",
  animalSignification: "Text",
  foreseableRisks: "Text",
  socialWorker: "Text",
  date: new Date(todayDate),
  signature: "Signature",
};

export const FormSchema = Yup.object().shape({
  workerObservation: Yup.string().required("required"),
  animalSignification: Yup.string().required("required"),
  foreseableRisks: Yup.string().required("required"),
  socialWorker: Yup.string().required("required"),
  date: Yup.date().required("required"),
  signature: Yup.string().required("required"),
});

export const petQuestionnaireData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "workerObservation",
      label:
        "Assessing social worker's observation of the animals during visits to the home, including any comments on behaviour, hygiene or safety",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    title: "Social Worker Summary and Analysis",
    gridLength: 12,
    otherOptions: {
      name: "animalSignification",
      label:
        "Suitable/Signification of the animals in the relation to fostering or adopting",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "foreseableRisks",
      label:
        "When action, if any, needs to be taken to reduce any foreseeable risks?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    otherOptions: {
      name: "socialWorker",
      label: "Name of assessing social worker",
    },
    component: RHFTextField,
    gridLength: 6,
  },
  {
    id: 5,
    otherOptions: {
      name: "date",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    gridLength: 6,
  },
  {
    id: 6,
    otherOptions: {
      name: "signature",
      label: "Signature of assessing social worker",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
  },
];
export { default as PetQuestionnaireC } from "./PetQuestionnaireC";
