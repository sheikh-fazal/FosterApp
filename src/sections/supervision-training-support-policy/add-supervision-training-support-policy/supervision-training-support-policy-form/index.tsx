import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import SignaturePad from "@root/components/SignaturePad";

export const SuperversionTrainingPolicyFormData = [
  {
    id: 1,
    title: "Title",
    componentProps: {
      name: "title",
    //   label: "Title",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    title: "Date Uploaded",
    componentProps: {
      name: "dateUploaded",
    //   title: "Date Uploaded",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 3,
    title: "Description",
    componentProps: {
      name: "description",
    //   label: "Description",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    title: "Version",
    componentProps: {
      name: "version",

      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "Hayes", label: "Hayes" }],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 5,
    title: "Created By",
    componentProps: {
      name: "createdBy",
    //   label: "Created By",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    title: "Approved By",
    componentProps: {
      name: "approvedBy",
    //   label: "Approved By",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 7,
    title: "eSignature of Author",
    componentProps: {
      name: "eSignatureofAuthor",
    //   label: "eSignature of Author",
      sx: { mb: 4 },
    },
    component: SignaturePad,
    md: 6,
  },
  {
    id: 8,
    title: "eSignature of Approver",
    componentProps: {
      name: "eSignatureofApprover",
    //   label: "eSignature of Approver",
      sx: { mb: 4 },
    },
    component: SignaturePad,
    md: 6,
  },
  {
    id: 9,
    title: "Date of eSignature of Author",
    componentProps: {
      name: "author",
    //   title: "Date of eSignature of Author",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 10,
    title: "Date of eSignature of Approver",
    componentProps: {
      name: "approver",
    //   title: "Date of eSignature of Approver",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 11,
    title: "Creation Time",
    componentProps: {
      name: "creationTime",
    //   title: "Creation Time",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTimePicker,
    md: 6,
  },
  {
    id: 12,
    title: "Last Modified Time",
    componentProps: {
      name: "lastModifiedTime",
    //   title: "Last Modified Time",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTimePicker,
    md: 6,
  },
  {
    id: 13,
    title: "Modified By",
    componentProps: {
      name: "modifiedBy",
    //   label: "Modified By",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  
];

export const SuperversionTrainingPolicyDefaultValues = {
  title: "",
  dateUploaded: "",
  description: "",
  version: "",
  createdBy: "",
  approvedBy: "",
  author: "",
  approver: "",
  creationTime: "",
  lastModifiedTime: "",
  modifiedBy: "",
  uploadImage: "",
  eSignatureofAuthor: "",
  eSignatureofApprover: "",
};

export const SuperversionTrainingPolicyValidationSchema = Yup.object().shape({
  title: Yup.string().trim().required("Field is Required"),
  yourrequest: Yup.string().trim().required("Field is Required"),
  dateUploaded: Yup.string().trim().required("Field is Required"),
  description: Yup.string().trim().required("Field is Required"),
  version: Yup.string().trim().required("Field is Required"),
  createdBy: Yup.string().trim().required("Field is Required"),
  approvedBy: Yup.string().trim().required("Field is Required"),
  author: Yup.string().trim().required("Field is Required"),
  approver: Yup.string().trim().required("Field is Required"),
  creationTime: Yup.string().trim().required("Field is Required"),
  lastModifiedTime: Yup.string().trim().required("Field is Required"),
  modifiedBy: Yup.string().trim().required("Field is Required"),
  uploadImage: Yup.string().trim().required("Field is Required"),
  eSignatureofAuthor: Yup.string().trim().required("Field is Required"),
  eSignatureofApprover: Yup.string().trim().required("Field is Required"),
});

