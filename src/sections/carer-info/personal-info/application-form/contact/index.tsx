import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";
import * as Yup from "yup";
// utils

// ----------------------------------------------------------------------

export const defaultValues = {
  address: "",
  addressLine2: "",
  town: "",
  telephone: "",
  county: "",
  country: "",
  postalCode: "",
};

export const FormSchema = Yup.object().shape({
  address: Yup.string()
    .required("Address is required")
    .min(6, "Mininum 6 characters")
    .max(30, "Maximum 30 characters"),
  addressLine2: Yup.string()
    .required("Address is required")
    .min(6, "Mininum 6 characters")
    .max(30, "Maximum 30 characters"),
  town: Yup.string()
    .required("City is required")
    .min(10, "Mininum 10 characters")
    .max(20, "Maximum 20 characters"),
  telephone: Yup.string()
    .required("Telephone is required")
    .min(4, "Mininum 4 characters")
    .max(25, "Maximum 25 characters"),
  county: Yup.string()
    .trim()
    .required("County is required")
    .min(4, "Mininum 4 characters")
    .max(30, "Maximum 30 characters"),
  country: Yup.string()
    .trim()
    .required("Country is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  postalCode: Yup.string()
    .required("Postal Code is required")
    .min(10, "Mininum 10 characters")
    .max(20, "Maximum 20 characters"),
});
export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
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
      name: "addressLine2",
      label: "Address Line 2",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "town", label: "Town/City", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "telephone", label: "Telephone", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "county",
      label: "County",
      fullWidth: true,
      select: true,
    },
    options: COUNTRIESDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "country",
      label: "Country",
      fullWidth: true,
      select: true,
    },
    options: COUNTRIESDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: { name: "postalCode", label: "Postal Code", fullWidth: true },
    component: RHFTextField,
  },
];
export { default as ContactForm } from "./ContactForm";
