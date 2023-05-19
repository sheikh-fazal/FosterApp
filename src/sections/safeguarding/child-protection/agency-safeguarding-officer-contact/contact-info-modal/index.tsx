import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

// ================================================================================

export const defaultValues = {
  name: "",
  role: "",
  department: "",
  branch: "",
  businessPhone: "",
  email: "",
  mobile: "",
  company: "",
  address: "",
  postCode: "",
  country: "",
  colorCode: "",
};
 // ===================================================================================
export const FormSchema = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  role: Yup.string().required("Field is required"),
  department: Yup.string().required("Field is required"),
  branch: Yup.string().required("Field is required"),
  businessPhone: Yup.string().required("Field is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  mobile: Yup.string().required('Field is required').matches(/^[0-9]{11}$/, 'Invalid mobile number'),
  company: Yup.string().required("Field is required"),
  address: Yup.string().required("Field is required"),
  postCode: Yup.string().required("Field is required"),
  country: Yup.string().required("Field is required"),
  colorCode: Yup.string().required("Field is required"),
});

export const formData = [
  {
    gridLength: 6,
    title: "Name",
    fontWeight: 600,
    otherOptions: { name: "name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Role",
    otherOptions: {
      name: "role",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    title: "Department",
    otherOptions: { name: "department", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Branch",
    otherOptions: {
      name: "branch",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    title: "Business Phone",
    fontWeight: 600,
    otherOptions: { name: "businessPhone", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Email",
    fontWeight: 600,
    otherOptions: { name: "email", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Mobile",
    fontWeight: 600,
    otherOptions: { name: "mobile", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Company",
    fontWeight: 600,
    otherOptions: { name: "company", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Address",
    fontWeight: 600,
    otherOptions: {
      name: "address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Post Code",
    fontWeight: 600,
    otherOptions: { name: "postCode", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Country",
    otherOptions: {
      name: "country",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    title: "Color Code",
    fontWeight: 600,
    otherOptions: { name: "colorCode", fullWidth: true, type: "color"},
    component: RHFTextField,
  },
];


