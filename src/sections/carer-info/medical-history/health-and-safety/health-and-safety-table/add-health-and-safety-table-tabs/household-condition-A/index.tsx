import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  inspectionDate: new Date(todayDate),
  nextInspectedDate: new Date(todayDate),

  onFile: false,
  HasPetQuestionnaireCompleted: true,

  isLivingAccomodationSuitableForChildrenOryoungLivingOrProposedToLiveInIt:
    true,
  dateToBeCarriedOutOne: new Date(todayDate),

  improvementsRequireOne: "Text",

  dateOfSocialWorker: new Date(todayDate),
  signatureOfSocialWorker: "Signature",

  nameOfTeamManager: "Brown Cater",
  signatureOfTeamManager: "signature",
  dateOfTeamManager: new Date(todayDate),
};

export const FormSchema = Yup.object().shape({
  inspectionDate: Yup.date().required("Required"),
  nextInspectedDate: Yup.date().required("Date is required"),

  onFile: Yup.string().required("Required"),
  HasPetQuestionnaireCompleted: Yup.string().required("Required"),

  isLivingAccomodationSuitableForChildrenOryoungLivingOrProposedToLiveInIt:
    Yup.string().required("Required"),
  dateToBeCarriedOutOne: Yup.date().required("Required"),

  improvementsRequireOne: Yup.string().required("Required"),

  dateOfSocialWorker: Yup.date().required("Required"),
  signatureOfSocialWorker: Yup.string().required("Required"),

  nameOfTeamManager: Yup.string().required("Required"),
  signatureOfTeamManager: Yup.string().required("Required"),
  dateOfTeamManager: Yup.date().required("Required"),
});

export const summaryAndRecommendationFormData = [
  // {
  //   id: 0.5,
  //   variant: "subtitle2",
  //   heading: "Time scales",
  // },
  {
    id: 1,
    componentProps: {
      name: "inspectionDate",
      label: "Inspection Date",
      multiline: true,
      minRows: 3,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 2,
    componentProps: {
      name: "nextInspectedDate",
      label: "Next Inspection Date",
      multiline: true,
      minRows: 3,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },

  // {
  //   id: 3,
  //   componentProps: {
  //     name: "anyComments",
  //     label: "Any comment about duration of assessment",
  //   },
  //   gridLength: 6,
  //   component: RHFTextField,
  // },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      name: "hasFile",
      label: "Has File",
    },
    component: RHFCheckbox,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "HasPetQuestionnaireCompleted",
      label: "Has pet questionnaire completed ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 4.5,
    variant: "subtitle2",
    heading: `Part 1: General Household Conditions - A`,
  },
  {
    id: 5,
    gridLength: 6,
    componentProps: {
      name: "isLivingAccomodationSuitableForChildrenOryoungLivingOrProposedToLiveInIt",
      label:
        "Is the accomodation suitable for the number of children/young people living or proposed to live in it ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 6,
    componentProps: {
      name: "dateToBeCarriedOutOne",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 7,
    componentProps: {
      name: "improvementsRequireOne",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  //   {
  //     id: 5,
  //     gridLength: 12,
  //     otherOptions: {
  //         name: "response",
  //         label: "Return response",
  //         multiline: true,
  //         minRows: 3,
  //         fullWidth: true,
  //     },
  //     component: RHFTextField,
  // },
  {
    id: 8,
    gridLength: 6,
    componentProps: {
      name: "isThereSufficientSpaceForChildrenToPursueTheirHomework",
      label:
        "Is there sufficient space for the children to pursue their homework ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 8,
    componentProps: {
      name: "signatureOfSocialWorker",
      label: "Signature of social worker completing the report",
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 9,
    componentProps: {
      name: "nameOfTeamManager",
      label: "Name of team manager responsible for the report",
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 10,
    componentProps: {
      name: "signatureOfTeamManager",
      label: "Signature of team manager responsible the report",
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 11,
    componentProps: {
      name: "dateOfTeamManager",
      label: "Date",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
];
