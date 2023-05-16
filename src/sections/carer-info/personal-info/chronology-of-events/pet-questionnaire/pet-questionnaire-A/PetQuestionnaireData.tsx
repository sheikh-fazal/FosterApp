import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import dayjs from "dayjs";

export const defaultValues = {
  ownerName: "John Doe",
  animalName: "John Doe",
  animalTypes: "John Doe",
  describeAnimals: "Text",
  feedingAnimals: "Text",
};

export const FormSchema = Yup.object().shape({
  ownerName: Yup.string().required("required"),
  animalName: Yup.string().required("required"),
  animalTypes: Yup.string().required("required"),
  describeAnimals: Yup.string().required("required"),
  feedingAnimals: Yup.string().required("required"),
});

export const carerSectionAlphaData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "ownerName",
      label: "Name of Owners",
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "animalName",
      label: "Name of Animals",
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "animalTypes",
      label: "Type of Animals",
    },
    component: RHFTextField,
  },
  {
    id: 4,
    title: "Description",
    otherOptions: {
      name: "describeAnimals",
      label:
        "Describe the Animals include any relavant information about their personality, history and how there were",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 12,
  },
  {
    id: 5,
    title: "Housing and Routines",
    otherOptions: {
      name: "feedingAnimals",
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
export { default as PetQuestionnaireA } from "./PetQuestionnaireA";
