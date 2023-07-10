import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const ofstedNotificationFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "dateOfIncident",
      label: "Date of Incident",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "location",
      label: "Location",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "reasonForNotification",
      label: "Reason for Notification",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "causeOfDeath",
      label: "Cause of Death (if applicable / known)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "dateOfDeath",
      label: "Date of Death",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "inquestOrPostMortem",
      label: "Will there be an Inquest or Post-Mortem ?",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "jobTitleOfStaffOnDuty",
      label: "Name and Job Titles of Staff on Duty",
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
      name: "jobTitleOfWitness",
      label: "Name and Job Titles of Witness(es)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "descriptionOfIncident",
      label: "Description of Incident, Please provide details of the incident",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "gpCalled",
      label: "Was the GP Called",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "gpCalledDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      name: "gpCalled",
      label: "Was the GP Called",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 13,
    gridLength: 6,
    otherOptions: {
      name: "emergencyServicesCalledDate",
      label: "Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "serviceName",
      label: "Service Name",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  ///////
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "outcomeOfIncident",
      label: "Outcome of Incident",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  dateOfIncident: null,
  correspondenceFrom: null,
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  dateOfIncident: Yup.date().required("Required"),
  correspondenceTo: Yup.string().required("Required"),
});
