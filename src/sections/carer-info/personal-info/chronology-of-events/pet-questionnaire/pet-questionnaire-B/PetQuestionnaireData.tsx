import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const defaultValues = {
  healthRelation: "Text",
  vaccinations: "Text",
  animalRegistered: "",
  safetyIssues: "Text",
  ownerBorading: "Text",
};

export const FormSchema = Yup.object().shape({
  healthRelation: Yup.string().required("required"),
  vaccinations: Yup.string().required("required"),
  animalRegistered: Yup.string().required("required"),
  safetyIssues: Yup.string().required("required"),
  ownerBorading: Yup.string().required("required"),
});

export const petQuestionnaireData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "healthRelation",
      label:
        "Describe any issue in relation to health and hygiene, and how they will managed",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "vaccinations",
      label:
        "Does the Animals have routine vaccinations and preventative treatment?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    Options: ["yes", "No"],
    otherOptions: {
      name: "animalRegistered",
      label: "Is the animals registered with a vet?",
    },
    component: "RadioGroup",
  },
  {
    id: 4,
    title: "Safety",
    otherOptions: {
      name: "safetyIssues",
      label: "Describe any safety issues and how they will managed",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 12,
  },
  {
    id: 5,
    title: "Breeding/Employement",
    otherOptions: {
      name: "ownerBorading",
      label:
        "Describe where the Animals live within the home, including routines such as feeding and grooming",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 12,
  },
];
export { default as PetQuestionnaireB } from "./PetQuestionnaireB";
