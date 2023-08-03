import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
// const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  inspectionDate: new Date(todayDate),
  nextInspectedDate: new Date(todayDate),

  onFile: false,
  HasPetQuestionnaireCompleted: true,

  isLivingAccomodationSuitableForChildrenOryoungLivingOrProposedToLiveInIt:
    true,
  dateToBeCarriedOutOne: new Date(todayDate),

  improvementsRequireOne: "Text",

  isThereSufficientSpaceForChildrenToPursueTheirHomework: false,
  dateToBeCarriedOutTwo: new Date(todayDate),

  improvementsRequireTwo: "text",

  doRoomsHaveSufficientLightToReadAndPlayBy: false,
  dateToBeCarriedOutThree: new Date(todayDate),

  improvementsRequireThree: "text",

  doAllRoomsHaveAnOpeningWindows: false,
  dateToBeCarriedOutFour: new Date(todayDate),

  improvementsRequireFour: "text",

  areAllRoomsMaintainableAtReasonableTemprature: false,
  dateToBeCarriedOutFive: new Date(todayDate),

  improvementsRequireFive: "text",

  isChildOwnBed: false,

  dateToBeCarriedOutSix: new Date(todayDate),

  improvementsRequireSix: "text",
};

export const FormSchema = Yup.object().shape({
  inspectionDate: Yup.date().required("Required"),
  nextInspectedDate: Yup.date().required("Date is required"),

  dateToBeCarriedOutOne: Yup.date().required("Required"),

  improvementsRequireOne: Yup.string().required("Required"),

  dateToBeCarriedOutTwo: Yup.date().required("Required"),

  improvementsRequireTwo: Yup.string().required("Required"),

  dateToBeCarriedOutThree: Yup.date().required("Required"),

  improvementsRequireThree: Yup.string().required("Required"),

  dateToBeCarriedOutFour: Yup.date().required("Required"),

  improvementsRequireFour: Yup.string().required("Required"),

  dateToBeCarriedOutFive: Yup.date().required("Required"),

  improvementsRequireFive: Yup.string().required("Required"),

  dateToBeCarriedOutSix: Yup.date().required("Required"),

  improvementsRequireSix: Yup.string().required("Required"),
});

export const householdConditionA_Data = [
  {
    id: 1,
    componentProps: {
      name: "inspectionDate",
      fullWidth: true,
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
      fullWidth: true,
      minRows: 3,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "onFile",
      label: "On File",
    },
    component: RHFCheckbox,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
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
      fullWidth: true,
      name: "isLivingAccomodationSuitableForChildrenOryoungLivingOrProposedToLiveInIt",
      label:
        "Is the accomodation suitable for the number of children/young people living or proposed to live in it ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 6,
    componentProps: {
      fullWidth: true,
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
  {
    id: 8,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isThereSufficientSpaceForChildrenToPursueTheirHomework",
      label:
        "Is there sufficient space for the children to pursue their homework ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 9,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOutTwo",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },

  {
    id: 10,
    componentProps: {
      name: "improvementsRequireTwo",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 11,
    gridLength: 6,
    componentProps: {
      name: "doRoomsHaveSufficientLightToReadAndPlayBy",
      label: "Do rooms have sufficient light to read and play by ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 12,
    componentProps: {
      name: "dateToBeCarriedOutThree",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 13,
    componentProps: {
      name: "improvementsRequireThree",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 6,
    componentProps: {
      name: "doAllRoomsHaveAnOpeningWindows",
      label: "Do all rooms have an opening windows?",
    },
    component: RHFCheckbox,
  },
  {
    id: 15,
    componentProps: {
      name: "dateToBeCarriedOutFour",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 16,
    componentProps: {
      name: "improvementsRequireFour",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 17,
    gridLength: 6,
    componentProps: {
      name: "areAllRoomsMaintainableAtReasonableTemprature",
      label: "Are all rooms maintainable at reasonable temprature ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 18,
    componentProps: {
      name: "dateToBeCarriedOutFive",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 19,
    componentProps: {
      name: "improvementsRequireFive",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 20,
    gridLength: 6,
    componentProps: {
      name: "isChildOwnBed",
      label: "Will the child/young person his/her own bed/cot ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 21,
    componentProps: {
      name: "dateToBeCarriedOutSix",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 22,
    componentProps: {
      name: "improvementsRequireSix",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
