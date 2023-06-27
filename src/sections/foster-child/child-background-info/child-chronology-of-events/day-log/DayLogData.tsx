import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const DayLogFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "dateOfOccurence",
      label: "Date of Occurence",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "correspondenceToWhom",
      label: "If correspondence, to whom",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "correspondenceFromWhom",
      label: "If correspondence, from whom",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "childSeen",
      label: "Child seen ?",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "entryType",
      label: "Entry Type",
      fullWidth: true,
    },
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "dayLog",
      label: "Day log/journal Entry",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "subject",
      label: "Subject",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "actionNeeded",
      label: "Action Needed",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "notiicationDate",
      label: "Notification Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "carerRecord",
      label: "Add to Carer Record",
      fullWidth: true,
    },
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "childSeen",
      label: "Add / Edit to Siblings Record",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
];
export const defaultValues = {
  // fosterChildId: 578786e3-1850-40cb-ac3e-5e7fa55cc59c,
  dateOfOccurence: null,
  correspondenceTo: null,
  correspondenceFrom: null,
  childSeen: true,
  entryType: null,
  subject: null,
  dayLogEntry: null,
  actionNeeded: null,
  notificationDate: null,
  addToCarerRecord: null,
  updateSiblingRecord: false,
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  dateOfOccurence: Yup.date().required("Required"),
  // correspondenceTo: Yup.string().required("Required"),
  // correspondenceFrom: Yup.string().required("Required"),
  // entryType: Yup.string().required("Required"),
});
