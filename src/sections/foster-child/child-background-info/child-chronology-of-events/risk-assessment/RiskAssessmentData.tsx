import { RHFCheckbox, RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";

export const RAChildDetailsFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "assessmentDate",
      label: "Date of Assessment ",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "nextAssessmentDate",
      label: "Next Assessment Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "laOOHContactNumber",
      label: "LA OOH Contact Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "height",
      label: "Height",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "hairColor",
      label: "Hair Color",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "eyeColor",
      label: "Eye Color",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "distinguishingMarks",
      label: "Distinguishing marks / feature",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      defaultValue: "No",
      label: "Known / Suspected CSE Risk Y/N",
      name: "knownSuspectedCSERisk",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "knownNetworkOfChild",
      label:
        "Known Network of the Child (if known, provide family/friends/previous foster carers names and addresses)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "circumstancesThatIncreaseRisk",
      label:
        "Any circumstances that may increase risk to child (previous missing episodes, child exploitation, drugs alcohol, abduction, family members)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];

//

export const RAChildInformationFormFields = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "knownNetworkOfChild",
      label:
        "Background of the Child (reason for being in care, has the child suffered neglect, emotional, physical or sexual abuse, risk to other children ?)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "circumstancesThatIncreaseRisk",
      label:
        "Who’s involved and what is their role ? (Intervention, agencies, services, direct work)",
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
      name: "circumstancesThatIncreaseRisk",
      label: "Details of GP / Regular health appointments : Speech and Language, Asthma Clinic etc",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "circumstancesThatIncreaseRisk",
      label:
        "Health (Health conditions, medication, allergies, mental illness, pshychological disorders, physical or learning difficuties etc)",
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
      name: "circumstancesThatIncreaseRisk",
      label: "Education (details of school, transport, attendance, behaviour)",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "circumstancesThatIncreaseRisk",
      label: "Tel Number",
      fullWidth: true,
      type: "number",
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "circumstancesThatIncreaseRisk",
      label: "Teacher",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "circumstancesThatIncreaseRisk",
      label:
        "Foster Home (Routine, religious & cultural needs, pocket money, mobile phone, supervision in home, community & with pets)",
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
      name: "circumstancesThatIncreaseRisk",
      label: "Contact (Contact arrangements with family - direct & indirect)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "circumstancesThatIncreaseRisk",
      label:
        "Permission must be sort from the Child and Child's Social Worker before a photo is taken (Child should be fully clothed when photographed). Permission include Details of person who has permission for photos to be taken",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "circumstancesThatIncreaseRisk",
      label: "Details of person who has / can give permission for photos to be taken",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const defaultValues = {
  assessmentDate: null,
  nextAssessmentDate: null,
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  dateOfOccurence: Yup.date().required("Required"),
  correspondenceTo: Yup.string().required("Required"),
  correspondenceFrom: Yup.string().required("Required"),
  entryType: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  dayLogEntry: Yup.string().required("Required"),
  actionNeeded: Yup.string().required("Required"),
  notificationDate: Yup.date().required("Required"),
  addToCarerRecord: Yup.string().required("Required"),
});
