import {
  RHFCheckbox,
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { fDate } from "@root/utils/formatTime";
import dayjs from "dayjs";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";
import { RHFInputWithLabel } from "@root/sections/enquiry-stage/extensions/RHFInputWithLabel";
import { HEAREDABOUTAGENCY } from "@root/dropdown-data/hearAboutAgency";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";

const todayDate = dayjs().format("MM/DD/YYYY");
const maxAgeCheck = dayjs().subtract(18.1, "year");
const ageOf18Years = maxAgeCheck.format("MM/DD/YYYY");
const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  title: "USD",
  firstName: "Ahmed",
  middleName: "MAC",
  lastName: "Afzal",
  dateOfBirth: new Date(ageOf18Years),
  dateOfEnquiry: new Date(todayDate),
  gender: "Male",
};

export const FormSchema = Yup.object().shape({
  title: Yup.string().required("Field is required"),
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string().required("Middle name is required"),
  lastName: Yup.string().required("Last name is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  gender: Yup.string().required("Field is required"),
});

export const SUBSTITUTECARERFORMDATA = [
  {
    id: 1,
    componentProps: {
      name: "title",
      label: "Title",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
      {
        value: "BTC",
        label: "฿",
      },
      {
        value: "JPY",
        label: "¥",
      },
    ],
  },
  {
    id: 2,
    componentProps: {
      name: "firstName",
      label: "First Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 3,
    componentProps: {
      name: "middleName",
      label: "Middle Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "lastName",
      label: "Last Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 5,
    componentProps: {
      name: "dateOfBirth",
      label: "Date Of Birth",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 6,
    componentProps: {
      name: "gender",
      label: "Gender",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: GENDERDROPDOWNDATA,
  },
  // {
  //   id: 6,
  //   componentProps: {
  //     name: "mainCarerAbleToGiveUpwork",
  //     label: "Is the main carer able to give up work:",
  //     select: true,
  //     fullWidth: true,
  //   },
  //   component: RHFSelect,
  //   gridLength: 6,
  //   options: [
  //     {
  //       value: "USD",
  //       label: "$",
  //     },
  //     {
  //       value: "EUR",
  //       label: "€",
  //     },
  //     {
  //       value: "BTC",
  //       label: "฿",
  //     },
  //     {
  //       value: "JPY",
  //       label: "¥",
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   componentProps: {
  //     name: "anyCurrentOrPreviousMedicalConditions",
  //     label: "Any current or previous medical conditions",
  //   },
  //   gridLength: 6,
  //   component: RHFCheckbox,
  // },
  // {
  //   id: 8,
  //   componentProps: {
  //     name: "IHVcriteria",
  //     text: "Does this enquiry meet the criteria for IHV:",
  //     Component: RHFRadioGroup,
  //     options: [true, false],
  //     getOptionLabel: ["Yes", "No"],
  //   },
  //   gridLength: 12,
  //   component: RHFInputWithLabel,
  // },

  // {
  //   id: 9,
  //   componentProps: {
  //     name: "IHV",
  //     label: "If yes , who will complete the IHV?",
  //     multiline: true,
  //     minRows: 3,
  //     fullWidth: true,
  //   },
  //   gridLength: 6,
  //   component: RHFTextField,
  // },
  // {
  //   id: 10,
  //   componentProps: {
  //     name: "counselledOutDetails",
  //     label: "Counselled Out reason Details:",
  //     multiline: true,
  //     minRows: 3,
  //     fullWidth: true,
  //   },
  //   component: RHFTextField,
  //   gridLength: 6,
  // },
  // {
  //   id: 11,
  //   componentProps: {
  //     name: "relevantExperience",
  //     label: "Relevant Experience:",
  //     multiline: true,
  //     minRows: 3,
  //     fullWidth: true,
  //   },
  //   gridLength: 6,
  //   component: RHFTextField,
  // },
];
export { default as SubstituteCarerForm } from "./SubstituteCarerForm";
