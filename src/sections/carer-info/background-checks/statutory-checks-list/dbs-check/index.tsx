import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const carInsuranceData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "enhancedDbs",
      label: "Is Enhanced DBS",
    },
    component: RHFCheckbox,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "inProgress",
      label: "In Progress",
    },
    component: RHFCheckbox,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "sentCarerDate",
      label: "Sent To Carer Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "receivedCarerDate",
      label: "Received From Carer Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "sentDbsDate",
      label: "Sent To DBS Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "recieveDbsDate",
      label: "Received From DBS Check",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "disclosureNumber",
      label: "Disclosure Number:",
      multiline: false,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "disclosureDate",
      label: "Disclose Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "renewDbsDate",
      label: "Renew From DBS Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "result",
      label: "Result:",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: 0, label: 0 },
      { value: 1, label: 1 },
    ],
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 6,
    Options: [true, false],
    otherOptions: {
      name: "updateService",
      label: "Subscribe To Update Service:",
    },
    component: "RadioGroup",
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "comments::",
      multiline: true,
      rows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  enhancedDbs: "",
  inProgress: "",
  sentCarerDate: new Date(),
  receivedCarerDate: new Date(),
  sentDbsDate: new Date(),
  recieveDbsDate: new Date(),
  disclosureNumber: "",
  disclosureDate: new Date(),
  renewDbsDate: new Date(),
  result: "",
  updateService: false,
  comments: "",
};
export const FormSchema = Yup.object().shape({
  enhancedDbs: Yup.string().required("required"),
  inProgress: Yup.string().required("required"),
  sentCarerDate: Yup.date().required("required"),
  receivedCarerDate: Yup.date().required("required"),
  sentDbsDate: Yup.date().required("required"),
  recieveDbsDate: Yup.date().required("required"),
  disclosureNumber: Yup.string().required("required"),
  disclosureDate: Yup.date().required("required"),
  renewDbsDate: Yup.date().required("required"),
  result: Yup.string().required("required"),
  updateService: Yup.boolean().required("required"),
  comments: Yup.string().required("required"),
});
