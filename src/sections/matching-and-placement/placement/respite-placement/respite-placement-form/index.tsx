import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const initialValues = {
  childName: "",
  primaryCarer: "",
  respiteCarerName: "",
  startDate: null,
  endDate: null,
  respitePlan: "",
  approvedBy: "",
  localAuthority: "",
  localAuthoritySw: "",
  status: "",
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().required("Field is required"),
  primaryCarer: Yup.string().required("Field is required"),
  respiteCarerName: Yup.string().required("Field is required"),
  startDate: Yup.string().required("Field is required"),
  endDate: Yup.string().required("Field is required"),
  respitePlan: Yup.string().required("Field is required"),
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
    title: "Primary Carer",
    gridLength: 6,
    otherOptions: {
      name: "primaryCarer",
    },
    component: RHFTextField,
  },
  {
    title: "Respite Carer Name",
    gridLength: 6,
    otherOptions: {
      name: "respiteCarerName",
    },
    component: RHFTextField,
  },
  {
    title: "Respite(Start Date)",
    gridLength: 6,
    otherOptions: {
      name: "startDate",
    },
    component: RHFDatePicker,
  },
  {
    title: "Respite(End Date)",
    gridLength: 6,
    otherOptions: {
      name: "endDate",
    },
    component: RHFDatePicker,
  },
  {
    title: "Respite Plan",
    gridLength: 6,
    otherOptions: {
      name: "respitePlan",
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
