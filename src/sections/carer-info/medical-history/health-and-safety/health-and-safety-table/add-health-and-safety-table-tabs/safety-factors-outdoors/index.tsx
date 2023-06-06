import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
// const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  hasTripDeviceFittedToElectricalCircuitToPreventShock: false,
  dateToBeCarriedOutOne: new Date(todayDate),

  improvementsRequireOne: "Text",

  areGardenDiyChemicalsLockedAwayOutOfReach: false,
  dateToBeCarriedOutTwo: new Date(todayDate),

  improvementsRequireTwo: "Text",

  areGardenFencesAndGatesSecureInGoodCondition: false,
  dateToBeCarriedOutThree: new Date(todayDate),

  improvementsRequireThree: "text",

  areSwingsSlidersSecurityFixedAndKEptInGoodCondition: false,
  dateToBeCarriedOutFour: new Date(todayDate),

  improvementsRequireFour: "text",

  areGarageAndShedsLocked: false,
  dateToBeCarriedOutFive: new Date(todayDate),

  improvementsRequireFive: "text",

  areGreenhousesPondsWaterTanksCovered: false,

  dateToBeCarriedOutSix: new Date(todayDate),

  improvementsRequireSix: "text",

  areSandptsHygienicAndCoveredWhenNotInUse: false,
  dateToBeCarriedOutSeven: new Date(todayDate),

  improvementsRequireSeven: "text",

  areThereAnyPossiblePlantsInPropertyOrGarden: false,
  dateToBeCarriedOutEight: new Date(todayDate),

  improvementsRequireEight: "text",

  areCarsFittedWithBBsApprovedRestraints: false,
  dateToBeCarriedOutNine: new Date(todayDate),

  improvementsRequireNine: "text",

  isMotAndInsuranceOnCarUpToDate: false,
  dateToBeCarriedOutTen: new Date(todayDate),

  improvementsRequireTen: "text",

  areCordsHangingFromBlindsWhichCauseHazards: false,
  areYouOrAnyoneInYourHouseholdInPossessionOfGun: false,
  ifYesIsItLicensedToYou: false,

  IfYesWriteLicensedNumberWhereTheGunIsStored: "Text",
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

  dateToBeCarriedOutNine: Yup.date().required("Required"),

  improvementsRequireNine: Yup.string().required("Required"),

  dateToBeCarriedOutTen: Yup.date().required("Required"),

  improvementsRequireTen: Yup.string().required("Required"),

  IfYesWriteLicensedNumberWhereTheGunIsStored:
    Yup.string().required("Required"),
});

export const safetyFactorsOutdoors_Data = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `Part 3: General Safety Factors - Outdoors`,
  },

  {
    id: 1,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "hasTripDeviceFittedToElectricalCircuitToPreventShock",
      label:
        "Has a trip device been fitted to the electrical circuit to prevent fatal shock?",
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
      name: "areGardenDiyChemicalsLockedAwayOutOfReach",
      label:
        "Are garden/DIY equipment/chemicals locked away out of sight and reach?",
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
      name: "areGardenFencesAndGatesSecureInGoodCondition",
      label: "Are garden fences and gates secure and in good condition?",
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
      name: "areSwingsSlidersSecurityFixedAndKEptInGoodCondition",
      label:
        "Are swings, sliders etc security fixed and kept in good condition?",
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
      name: "areGarageAndShedsLocked",
      label: "Are garage and sheds locked?",
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
      name: "areGreenhousesPondsWaterTanksCovered",
      label: "Are greenhouses, ponds, water tanks etc covered or fenced off?",
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
      name: "areSandptsHygienicAndCoveredWhenNotInUse",
      label: "Are sandpits hygienic and covered when not in use?",
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
      name: "areThereAnyPossiblePlantsInPropertyOrGarden",
      label: "Are there any possible plants in the property or garden?",
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

  {
    id: 25,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "areCarsFittedWithBBsApprovedRestraints",
      label:
        "Are cars fitted with BBS approved restraints and carrycot restraints?",
    },
    component: RHFCheckbox,
  },
  {
    id: 26,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOutNine",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 27,
    componentProps: {
      name: "improvementsRequireNine",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 28,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isMotAndInsuranceOnCarUpToDate",
      label: "Is MOT and insurance on car up to date",
    },
    component: RHFCheckbox,
  },
  {
    id: 29,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOutTen",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 30,
    componentProps: {
      name: "improvementsRequireTen",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 31,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "areCordsHangingFromBlindsWhichCauseHazards",
      label: "Are Cords hanging from blinds which could cause a hazards",
    },
    component: RHFCheckbox,
  },
  {
    id: 32,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "areYouOrAnyoneInYourHouseholdInPossessionOfGun",
      label: "Are you or anyone in your household in possession of a gun?",
    },
    component: RHFCheckbox,
  },
  {
    id: 33,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "ifYesIsItLicensedToYou",
      label: "If yes, is it licensed to you?",
    },
    component: RHFCheckbox,
  },
  {
    id: 34,
    componentProps: {
      name: "IfYesWriteLicensedNumberWhereTheGunIsStored",
      label:
        "If yes, please write below licensed number and where the gun is stored",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
