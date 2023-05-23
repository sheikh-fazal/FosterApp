import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const carInsuranceData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "registrationNumber",
      label: "Registration Number",
      multiline: false,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "insurerName",
      label: "Insurer Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "policyNumber",
      label: "Policy Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "validDate",
      label: "Valid to Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments",
      multiline: false,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  registrationNumber: "",
  insurerName: "",
  policyNumber: "",
  validDate: new Date(),
  comments: "",
};
export const FormSchema = Yup.object().shape({
  registrationNumber: Yup.string().required("required"),
  insurerName: Yup.string().required("required"),
  policyNumber: Yup.string().required("required"),
  validDate: Yup.date().required("required"),
  comments: Yup.string().required("required"),
});
