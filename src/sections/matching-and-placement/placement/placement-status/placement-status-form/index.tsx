import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const initialValues = {
  childName: "",
  carerName: "",
  typeOfPlacement: "",
  dateOfPlacement: null,
  placementEndDate: null,
  agencySocialWorker: "",
  localAuthority: "",
  laSocialWorker: "",
  status: "",
  placementPlan: "",
  respiteAgreements: "",
  approvedBy: "",
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().required("Field is required"),
  carerName: Yup.string().required("Field is required"),
  typeOfPlacement: Yup.string().required("Field is required"),
  dateOfPlacement: Yup.string().required("Field is required"),
  placementEndDate: Yup.string().required("Field is required"),
  agencySocialWorker: Yup.string().required("Field is required"),
  localAuthority: Yup.string().required("Field is required"),
  laSocialWorker: Yup.string().required("Field is required"),
  status: Yup.string().required("Field is required"),
  placementPlan: Yup.string().required("Field is required"),
  respiteAgreements: Yup.string().required("Field is required"),
  approvedBy: Yup.string().required("Field is required"),
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
    title: "Carer Name",
    gridLength: 6,
    otherOptions: {
      name: "carerName",
    },
    component: RHFTextField,
  },
  {
    title: "Type of Placement",
    gridLength: 6,
    otherOptions: {
      name: "typeOfPlacement",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    title: "Date of Placement",
    gridLength: 6,
    otherOptions: {
      name: "dateOfPlacement",
    },
    component: RHFDatePicker,
  },
  {
    title: "Placement End Date",
    gridLength: 6,
    otherOptions: {
      name: "placementEndDate",
    },
    component: RHFDatePicker,
  },
  {
    title: "Agency Social Worker",
    gridLength: 6,
    otherOptions: {
      name: "agencySocialWorker",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
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
    title: "LA Social Worker",
    gridLength: 6,
    otherOptions: {
      name: "laSocialWorker",
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

  {
    title: "Placement Plan",
    gridLength: 6,
    otherOptions: {
      name: "placementPlan",
    },
    requireFileUpload: true,
  },
  {
    title: "Placement Agreements",
    gridLength: 6,
    otherOptions: {
      name: "respiteAgreements",
    },
    requireFileUpload: true,
  },
  {
    title: "Approved by(Role)",
    gridLength: 6,
    otherOptions: {
      name: "approvedBy",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
];
