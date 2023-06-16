import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
// const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  areGasFiresAndWaterHeatersServicedAnnually: false,
  dateToBeCarriedOutOne: new Date(todayDate),

  improvementsRequireOne: "Text",

  areAllLargeAreasOfGlassFittedWithSafetyGlass: false,
  dateToBeCarriedOutTwo: new Date(todayDate),

  improvementsRequireTwo: "Text",

  areThereAnyLooseOrUnevenFloorCovering: false,
  dateToBeCarriedOutThree: new Date(todayDate),

  improvementsRequireThree: "text",

  doSoftFurnishingsConfirmToBritishStandards: false,
  dateToBeCarriedOutFour: new Date(todayDate),

  improvementsRequireFour: "text",

  areYouCommittedToEnsuringsThatNewFurnitureConfirmsToBritishStandards: false,
  dateToBeCarriedOutFive: new Date(todayDate),

  improvementsRequireFive: "text",

  isFurnitureSave: false,

  dateToBeCarriedOutSix: new Date(todayDate),

  improvementsRequireSix: "text",

  doWindowsGaveLocks: false,
  dateToBeCarriedOutSeven: new Date(todayDate),

  improvementsRequireSeven: "text",

  areAllWindowsAndDoorsKeysEasilyAvailableInTheEventOfFire: false,

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

export const safetyFactorsIndoorsB_Data = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `General Safety Factors - Indoors B`,
  },

  {
    id: 1,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "areGasFiresAndWaterHeatersServicedAnnually",
      label:
        "Are gas fires and gas water heaters serviced annually?",
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
      name: "areAllLargeAreasOfGlassFittedWithSafetyGlass",
      label:
        "Are all large areas of glass fitted with safety glass?",
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
      name: "areThereAnyLooseOrUnevenFloorCovering",
      label: "Are there any loose or uneven floor coverings?",
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
      name: "doSoftFurnishingsConfirmToBritishStandards",
      label: "Do soft furnishings confirm to British Standard BS:5852:2006?",
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
      name: "areYouCommittedToEnsuringsThatNewFurnitureConfirmsToBritishStandards",
      label:
        "Are you committed to ensurings that any new furniture confirms to the British Standards?",
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
      name: "isFurnitureSave",
      label: "Is furniture save?",
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
      name: "doWindowsGaveLocks",
      label: "Do windows have locks/restrictors?",
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
      name: "areAllWindowsAndDoorsKeysEasilyAvailableInTheEventOfFire",
      label: "Are all windows and door keys easily available in the event of a fire?",
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
