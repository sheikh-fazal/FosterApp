import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
// utils

// ----------------------------------------------------------------------

export const defaultValues = {
  relationShipType: "",
  firstName: "",
  middleName: "",
  lastName: "",
  address: "",
  phoneNumber: "",
  email: "",
  childrenTogether: false,
};

export const FormSchema = Yup.object().shape({
  relationShipType: Yup.string().required("Field is required"),
  firstName: Yup.string().required("Field is required"),
  middleName: Yup.string().required("Field is required"),
  lastName: Yup.string().required("Field is required"),
  address: Yup.string()
    .required("Address is required")
    .min(6, "Mininum 6 characters")
    .max(20, "Maximum 10 characters"),
  phoneNumber: Yup.string()
    .required("Telephone is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  childrenTogether: Yup.string().required("Field is required"),
});
export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "relationShipType",
      label: "Relationship Type",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "firstName", label: "First Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "middleName", label: "Middle Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "lastName", label: "Last Name", fullWidth: true },
    component: RHFTextField,
  },
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
    gridLength: 6,
    otherOptions: {
      name: "phoneNumber",
      label: "Phone Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "email", label: "Email", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "childrenTogether",
      label:
        "Duration os relationship including whether you had any children together",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
];
export { default as ExPartners } from "./ExPartners";
