import { RHFSwitch } from "@root/components/hook-form";
import { Grid, Typography } from "@mui/material";
import * as Yup from "yup";

export const MatchingAndPlacementData = [
  { value: "fosterCarer",
    label: "Foster Carer",
    childOptions: [
      { value: "gloriaBell", label: "Gloria Bell" },
  { value: "amira", label: "Amira" },
  { value: "awais", label: "Awais" },
  { value: "babar", label: "Babar" },
  { value: "ali", label: "Ali" },
  { value: "david", label: "David" },
    ] 
  },
  { value: "fosterChild", label: "Foster Child" ,
   childOptions:[
    { value: "johnDoe", label: "John Doe" },
    { value: "rutabSohail", label: "Rutab Sohail" },
    { value: "taimorAhmed", label: "Taimor Ahmed" },
    { value: "ahmed", label: "Ahmed" },
    { value: "adil", label: "Adil" },
    { value: "shahzeb", label: "Shahzeb" },
   ]

},
 
]



export const fosterCarerSwitchdata = [
  {
    id: 2.5,
    heading: "Select Criteria for Matching recommendations",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 3,
    componentProps: {
      name: "ethinicity",
      label: "Ethinicity",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 4,
    componentProps: {
      name: "placementwithSiblings",
      label: "Placement with Siblings",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 5,
    componentProps: {
      name: "fosterCarersAvailability",
      label: "Foster Carers Availability",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 6,
    componentProps: {
      name: "specialRequirements",
      label: "Special Requirements",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },

  {
    id: 7,
    componentProps: {
      name: "language",
      label: "Language",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 8,
    componentProps: {
      name: "connectedPerson",
      label: "Connected Person",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 9,
    componentProps: {
      name: "childFamilyHistory",
      label: "Child Family History",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 10,
    componentProps: {
      name: "childPhysicalHealth",
      label: "Child Physical Health",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 11,
    componentProps: {
      name: "religion",
      label: "Religion",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 12,
    componentProps: {
      name: "adoptionConsideration",
      label: "Adoption Consideration",
      value: false,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 13,
    componentProps: {
      name: "childFamilyLifeStory",
      label: "Child Family Life Story",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 14,
    componentProps: {
      name: "childMentalHealth",
      label: "Child Mental Health",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 15,
    componentProps: {
      name: "locality",
      label: "Locality",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 16,
    componentProps: {
      name: "ageoftheChild",
      label: "Age of the Child",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 17,
    componentProps: {
      name: "childDevelopmentalNeeds",
      label: "Child Developmental Needs",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 18,
    componentProps: {
      name: "temporaryArrangementsRespite",
      label: "Temporary Arrangements / Respite",
      value: false,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 3,
    componentProps: {
      sx: { mb: 4 },
    },
    component: Grid,
    md: 3,
  },
  {
    id: 3,
    componentProps: {
      name: "preferenceoftheChild",
      label: "Preference of the Child",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 3,
    componentProps: {
      name: "preferenceoftheCarer",
      label: "Preference of the Carer",
      value: true,
      sx: { mb: 4 },
    },
    component: RHFSwitch,
    md: 3,
  },
  {
    id: 3,
    componentProps: {
      sx: { mb: 4 },
    },
    component: Grid,
    md: 3,
  },


]

export const matchingDefaultValues = {
  selectFosterCarerAndChild: "",
  selectTheCarerName: "",
  ethinicity:true,
  placementwithSiblings:true,
  fosterCarersAvailability:true,
  specialRequirements:true,
  language:true,
  connectedPerson:true,
  childFamilyHistory:true,
  childPhysicalHealth:true,
  religion:true,
  adoptionConsideration:false,
  childFamilyLifeStory:true,
  childMentalHealth:true,
  locality:true,
  ageoftheChild:true,
  childDevelopmentalNeeds:true,
  temporaryArrangementsRespite:false,
  preferenceoftheChild:true,
  preferenceoftheCarer:true,
};

export const MatchingFormDataValidationSchema = Yup.object().shape({
  selectFosterCarerAndChild: Yup.string().trim().required("Field is Required"),
  selectTheCarerName: Yup.string().trim().required("Field is Required"),
  ethinicity: Yup.boolean().required("Field is Required"),
  placementwithSiblings: Yup.boolean().required("Field is Required"),
  fosterCarersAvailability: Yup.boolean().required("Field is Required"),
  specialRequirements: Yup.boolean().required("Field is Required"),
  language: Yup.boolean().required("Field is Required"),
  connectedPerson: Yup.boolean().required("Field is Required"),
  childFamilyHistory: Yup.boolean().required("Field is Required"),
  childPhysicalHealth: Yup.boolean().required("Field is Required"),
  religion: Yup.boolean().required("Field is Required"),
  adoptionConsideration: Yup.boolean().required("Field is Required"),
  childFamilyLifeStory: Yup.boolean().required("Field is Required"),
  locality: Yup.boolean().required("Field is Required"),
  childMentalHealth: Yup.boolean().required("Field is Required"),
  ageoftheChild: Yup.boolean().required("Field is Required"),
  childDevelopmentalNeeds: Yup.boolean().required("Field is Required"),
  temporaryArrangementsRespite: Yup.boolean().required("Field is Required"),
  preferenceoftheChild: Yup.boolean().required("Field is Required"),
  preferenceoftheCarer: Yup.boolean().required("Field is Required"),

});

export { default as Matching } from "./Matching";

