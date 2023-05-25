import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

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
    telationship: "",
    address: "",
  },
};
