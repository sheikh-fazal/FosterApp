import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import dayjs from "dayjs";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");

export const defaultValues = {
  petsInformation: true,
  childrenPets: true,
  comments: "Text",
  applicantSignature: "Signture",
  applicantSignatureTwo: "Signature",
  startDate: new Date(todayDate),
  endDate: new Date(todayDate),
};

export const FormSchema = Yup.object().shape({
  petsInformation: Yup.boolean().required("required"),
  childrenPets: Yup.boolean().required("required"),
  comments: Yup.string().required("required"),
  applicantSignature: Yup.string().required("required"),
  applicantSignatureTwo: Yup.string().required("required"),
  startDate: Yup.date().required("required"),
  endDate: Yup.date().required("required"),
});

export const petQuestionnaireData = [
  {
    id: 1,
    otherOptions: {
      name: "petsInformation",
      label:
        "The Information provided above is factuallu correct and i/we have sgared fully and honestly all relavant information regarding our pets",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 2,
    otherOptions: {
      name: "childrenPets",
      label:
        "I/We undertake to provide any necessary activity to minimise the risks of harm to the child or children and pets",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },

  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Any Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "applicantSignature",
      label: "Signature of Applicant/Foster Carer 1",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "applicantSignatureTwo",
      label: "Signature of Applicant/Foster Carer 2",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    otherOptions: {
      name: "startDate",
      label: "Start Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    gridLength: 6,
  },
  {
    id: 7,
    otherOptions: {
      name: "endDate",
      label: "End Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    gridLength: 6,
  },
];
export { default as PetQuestionnaireD } from "./PetQuestionnaireD";
