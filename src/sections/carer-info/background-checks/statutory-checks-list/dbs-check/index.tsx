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
      name: "isEnhancedDbs",
      label: "Is Enhanced DBS",
    },
    component: RHFCheckbox,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "inProcess",
      label: "In Progress",
    },
    component: RHFCheckbox,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "sentToCarerDate",
      label: "Sent To Carer Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "receivedFromCarerDate",
      label: "Received From Carer Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "sentToDbsDate",
      label: "Sent To DBS Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "receivedFromDbsDate",
      label: "Received From DBS Check",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
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
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "renewFromDbsDate",
      label: "Renew From DBS Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
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
      name: "subscribeToUpdateService",
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

export const formatters: any = {};

for (const formControl of carInsuranceData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  isEnhancedDbs: false,
  inProcess: false,
  sentToCarerDate: new Date(),
  receivedFromCarerDate: new Date(),
  sentToDbsDate: new Date(),
  receivedFromDbsDate: new Date(),
  disclosureNumber: "",
  disclosureDate: new Date(),
  renewFromDbsDate: new Date(),
  result: "",
  subscribeToUpdateService: false,
  comments: "",
};
export const formSchema = Yup.object().shape({
  isEnhancedDbs: Yup.boolean(),
  inProcess: Yup.boolean(),
  sentToCarerDate: Yup.date(),
  receivedFromCarerDate: Yup.date(),
  sentToDbsDate: Yup.date(),
  receivedFromDbsDate: Yup.date(),
  disclosureNumber: Yup.string(),
  disclosureDate: Yup.date(),
  renewFromDbsDate: Yup.date(),
  result: Yup.string(),
  subscribeToUpdateService: Yup.boolean(),
  comments: Yup.string(),
});
