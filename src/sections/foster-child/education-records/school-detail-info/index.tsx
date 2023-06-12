
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";
import * as Yup from "yup";

export const SchoolDeatilInfoFormData = [
  {
    id: 1,
    componentProps: { name: "schoolName", label: "School Name:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: { name: "buildingNo", label: "Building Name/No:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: { name: "street", label: "Street:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "city",
      label: "City:",
      select: true,
    },
    options: COUNTRIESDROPDOWN,
  },
  {
    id: 5,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "county",
      label: "County:",
      select: true,
    },
    options: COUNTRIESDROPDOWN,
  },
  {
    id: 6,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "country",
      label: "Country:",
      select: true,
    },
    options: COUNTRIESDROPDOWN,
  },
  {
    id: 7,
    componentProps: { name: "postalCode", label: "Postal Code:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 8,
    componentProps: { name: "telephoneNumber", label: "Phone:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 9,
    componentProps: { name: "mobileNumber", label: "Mobile:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 10,
    componentProps: { name: "faxNumber", label: "Fax:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 11,
    componentProps: { name: "email", label: "Email:" },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: { name: "principalName", label: "Principal Name:" },
    component: RHFTextField,
    md: 6,
  },
];

export const defaultValues = {
  schoolName: "",
  buildingNo: "",
  street: "",
  city: "",
  county: "",
  country: "",
  postalCode: "",
  telephoneNumber: "",
  mobileNumber: "",
  faxNumber: "",
  email: "",
  principalName: "",
};
export const SchoolDetailInfoFormSchema = Yup.object().shape({
  schoolName: Yup.string().trim().required("School Name is Required"),
  buildingNo: Yup.string().trim().required("Building Number/Name is Required"),
  street: Yup.string().trim().required("Street Number is Required"),
  city: Yup.string().trim().required("City is Required"),
  county: Yup.string().trim().required("County is Required"),
  country: Yup.string().trim().required("Country is Required"),
  postalCode: Yup.string().trim().required("Postal Code is Required"),
  telephoneNumber: Yup.string()
    .typeError("Must be a number")
    .min(10, "Invalid Telephone Number")
    .matches(/^\+44\d{10}$/, "Invalid Telephone Number")
    .required("Telephone Number is Required"),
  mobileNumber: Yup.string()
    .typeError("Must be a number")
    .min(10, "Invalid Mobile Number")
    .matches(/^\+44\d{10}$/, "Invalid Mobile Number")
    .required("Mobile Number is Required"),
  faxNumber: Yup.string().required("Fax Number is Required"),
  email: Yup.string().required("Email is Required").email("Invalid Email"),
  principalName: Yup.string().trim().required("Principal Name is Required"),
});


export { default as SchoolDetailInfoTable } from "./SchoolDetailInfoTable";
