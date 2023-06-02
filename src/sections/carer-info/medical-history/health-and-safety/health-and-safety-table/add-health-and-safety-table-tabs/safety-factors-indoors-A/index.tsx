import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
// const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  generalSafetyFactorsImprovedRequiredIsElecticalEquipmentInGoodRepair: false,
  dateToBeCarriedOutOne: new Date(todayDate),

  improvementsRequireOne: "Text",

  areAccessiblePowerPointsFittedWithChildResistantSafetyCovers: false,
  dateToBeCarriedOutTwo: new Date(todayDate),

  improvementsRequireTwo: "Text",

  areAllHeatingApplianceFixedToWall: false,
  dateToBeCarriedOutThree: new Date(todayDate),

  improvementsRequireThree: "text",

  areFireguardUsed: false,
  dateToBeCarriedOutFour: new Date(todayDate),

  improvementsRequireFour: "text",

  isThereAnEasilyAccesibleAndWorkingFireExtinguisherAndFireBlanket: false,
  dateToBeCarriedOutFive: new Date(todayDate),

  improvementsRequireFive: "text",

  areSmokeDetectorsFittedAndUsed: false,

  dateToBeCarriedOutSix: new Date(todayDate),

  improvementsRequireSix: "text",

  areSocketsOverload: false,
  dateToBeCarriedOutSeven: new Date(todayDate),

  improvementsRequireSeven: "text",

  hasAnElectricianCheckWiringAndSafetyReportIssued: false,

  dateToBeCarriedOutEight: new Date(todayDate),

  improvementsRequireEight: "text",
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

  dateToBeCarriedOutEight: Yup.date().required("Required"),

  improvementsRequireEight: Yup.string().required("Required"),
});

export const safetyFactorsIndoorsA_Data = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `Part 2: General Safety Factors - Indoors A`,
  },

  {
    id: 1,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "generalSafetyFactorsImprovedRequiredIsElecticalEquipmentInGoodRepair",
      label:
        "General safety factors (indoors) Improvements required and date to be carried out. Is electtical equipment in good repair?",
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
      name: "areAccessiblePowerPointsFittedWithChildResistantSafetyCovers",
      label:
        "Are accessible power points fitted with child resistant safety covers?",
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
      name: "areAllHeatingApplianceFixedToWall",
      label: "Are all heating appliances fixed to the wall?",
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
      name: "areFireguardUsed",
      label: "Are fireguards used?",
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
      name: "isThereAnEasilyAccesibleAndWorkingFireExtinguisherAndFireBlanket",
      label:
        "Is there an easily accessible and working Fire Extinguisher and Fire Blanket?",
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
      name: "areSmokeDetectorsFittedAndUsed",
      label: "Are smoke detectors fitted and used?",
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
      name: "areSocketsOverload",
      label: "Are sockets overloaded?",
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
  {
    id: 22,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "hasAnElectricianCheckWiringAndSafetyReportIssued",
      label: "Has an electrician check the wiring and a safety report issued?",
    },
    component: RHFCheckbox,
  },
  {
    id: 23,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOutEight",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 24,
    componentProps: {
      name: "improvementsRequireEight",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
