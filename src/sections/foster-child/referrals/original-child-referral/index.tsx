import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const OriginalChildReferralData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      label: "First Name",
      name: "firstName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Middle Name",
      name: "middleName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Last Name",
      name: "lastName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Date of Birth",
      name: "dob",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      label: "Gender",
      name: "gender",
      fullWidth: true,
    },
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      label: "Ethnicity",
      name: "ethnicity",
      fullWidth: true,
    },
    options: [
      { value: "hispanicorlatino", label: "Hispanic or Latino" },
      { value: "nothispanicorlatino", label: "Not Hispanic or Latino" },
    ],
    component: RHFSelect,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      label: "Ofstead Ethnicity",
      name: "ofsteadEthnicity",
      fullWidth: true,
    },
    options: [
      { value: "hispanicorlatino", label: "Hispanic or Latino" },
      { value: "nothispanicorlatino", label: "Not Hispanic or Latino" },
    ],
    component: RHFSelect,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      label: "Religion",
      name: "religion",
      fullWidth: true,
    },
    options: [],
    component: RHFSelect,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      label: "Nationality",
      name: "nationality",
      fullWidth: true,
    },
    options: [],
    component: RHFSelect,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      label: "Immigration Status",
      name: "immigrationStatus",
      fullWidth: true,
    },
    options: [],
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      label: "Language",
      name: "language",
      fullWidth: true,
    },
    options: [],
    component: RHFSelect,
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      label: "Child Physical Disability",
      name: "childPhysicalDisability",
      fullWidth: true,
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
      label: "Child Mental Health Status",
      name: "mentalHealthStatus",
      fullWidth: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 14,
    gridLength: 6,
    otherOptions: {
      label: "Sibling",
      name: "sibling",
      fullWidth: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    component: RHFSelect,
  },
  {
    id: 15,
    gridLength: 6,
    otherOptions: {
      label: "Adoption Consideration",
      name: "adoptionConsideration",
      fullWidth: true,
    },
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
    component: RHFSelect,
  },
];
