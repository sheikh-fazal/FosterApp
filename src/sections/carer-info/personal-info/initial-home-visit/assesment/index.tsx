import * as Yup from "yup";

export const FormValues = {
  familyBackground: "",
  theFamilyHouse: "",
  pets: "",
  finance: "",
  assesment: "",
  outcome: "",
  managerComments: "",
  managerRecommendation: "",
};

export const FormSchema = Yup.object().shape({
  familyBackground: Yup.string()
    .required("Family background is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  theFamilyHouse: Yup.string()
    .required("Family house is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  pets: Yup.string()
    .required("Pets is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  finance: Yup.string()
    .required("Finance is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  assesment: Yup.string()
    .required("Assesment is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  outcome: Yup.string()
    .required("Outcome is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  managerComments: Yup.string()
    .required("Manager comments is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  managerRecommendation: Yup.string()
    .required("Manager recommendation is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
});

export const fieldsInfo = [
  {
    type: "textarea",
    name: "familyBackground",
    label: "",
    title: "Family background",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "theFamilyHouse",
    label: "",
    title: "The family Home (is the accomodation suitable for fostering?):",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "pets",
    label: "",
    title:
      "Pets (Do the Applicant/s have any dogs that are currently included on the Dangerous Dogs Act List? Do the Applicant/s keep any other animals at the home?):",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "finance",
    label: "",
    title:
      "Finance (Are there any outstanding debts? Are accounts kept up to date or are there any arrears?):",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "assesment",
    label: "",
    title: "Assesment (By the officer undertaking the initial visit):",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "outcome",
    label: "",
    title:
      "Outcome/Recommendation (State with reasons weather or not the agency should proceed to Stage 1 / Skills to Foster Training):",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "managerComments",
    label: "",
    title: "Manager Comment",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "managerRecommendation",
    label: "",
    title: "Manager Recommendation",
    gridSize: { xs: 12 },
  },
];