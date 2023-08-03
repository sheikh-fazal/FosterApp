import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const OriginalChildReferralData = [
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Child Or Parent & Child",
      name: "childParent",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Area Office",
      name: "areaOffice",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      label: "First Name",
      name: "firstName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      label: "Last Name",
      name: "lastName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      label: "Date of Birth",
      name: "dateOfBirth",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      label: "Age",
      name: "age",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      label: "Gender",
      name: "gender",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      label: "Ethnicity",
      name: "ethnicity",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      label: "Ofstead Ethnicity",
      name: "ofSteadEthnicity",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      label: "Special Needs",
      name: "specialNeeds",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 6,
    otherOptions: {
      label: "Nationality",
      name: "nationality",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 6,
    otherOptions: {
      label: "Language",
      name: "language",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 6,
    otherOptions: {
      label: "Religion",
      name: "religion",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 16,
    gridLength: 6,
    otherOptions: {
      label: "Legal Status",
      name: "legal",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 17,
    gridLength: 6,
    otherOptions: {
      label: "Immigration Status",
      name: "immigrationStatus",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 18,
    gridLength: 6,
    otherOptions: {
      label: "Behaviour",
      name: "behaviour",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 19,
    gridLength: 6,
    otherOptions: {
      label: "Is the Child Currentl in Education?",
      name: "childInEducation",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 20,
    gridLength: 6,
    otherOptions: {
      label: "Are there any other Siblings?",
      name: "otherSiblings",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 21,
    gridLength: 12,
    otherOptions: {
      label: "Address",
      name: "address",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 22,
    gridLength: 6,
    otherOptions: {
      label: "Refferal Name",
      name: "refferalName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 23,
    gridLength: 6,
    otherOptions: {
      label: "Refferal Date",
      name: "refferalDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 23,
    gridLength: 12,
    otherOptions: {
      label: "Reason",
      name: "reason",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 24,
    gridLength: 6,
    otherOptions: {
      label: "Child Placing Authority",
      name: "childPlacingAuthority",
      fullWidth: true,
    },
    options: [{value: 'o level', label:"O Level"}],
    component: RHFSelect,
  },
  {
    id: 25,
    gridLength: 6,
    otherOptions: {
      label: "LA Worker Name",
      name: "laWorkerName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 26,
    gridLength: 6,
    otherOptions: {
      label: "Local Authority",
      name: "localAuthority",
      fullWidth: true,
    },
    options: [{value: 'o level', label:"O Level"}],
    component: RHFSelect,
  },
  {
    id: 27,
    gridLength: 6,
    otherOptions: {
      label: "Date LA Notified",
      name: "dateLaNotified",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 28,
    gridLength: 12,
    otherOptions: {
      label: "How he/she become foster child",
      name: "becomeFosterChld",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 29,
    gridLength: 12,
    otherOptions: {
      label: "Other Details",
      name: "otherDetails",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
