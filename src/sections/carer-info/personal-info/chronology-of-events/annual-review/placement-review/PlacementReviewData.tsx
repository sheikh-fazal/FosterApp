import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
export const defaultValues = {
  childCode: "",
  childNeeds: "Text",
  selfCareSkill: "Text",
  socialPresentation: "Text",
  contact: "Text",
  otherIssues: "Text",
  childStatement: "Text",
};

export const FormSchema = Yup.object().shape({
  childCode: Yup.string().required("required"),
  childNeeds: Yup.string().required("required"),
  selfCareSkill: Yup.string().required("required"),
  socialPresentation: Yup.string().required("required"),
  contact: Yup.string().required("required"),
  otherIssues: Yup.string().required("required"),
  childStatement: Yup.string().required("required"),
});

export const placementReviewData = [
  {
    id: 2,
    otherOptions: {
      name: "childCode",
      label: "Child Code:",
      select: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
    ],
  },
  {
    id: 2,
    title: "Identity Religion",
    gridLength: 12,
    otherOptions: {
      name: "childNeeds",
      label:
        "(If a trans-racial placement, how is the child's needs being met):",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "selfCareSkill",
      label: "Independence Self-Care Skills:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "socialPresentation",
      label: "Social Presentation Leisure Skills:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "contact",
      label: "Contact",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "otherIssues",
      label: "Other issues or Concerns:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "childStatement",
      label: "Statement from Child/Young Person:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as PlacementReview } from "./PlacementReview";
