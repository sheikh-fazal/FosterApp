import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";
import * as Yup from "yup";

export const ActiveSocialWorkerFormData = [
  {
    id: 1,
    componentProps: { name: "phoneNumber", label: "Phone Number:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: { name: "email", label: "Email:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "basicQualification",
      label: "Basic Qualification:",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "startDateOfAssignment",
      label: "Start date of the assignment:",
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
    md: 6,
  },
  {
    id: 5,
    componentProps: { name: "status", label: "Status:", select: true },
    component: RHFSelect,
    md: 6,
    options: COUNTRIESDROPDOWN,
  },
  {
    id: 6,
    componentProps: {
      name: "reportingManager",
      label: "Reporting Manager of the SSW:",
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: COUNTRIESDROPDOWN,
  },
];
export const defaultValues = {
  phoneNumber: "",
  email: "",
  startDateOfAssignment: new Date(),
  status: "",
  reportingManager: "",
};
export const ActiveSocialWorkerFormSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .typeError("Must be a number")
    .min(10, "Invalid Mobile Number")
    .matches(/^\+44\d{10}$/, "Invalid Mobile Number")
    .required("Mobile Number is Required"),
  email: Yup.string().required("Email is Required").email("Invalid Email"),
  startDateOfAssignment: Yup.date().required("To Date is Required"),
  status: Yup.string().trim().required("Comments are Required"),
  reportingManager: Yup.string().trim().required("Comments are Required"),
});
