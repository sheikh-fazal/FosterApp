import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";
// utils

// ----------------------------------------------------------------------

export const defaultValues = {
  employerType: "Current",
  companyName: "",
  address: "",
  durationOfEmploymentAndPost: "",
  phone: "",
  contactName: "",
  noticePeriod: "",
  disciplinaryCareer: "",
  suitableDateReferenceSent: new Date(),
  email: "",
};

export const FormSchema = Yup.object().shape({
  companyName: Yup.string().required("Field is required"),
  durationOfEmploymentAndPost: Yup.string().required("Field is required"),
  address: Yup.string()
    .required("Field is required")
    .min(6, "Mininum 6 characters")
    .max(20, "Maximum 10 characters"),
  phone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  contactName: Yup.string().required("Field is required"),
  noticePeriod: Yup.string().required("Field is required"),
  disciplinaryCareer: Yup.string().required("Field is required"),
  suitableDateReferenceSent: Yup.date().required("Field is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
});
export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      defaultValue: "Current",
      label: "Type?",
      name: "employerType",
      options: ["Current", "Previous"],
      fullWidth: true,
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "companyName",
      label: "Company Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "address", label: "Address", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "durationOfEmploymentAndPost",
      label: "Duration of Employment and Post",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "phone",
      label: "Phone",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "contactName",
      label: "Contact Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "noticePeriod",
      label: "Notice Period",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "disciplinaryCareer",
      label: "Disciplinary In Career",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "suitableDateReferenceSent",
      label: "Suitable Date for your Reference to be sent",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: { name: "email", label: "Email", fullWidth: true },
    component: RHFTextField,
  },
];
export { default as Employers } from "./Employers";
