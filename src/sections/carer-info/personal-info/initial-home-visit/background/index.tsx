import * as Yup from "yup";

export const backgroundFormValues = {
  knowledgeOfSexualHarmful: "",
  availability: "",
  supportNetwork: "",
  interestAndHobby: "",
  health: "",
  conviction: "",
};

export const BackgroundFormSchema = Yup.object().shape({
  knowledgeOfSexualHarmful: Yup.string()
    .required("Knowledge of sexual harmful is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  availability: Yup.string()
    .required("Availability is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  supportNetwork: Yup.string()
    .required("Support network is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  interestAndHobby: Yup.string()
    .required("Interest and hobby is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  health: Yup.string()
    .required("Health is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  conviction: Yup.string()
    .required("Conviction knowledge is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
});

export const fieldsInfo = [
  {
    type: "textarea",
    name: "knowledgeOfSexualHarmful",
    label: "",
    title:
      "Knowledge of Sexual harmful behaviour (What knowledge does the applicant/s have this?):",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "availability",
    label: "",
    title:
      "Availability (At least one carer needs to be available at all times):",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "supportNetwork",
    label: "",
    title:
      "Support Network (The applicant/s will need to describe their support network and its reliability):",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "interestAndHobby",
    label: "",
    title:
      "Interest, Hobbies, Talents (What are these? Where? When? With whom? Are they pursued individually or with others or both?):",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "health",
    label: "",
    title:
      "Health /Recent loss (How do they describe their health; any recent operations ; are they taking medication? Have they experienced any recent loss or bereavement?):",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "conviction",
    label: "",
    title:
      "Conviction (Do the applicant/s have any post, pending or currrent convictions?):",
    gridSize: { xs: 12 },
  },
];