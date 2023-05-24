import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";
import dayjs from "dayjs";

import * as Yup from "yup";

const todayDate = dayjs().format("DD/MM/YYYY");
const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");

export const FormValues = {
  dateOfVisit: new Date(),
  nameOfAgencyWorkingVisiting: "",
  title: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: new Date(ageOf18Years),
  gender: "",
  address: "",
  addressLine2: "",
  city: "",
  mobilePhone: "",
  email: "",
  county: "",
  country: "",
  postalCode: "",
  maritalStatus: "",
  ethnicity: "",
  offSetEthnicity: "",
  nationalInsuranceNo: "",
  religion: "",
  practising: "",
  countryWhereBorn: "",
  howLongLiveInLocalArea: "",
  detailsOfPreviousMarriages: "",
  convictedOfAnyCriminal: "",
};

export const defaultValuesPrimaryCarer = (data: any) => {
  console.log(data);
  return {
    dateOfVisit: new Date(data?.dateOfVisit) || "",
    nameOfAgencyWorkingVisiting: data?.nameOfAgencyWorkingVisiting,
    title: data?.title,
    firstName: data?.firstName || "",
    middleName: data?.middleName,
    lastName: data?.lastName,
    dateOfBirth: new Date(data?.dateOfBirth),
    gender: data?.gender,
    address: data?.address,
    addressLine2: data?.addressLine2,
    city: data?.city,
    mobilePhone: data?.mobilePhone,
    email: data?.email,
    county: data?.county,
    country: data?.country,
    postalCode: data?.postalCode,
    maritalStatus: data?.maritalStatus,
    ethnicity: data?.ethnicity,
    offSetEthnicity: data?.offSetEthnicity,
    nationalInsuranceNo: data?.nationalInsuranceNo,
    religion: data?.religion,
    practising: data?.practising,
    countryWhereBorn: data?.countryWhereBorn,
    howLongLiveInLocalArea: data?.howLongLiveInLocalArea,
    detailsOfPreviousMarriages: data?.detailsOfPreviousMarriages,
    convictedOfAnyCriminal: data?.convictedOfAnyCriminal,
  };
};

export const FormSchema = Yup.object().shape({
  dateOfVisit: Yup.date()
    .typeError("Date of visit is required")
    .required("Date of visit is required"),
  nameOfAgencyWorkingVisiting: Yup.string()
    .required("Agency is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  title: Yup.string().required("title is required"),
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "Mininum 2 characters")
    .max(50, "Maximum 50 characters"),
  middleName: Yup.string()
    .required("Middle name is required")
    .min(2, "Mininum 2 characters")
    .max(50, "Maximum 50 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Mininum 2 characters")
    .max(50, "Maximum 50 characters"),
  dateOfBirth: Yup.date()
    .typeError("Date of birth is required")
    .required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string()
    .required("Address line 1 is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  addressLine2: Yup.string()
    .required("Address line 2 is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  city: Yup.string()
    .required("town is required")
    // .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  mobilePhone: Yup.string()
    .required("mobile is required")
    // .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  county: Yup.string().required("County is required"),
  country: Yup.string().required("Country is required"),
  postalCode: Yup.string()
    .required("Postal code is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  maritalStatus: Yup.string().required("Marital status is required"),
  ethnicity: Yup.string().required("Ethnicity is required"),
  offSetEthnicity: Yup.string().required("Offset ethnicity is required"),
  religion: Yup.string().required("Religion is required"),
  nationalInsuranceNo: Yup.string().required(
    "National insurance no is required"
  ),
  practising: Yup.string().required("Practising is required"),
  convictedOfAnyCriminal: Yup.string().required(
    "Conviction knowledge is required"
  ),
  countryWhereBorn: Yup.string().required("Country where born is required"),
  howLongLiveInLocalArea: Yup.string().required(
    "Local area life span is required"
  ),
  detailsOfPreviousMarriages: Yup.string()
    .required("Previous marriages knowledge is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
});

export const fieldsInfo = [
  {
    type: "date",
    name: "dateOfVisit",
    label: "Date Of Visit",
  },
  {
    type: "text",
    name: "nameOfAgencyWorkingVisiting",
    label: "Name of Agency working visitng",
  },
  {
    heading: "Personal Details",
  },
  {
    type: "select",
    name: "title",
    label: "Title",
    select: true,
    options: [
      {
        value: "Mr",
        label: "Mr",
      },
      { value: "Mrs", label: "Mrs" },
      { value: "Miss", label: "Miss" },
      { value: "Ms", label: "Ms" },
      { value: "Dr", label: "Dr" },
      { value: "Dame", label: "Dame" },
    ],
  },
  {
    type: "text",
    name: "firstName",
    label: "First Name",
  },
  {
    type: "text",
    name: "middleName",
    label: "Middle Name",
  },
  {
    type: "text",
    name: "lastName",
    label: "Last Name",
  },
  {
    type: "date",
    name: "dateOfBirth",
    label: "Date Of Birth",
    disableFuture: true,
    maxDate: new Date(ageOf18Years),
  },
  {
    type: "select",
    name: "gender",
    label: "Gender",
    select: true,
    options: GENDERDROPDOWNDATA,
  },
  {
    heading: "Contact Details",
  },
  {
    type: "textarea",
    name: "address",
    label: "Address",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "addressLine2",
    label: "Address Line 2",
    gridSize: { xs: 12 },
  },
  {
    type: "text",
    name: "city",
    label: "Town/City",
  },
  {
    type: "text",
    name: "mobilePhone",
    label: "Mobile Phone",
  },
  {
    type: "email",
    name: "email",
    label: "Email",
  },
  {
    type: "select",
    name: "county",
    label: "County",
    select: true,
    options: [
      {
        value: "pakistan",
        label: "Pakistan",
      },
    ],
  },
  {
    type: "select",
    name: "country",
    label: "Country",
    select: true,
    options: [
      {
        value: "pakistan",
        label: "Pakistan",
      },
    ],
  },
  {
    type: "text",
    name: "postalCode",
    label: "Postal Code",
  },
  {
    type: "select",
    name: "maritalStatus",
    label: "Marital Status",
    select: true,
    options: [
      {
        value: "single",
        label: "Single",
      },
    ],
  },
  {
    type: "select",
    name: "ethnicity",
    label: "Ethnicity",
    select: true,
    options: ETHNICITYDROPDOWN,
  },
  {
    type: "select",
    name: "offSetEthnicity",
    label: "Offset Ethnicity",
    select: true,

    options: ETHNICITYDROPDOWN,
  },
  {
    type: "select",
    name: "religion",
    label: "Religion",
    select: true,
    options: RELIGIONDROPDOWN,
  },
  {
    type: "text",
    name: "nationalInsuranceNo",
    label: "National Insurance NO",
  },
  {
    type: "radio",
    name: "practising",
    label: "Practising",
    options: [true, false],
    getOptionLabel: ["Yes", "No"],
  },
  {
    type: "select",
    name: "countryWhereBorn",
    label: "What Country was Primary Carer Born in?",
    select: true,
    options: [
      {
        value: "single",
        label: "Single",
      },
    ],
  },
  {
    type: "text",
    name: "howLongLiveInLocalArea",
    label: "How Long have they lived in the local area?",
  },
  {
    type: "textarea",
    name: "detailsOfPreviousMarriages",
    label:
      "Detail of previous marriages/civil partnerships/relationships where you have lives together?",
    gridSize: { xs: 12 },
  },
  {
    type: "radio",
    name: "convictedOfAnyCriminal",
    label:
      "Have you ever been convicted of any criminal or civil offense? Have you got any cautions or outstanding court orders?",
    options: [true, false],
    getOptionLabel: ["Yes", "No"],
    gridSize: { xs: 12 },
  },
];
