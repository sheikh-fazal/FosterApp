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
import { RHFInputWithLabel } from "../../extensions/RHFInputWithLabel";
import { HEAREDABOUTAGENCY } from "@root/dropdown-data/hearAboutAgency";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";

const todayDate = dayjs().format("MM/DD/YYYY");
const maxAgeCheck = dayjs().subtract(18.1, "year");
const ageOf18Years = maxAgeCheck.format("MM/DD/YYYY");
const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  isJointApplicant: true, //1
  areaOffice: "USD", //2
  dateOfEnquiry: new Date(todayDate), //3
  whereHearAboutOutAgency: "USD", //4
  additionalSourceInformation: "additional Info", //5
  image: null, //6
  title: "USD", //7
  firstName: "Ahmed", //8
  middleName: "MAC", //9
  lastName: "Afzal", //10
  dateOfBirth: new Date(ageOf18Years), //11
  age: "30", //12
  gender: "USD", //13
  ethnicity: "USD", //14
  religion: "USD", //15
  practicingStatus: "USD", //16
  mobileNo: "0011", //17
  email: "abc@yopmail.com", //18
  spareBedrooms: "USD", //19
  permanentResidencyInUk: "No", //20
  outStandingCourtOrders: "No", //21
};

export const FormSchema = Yup.object().shape({
  // isJointApplicant: Yup.boolean().oneOf(
  //   [true],
  //   "Must Accept Joint Application"
  // ),
  areaOffice: Yup.string().required("Area office is required"),
  dateOfEnquiry: Yup.date().required("Date of Enquiry is required"),
  whereHearAboutOutAgency: Yup.string().trim().required("Field is required"),
  additionalSourceInformation: Yup.string().required("Field is required"),
  image: Yup.mixed().required("Photo is is required"),
  // .test(
  //   "fileFormat",
  //   "Unsupported Format",
  //   (value: any) => value && FILE_FORMATS.includes(value.type)
  // )
  // .test(
  //   "fileSize",
  //   `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
  //   (value: any) => value && value.size <= MAX_FILE_SIZE
  // ),
  title: Yup.string().required("Field is required"),
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string().required("Middle name is required"),
  lastName: Yup.string().required("Last name is required"),
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
export const formData = [
  {
    id: 1,
    componentProps: {
      name: "isJointApplicant",
      label: "If Joint Applicant, tick the Checkbox",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 2,
    componentProps: {
      name: "dateOfEnquiry",
      label: "Date Of Enquiry",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "areaOffice",
      label: "Area Office",
      select: true,
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
    component: RHFSelect,
  },
  {
    id: 4,
    component: RHFSelect,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "whereHearAboutOutAgency",
      label: "Where Did you hear about our Agency",
      select: true,
      options: HEAREDABOUTAGENCY,
    },
  },
  {
    id: 5,
    componentProps: {
      fullWidth: true,
      name: "additionalSourceInformation",
      label: "Additional Source Information",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
export const FIRSTAPPLICANTFORMDATA = [
  {
    id: 1,
    componentProps: {
      name: "image",
      label: "Upload Photo",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
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
  },
  {
    id: 3,
    componentProps: {
      name: "firstName",
      label: "First Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "middleName",
      label: "Middle Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 5,
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
      name: "dateOfBirth",
      label: "Date of Birth",
      maxDate: maxAgeCheck.valueOf(),
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 7,
    componentProps: {
      name: "age",
      label: "Age",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "gender",
      label: "Gender",
      select: true,
      options: GENDERDROPDOWNDATA,
    },
  },
  {
    id: 9,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "ethnicity",
      label: "Ethnicity",

      select: true,
      options: ETHNICITYDROPDOWN,
    },
  },
  {
    id: 10,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "religion",
      label: "Religion",
      select: true,
      options: RELIGIONDROPDOWN,
    },
  },
  {
    id: 11,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "practicingStatus",
      label: "Practicing Status",
      select: true,
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
  },
  {
    id: 12,
    componentProps: {
      name: "mobileNo",
      label: "MobileNo",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 13,
    componentProps: {
      name: "email",
      label: "Email",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "spareBedrooms",
      label: "How many spare bedrooms do you have?",
      select: true,
      options: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5+",
          label: "5+",
        },
      ],
    },
  },
  {
    id: 15,
    componentProps: {
      name: "permanentResidencyInUk",
      text: "Do you have permanent residency in UK?",
      Component: RHFRadioGroup,
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },
    gridLength: 12,
    component: RHFInputWithLabel,
  },
  {
    id: 16,
    componentProps: {
      name: "outStandingCourtOrders",
      text: "Have you ever been convicted of any criminal or civil offense? Have you got any cautions or outstanding court orders?",
      Component: RHFRadioGroup,
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },
    gridLength: 12,
    component: RHFInputWithLabel,
  },
];
export { default as FirstApplicant } from "./FirstApplicant";
