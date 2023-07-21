import * as Yup from "yup";
import { RHFSelect, RHFTextField, RHFRadioGroup } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const initialValues = {
  status: "",
  selectCarer: "",
  dateOfOccurrence: null,
  toWhome: "",
  fromWhome: "",
  entryType: "",
  subject: "",
};

export const formSchema = Yup.object().shape({
  status: Yup.string().required("Field is required"),
  selectCarer: Yup.string().required("Field is required"),
  dateOfOccurrence: Yup.string().required("Field is required"),
  toWhome: Yup.string().required("Field is required"),
  fromWhome: Yup.string().required("Field is required"),
  entryType: Yup.string().required("Field is required"),
  subject: Yup.string().required("Field is required"),
});

export const formFields = [
  {
    gridLength: 12,
    gridSX: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 },
    title: "",
    fontWeight: 500,
    otherOptions: {
      name: "fieldOfStudy",
      options: ["Carer", "Child", "Ofsted Inspector", "Teacher", "Supervision"],
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    title: "Status",
    gridLength: 6,
    otherOptions: {
      name: "status",
      select: true,
      options: [{ value: "Selected Value", label: "Selected Value" }],
    },
    component: RHFSelect,
  },
  {
    title: "Select the Carer",
    gridLength: 6,
    otherOptions: {
      name: "selectCarer",
      select: true,
      options: [{ value: "Selected Value", label: "Selected Value" }],
    },
    component: RHFSelect,
  },
  {
    title: "Date of Occurrence",
    gridLength: 6,
    otherOptions: {
      name: "dateOfOccurrence",
    },
    component: RHFDatePicker,
  },
  {
    title: "If Corrrespondence, to whome",
    gridLength: 12,
    otherOptions: {
      name: "toWhome",
      multiLine: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "If Corrrespondence, from whome",
    gridLength: 12,
    otherOptions: {
      name: "fromWhome",
      multiLine: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Entry Type",
    gridLength: 6,
    otherOptions: {
      name: "entryType",
      select: true,
      options: [{ value: "Selected Value", label: "Selected Value" }],
    },
    component: RHFSelect,
  },
  {
    title: "Subject",
    gridLength: 12,
    otherOptions: {
      name: "subject",
      multiLine: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
];
