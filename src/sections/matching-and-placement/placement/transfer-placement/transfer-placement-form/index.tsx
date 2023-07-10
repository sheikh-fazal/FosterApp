import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const initialValues = {
  childName: "",
  carerNameFrom: "",
  carerNameTo: "",
  dateOfTransfer: null,
  transferReport: "",
  approvedBy: "",
  localAuthority: "",
  localAuthoritySw: "",
  status: "",
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().required("Field is required"),
  carerNameFrom: Yup.string().required("Field is required"),
  carerNameTo: Yup.string().required("Field is required"),
  dateOfTransfer: Yup.string().required("Field is required"),
  transferReport: Yup.string().required("Field is required"),
  approvedBy: Yup.string().required("Field is required"),
  localAuthority: Yup.string().required("Field is required"),
  localAuthoritySw: Yup.string().required("Field is required"),
  status: Yup.string().required("Field is required"),
});

export const formFields = [
  {
    title: "Child Name",
    gridLength: 6,
    otherOptions: {
      name: "childName",
    },
    component: RHFTextField,
  },
  {
    title: "Carer Name(from)",
    gridLength: 6,
    otherOptions: {
      name: "carerNameFrom",
    },
    component: RHFTextField,
  },
  {
    title: "Carer Name(Transferred To)",
    gridLength: 6,
    otherOptions: {
      name: "carerNameTo",
    },
    component: RHFTextField,
  },
  {
    title: "Date of Transfer",
    gridLength: 6,
    otherOptions: {
      name: "dateOfTransfer",
    },
    component: RHFDatePicker,
  },
  {
    title: "Transfer Report",
    gridLength: 6,
    otherOptions: {
      name: "transferReport",
    },
    requireFileUpload: true,
  },
  {
    title: "Approved by(Role)",
    gridLength: 6,
    otherOptions: {
      name: "approvedBy",
    },
    component: RHFTextField,
  },
  {
    title: "Local Authority",
    gridLength: 6,
    otherOptions: {
      name: "localAuthority",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    title: "Local Authority SW",
    gridLength: 6,
    otherOptions: {
      name: "localAuthoritySw",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    title: "Status",
    gridLength: 6,
    otherOptions: {
      name: "status",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
];
