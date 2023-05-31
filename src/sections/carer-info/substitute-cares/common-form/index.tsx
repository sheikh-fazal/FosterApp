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
  dateOfEnquiry: new Date(todayDate),
  whereHearAboutOutAgency: "USD",
  additionalSourceInformation: "additional Info",
  image: null,
  dateOfBirth: new Date(ageOf18Years),
  age: "30",
  gender: "USD",
  ethnicity: "USD",
  religion: "USD",
  practicingStatus: "USD",
  mobileNo: "0011",
  email: "abc@yopmail.com",
  spareBedrooms: "USD",
  permanentResidencyInUk: "No",
  outStandingCourtOrders: "No",
};

export const FormSchema = Yup.object().shape({
  title: Yup.string().required("Area office is required"),
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string().required("Middle name is required"),
  lastName: Yup.string().required("Last name is required"),
  dateOfEnquiry: Yup.date().required("Date of Enquiry is required"),
  whereHearAboutOutAgency: Yup.string().trim().required("Field is required"),
  additionalSourceInformation: Yup.string().required("Field is required"),
  image: Yup.mixed().required("Photo is is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  age: Yup.number()
    .typeError("Age is required")
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer()
    .moreThan(18, "Age must be greater than or equal to 18")
    .lessThan(120, "Age must be less than or equal to 120"),
  gender: Yup.string().required("Field is required"),
  ethnicity: Yup.string().required("Field is required"),
  religion: Yup.string().required("Field is required"),
  practicingStatus: Yup.string().required("Field is required"),
  mobileNo: Yup.string().required("Field is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  spareBedrooms: Yup.string().required("Field is required"),
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
    id: 6,
    componentProps: {
      name: "mainCarerAbleToGiveUpwork",
      label: "Is the main carer able to give up work:",
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
    id: 7,
    componentProps: {
      name: "anyCurrentOrPreviousMedicalConditions",
      label: "Any current or previous medical conditions",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 8,
    componentProps: {
      name: "IHVcriteria",
      text: "Does this enquiry meet the criteria for IHV:",
      Component: RHFRadioGroup,
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },
    gridLength: 12,
    component: RHFInputWithLabel,
  },
  // {
  //   id: 7.5,
  //   gridLength: 12,
  // },
  {
    id: 9,
    componentProps: {
      name: "IHV",
      label: "If yes , who will complete the IHV?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 10,
    componentProps: {
      name: "counselledOutDetails",
      label: "Counselled Out reason Details:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "relevantExperience",
      label: "Relevant Experience:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
];
export { default as SubstituteCarerForm } from "./SubstituteCarerForm";
