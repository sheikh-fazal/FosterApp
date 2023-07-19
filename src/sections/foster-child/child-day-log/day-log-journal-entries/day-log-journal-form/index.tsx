import * as Yup from "yup";
import { Typography } from "@mui/material";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const defaultValuesDayLogForm = {
  date: new Date(),
  correspondenceTo: "",
  correspondenceFrom: "",
  childSeen: "",
  entryType: "",
  subject: "",
  daylogEntry: "",
  actionNeeded: "",
  notificationDate: new Date(),
  carerRecorde: "",
  AddorEditToSiblingsRecord: "",
  notified: "",
  email: "",
};

export const DayLogFormValidation = Yup.object().shape({
  date: Yup.date().required("Required"),
  correspondenceTo: Yup.string().required("Required"),
  correspondenceFrom: Yup.string().required("Required"),
  childSeen: Yup.string().required("Required"),
  entryType: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  daylogEntry: Yup.string().required("Required"),
  actionNeeded: Yup.string().required("Required"),
  notificationDate: Yup.string().required("Required"),
  carerRecorde: Yup.string().required("Required"),
  AddorEditToSiblingsRecord: Yup.string().required("Required"),
  notified: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});

export const DayLogJournalFormData = [
  {
    id: 1,
    componentProps: {
      label: "Date of Occurence",
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "correspondenceTo",
      label: "If correspondence, to whom",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 3,
    componentProps: {
      name: "correspondenceFrom",
      label: "If correspondence, from whom",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    md: 12,
  },

  {
    id: 4,
    componentProps: {
      name: "childSeen",
      label: "Child Seen",
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      label: "Entry Type",
      name: "entryType",
      fullWidth: true,
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "subject",
      label: "Subject:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 7,
    componentProps: {
      name: "daylogEntry",
      label: "Day log/journal Entry:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 8,
    componentProps: {
      name: "actionNeeded",
      label: "Action Needed",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 9,
    componentProps: {
      name: "notificationDate",
      label: "Notification Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 6,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 10,
    componentProps: {
      label: "Add to Carer record",
      name: "carerRecorde",
      fullWidth: true,
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "AddorEditToSiblingsRecord",
      label: "Add / Edit to Siblings Record",
    },
    component: RHFCheckbox,
    md: 12,
  },
  {
    id: 12,
    heading: "Notification",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 13,
    componentProps: {
      label: "Select User to be Notified",
      name: "notified",
      fullWidth: true,
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 14,
    componentProps: {
      name: "email",
      label:
        "Enter Additional Email Addresses to be notified:\n(Email Addresses Should be seprated by commas.For Example john@domain.com, Pete@domain.com)",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    md: 12,
  },
];
