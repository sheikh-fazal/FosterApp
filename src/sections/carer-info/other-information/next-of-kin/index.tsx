export * from "./nextOFKin";
export * from "./nextOfKinForm";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import * as Yup from "yup";
export const DummyData = [
  {
    personName: "abid",
    contactNo: "+9574554556",
    relationship: "xyz",
    data: "xyz",
  },
  {
    personName: "abid",
    contactNo: "+9574554556",
    relationship: "xyz",
    data: "xyz",
  },
];
///FORMDATA
export const NextofkinFromData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "firstName",
      label: "FirstName",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "lastname",
      label: "lastName",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "telephone",
      label: "Telephone",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "mobile",
      label: "Mobile",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "ninNumber",
      label: "N.I.Number",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 7,
    gridLength: 12,
    label: "Doctor Details",
    component: "label",
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "doctorDetails.name",
      label: "Name",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "doctorDetails.telephone",
      label: "Telephone",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "doctorDetails.address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    label: "Next of Kin",
    component: "label",
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "nextofKin.name",
      label: "Name",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      name: "nextofKin.relationship",
      label: "Relationship",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 12,
    otherOptions: {
      name: "nextofKin.address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 6,
    otherOptions: {
      name: "nextofKin.telephone",
      label: "Telephone",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 6,
    otherOptions: {
      name: "nextofKin.date",
      label: "date",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 16,
    gridLength: 6,
    otherOptions: {
      name: "nextofKin.sign",
      label: "Signature",
    },
    component: SignaturePad,
  },
];

export const nextofkinFormValues = {
  firstname: "",
  lastname: "",
  address: "",
  telephone: "",
  mobile: "",
  ninNumber: "",
  doctorDetails: {
    name: "",
    telephone: "",
    address: "",
  },
  nextofKin: {
    name: "",
    telephone: "",
    relationship: "",
    address: "",
    date: "",
    sign: "",
  },
};

export const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("required"),
  lastname: Yup.string().required("required"),
  address: Yup.string().required("required"),
  telephone: Yup.string().required("required"),
  mobile: Yup.string().required("required"),
  ninNumber: Yup.string().required("required"),
  doctorDetails: Yup.object().shape({
    name: Yup.string().required("required"),
    telephone: Yup.string().required("required"),
    address: Yup.string().required("required"),
  }),
  nextofKin: Yup.object().shape({
    name: Yup.string().required("required"),
    telephone: Yup.string().required("required"),
    relationship: Yup.string().required("required"),
    address: Yup.string().required("required"),
    date: Yup.date().required("required"),
    // sign: Yup.object().required("required"),
  }),
});
