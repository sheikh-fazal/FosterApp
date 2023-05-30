import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
// const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  kitchenAreFlexesShortAndOutOfReach: false,
  dateToBeCarriedOutOne: new Date(todayDate),

  improvementsRequireOne: "Text",

  areChestFreezersKeptLocked: false,
  dateToBeCarriedOutTwo: new Date(todayDate),

  improvementsRequireTwo: "Text",

  areKnivesAndOtherUtensilsKeptOutOfReach: false,
  dateToBeCarriedOutThree: new Date(todayDate),

  improvementsRequireThree: "text",

  isACookerGuardFitted: false,
  dateToBeCarriedOutFour: new Date(todayDate),

  improvementsRequireFour: "text",

  areKitchenWorkSurfacesAndFlooringUndamagedAndKeptClean: false,
  dateToBeCarriedOutFive: new Date(todayDate),

  improvementsRequireFive: "text",

  areFoodsApproriatelyStoredAndFridgeKeptAtCorrectTemprature: false,

  dateToBeCarriedOutSix: new Date(todayDate),

  improvementsRequireSix: "text",

  arePoisonousSubstancesStoredInTheirOriginalContainers: false,
  dateToBeCarriedOutSeven: new Date(todayDate),

  improvementsRequireSeven: "text",
};

export const FormSchema = Yup.object().shape({
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

  dateToBeCarriedOutSeven: Yup.date().required("Required"),

  improvementsRequireSeven: Yup.string().required("Required"),
});

export const safetyFactorsIndoorsD_Data = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `General Safety Factors - Indoors D`,
  },

  {
    id: 1,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "kitchenAreFlexesShortAndOutOfReach",
      label: "Kitchen Are flexes short and out of reach?",
    },
    component: RHFCheckbox,
  },
  {
    id: 2,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOutOne",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
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
    id: 4,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "areChestFreezersKeptLocked",
      label: "Are chest freezers kept locked?",
    },
    component: RHFCheckbox,
  },
  {
    id: 5,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOutTwo",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 6,
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
    id: 7,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "areKnivesAndOtherUtensilsKeptOutOfReach",
      label: "Are knives and other utensils kept out of reach?",
    },
    component: RHFCheckbox,
  },
  {
    id: 8,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOutThree",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 9,
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
    id: 10,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isACookerGuardFitted",
      label: "Is A cooker guard fitted?",
    },
    component: RHFCheckbox,
  },
  {
    id: 11,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOutFour",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 12,
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
    id: 13,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "areKitchenWorkSurfacesAndFlooringUndamagedAndKeptClean",
      label: "Are kitchen work surfaces and flooring undamaged and kept clean?",
    },
    component: RHFCheckbox,
  },
  {
    id: 14,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOutFive",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 15,
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
    id: 16,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "areFoodsApproriatelyStoredAndFridgeKeptAtCorrectTemprature",
      label:
        "Are foods appropriately stored and the fridge kept at correct temprature?",
    },
    component: RHFCheckbox,
  },

  {
    id: 17,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOutSix",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },

  {
    id: 18,
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
  {
    id: 19,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "arePoisonousSubstancesStoredInTheirOriginalContainers",
      label: "Are bleach, poisonous substances, matches etc, stored in their original containers out of reach of small children?",
    },
    component: RHFCheckbox,
  },
  {
    id: 20,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOutSeven",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 21,
    componentProps: {
      name: "improvementsRequireSeven",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
