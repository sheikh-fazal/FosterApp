import { RHFSwitch, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const defaultValues = {
  placementReference: "Text",
  ethinicity: true,
  placementSiblings: true,
  fosterAvailability: true,
  specialRequirements: true,
  language: true,
  connectedPerson: true,
  familyHistory: true,
  physicsHealth: true,
  religion: true,
  adoptionConsideration: true,
  lifeStory: true,
  mentalHealth: true,
  locality: true,
  childAge: true,
  childDevelopment: true,
  arragements: false,
  childPreference: true,
  carerPreference: true,
};

export const FormSchema = Yup.object().shape({
  placementReference: Yup.string().required(),
  ethinicity: Yup.boolean().required(),
  placementSiblings: Yup.boolean().required(),
  fosterAvailability: Yup.boolean().required(),
  specialRequirements: Yup.boolean().required(),
  language: Yup.boolean().required(),
  connectedPerson: Yup.boolean().required(),
  familyHistory: Yup.boolean().required(),
  physicsHealth: Yup.boolean().required(),
  religion: Yup.boolean().required(),
  adoptionConsideration: Yup.boolean().required(),
  lifeStory: Yup.boolean().required(),
  mentalHealth: Yup.boolean().required(),
  locality: Yup.boolean().required(),
  childAge: Yup.boolean().required(),
  childDevelopment: Yup.boolean().required(),
  arragements: Yup.boolean().required(),
  childPreference: Yup.boolean().required(),
  carerPreference: Yup.boolean().required(),
});

export const placementReferenceData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "placementReference",
      label: "Mention any specific placement preference",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    title: "Select Criteria For Child Placement",
    gridLength: 3,
    otherOptions: {
      name: "ethinicity",
      label: "Ethinicity",
    },
    component: RHFSwitch,
  },
  {
    id: 3,
    gridLength: 3,
    otherOptions: {
      name: "placementSiblings",
      label: "Placement with Siblings",
    },
    component: RHFSwitch,
  },
  {
    id: 4,
    gridLength: 3,
    otherOptions: {
      name: "fosterAvailability",
      label: "Foster Careres Availability",
    },
    component: RHFSwitch,
  },
  {
    id: 5,
    gridLength: 3,
    otherOptions: {
      name: "specialRequirements",
      label: "Special Requirements",
    },
    component: RHFSwitch,
  },
  {
    id: 6,
    gridLength: 3,
    otherOptions: {
      name: "language",
      label: "Language",
    },
    component: RHFSwitch,
  },
  {
    id: 7,
    gridLength: 3,
    otherOptions: {
      name: "connectedPerson",
      label: "Connected Person",
    },
    component: RHFSwitch,
  },
  {
    id: 8,
    gridLength: 3,
    otherOptions: {
      name: "familyHistory",
      label: "Child Family History",
    },
    component: RHFSwitch,
  },
  {
    id: 9,
    gridLength: 3,
    otherOptions: {
      name: "physicsHealth",
      label: "Child Physical Health",
    },
    component: RHFSwitch,
  },
  {
    id: 10,
    gridLength: 3,
    otherOptions: {
      name: "religion",
      label: "Religion",
    },
    component: RHFSwitch,
  },
  {
    id: 11,
    gridLength: 3,
    otherOptions: {
      name: "adoptionConsideration",
      label: "Adoption Consideration",
    },
    component: RHFSwitch,
  },
  {
    id: 12,
    gridLength: 3,
    otherOptions: {
      name: "lifeStory",
      label: "Child Family Left Story",
    },
    component: RHFSwitch,
  },
  {
    id: 13,
    gridLength: 3,
    otherOptions: {
      name: "mentalHealth",
      label: "Child Mental Health",
    },
    component: RHFSwitch,
  },
  {
    id: 14,
    gridLength: 3,
    otherOptions: {
      name: "locality",
      label: "Locality",
    },
    component: RHFSwitch,
  },
  {
    id: 15,
    gridLength: 3,
    otherOptions: {
      name: "childAge",
      label: "Age of the Child",
    },
    component: RHFSwitch,
  },
  {
    id: 16,
    gridLength: 3,
    otherOptions: {
      name: "childDevelopment",
      label: "Child Development Needs",
    },
    component: RHFSwitch,
  },
  {
    id: 17,
    gridLength: 3,
    otherOptions: {
      name: "arragements",
      label: "Temporary Arragements / Respite",
    },
    component: RHFSwitch,
  },
  {
    id: 18,
    gridLength: 3,
    otherOptions: {
      name: "childPreference",
      label: "Preference of the Child",
    },
    component: RHFSwitch,
  },
  {
    id: 19,
    gridLength: 3,
    otherOptions: {
      name: "carerPreference",
      label: "Preference of the Carer",
    },
    component: RHFSwitch,
  },
];
