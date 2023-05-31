import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
export * from "./behavioralInfoTable";
export const DummyData = [
  {
    id: 1,
    overallBehavious: 8,
    summary: "Child Behaviour info Summary text",
  },
];
export const BehaviouralInfoFromData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "childWasPhsicallyAbused",
      label: "Child was phsically Abused",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "childWasSexuallyAbused",
      label: "Child was Sexually Abused",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "childIsDiagnosedHyperactive",
      label: "Child is Diagnosed Hyperactive",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "childWetsTheBed",
      label: "Child wets the Bed",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "ChildHasViolentTendencies",
      label: "Child has violent tendencies",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "childIsSeverelyWithdrawn",
      label: "Child is Severely Withdrawn",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "childIsDiagnosedWithAIDS",
      label: "Child is Diagnosed with AIDS",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "exhibitsInappropriateSexualBehaviour",
      label: "Exhibits inappropriate Sexual Behaviour",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "exhibitsCrueltyToAnimals",
      label: "Exhibits cruelty to Animals",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "selfInflectedInjuries",
      label: "Self inflected Injuries",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "habitsOfStealingLying",
      label: "Habits of Stealing / Lying",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "habitsOfSmokingDrugs",
      label: "Habits of Smoking / Drugs",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "habitsofConsumingAlcohol",
      label: "Habits of Consuming Alcohol",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "childIsDiagnosedADHD",
      label: "Child is Diagnosed ADHD",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "overallBehaviour",
      label: "Overall Behaviour (in scale of 1 to 10)",
      multiline: false,
      type: "number",
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "summary",
      label: "Summary",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const BehaviouralInfoDefultValue = {
  childWasPhsicallyAbused: false,
  childWasSexuallyAbused: false,
  childIsDiagnosedHyperactive: false,
  childWetsTheBed: false,
  ChildHasViolentTendencies: false,
  childIsSeverelyWithdrawn: false,
  childIsDiagnosedWithAIDS: false,
  exhibitsInappropriateSexualBehaviour: false,
  exhibitsCrueltyToAnimals: false,
  selfInflectedInjuries: false,
  habitsOfStealingLying: false,
  habitsOfSmokingDrugs: false,
  habitsofConsumingAlcohol: false,
  childIsDiagnosedADHD: false,
  overallBehaviour: undefined,
  summary: "",
};
export const FormSchema = Yup.object().shape({
  childWasPhsicallyAbused: Yup.boolean().required("required"),
  childWasSexuallyAbused: Yup.boolean().required("required"),
  childIsDiagnosedHyperactive: Yup.boolean().required("required"),
  childWetsTheBed: Yup.boolean().required("required"),
  ChildHasViolentTendencies: Yup.boolean().required("required"),
  childIsSeverelyWithdrawn: Yup.boolean().required("required"),
  childIsDiagnosedWithAIDS: Yup.boolean().required("required"),
  exhibitsInappropriateSexualBehaviour: Yup.boolean().required("required"),
  exhibitsCrueltyToAnimals: Yup.boolean().required("required"),
  selfInflectedInjuries: Yup.boolean().required("required"),
  habitsOfStealingLying: Yup.boolean().required("required"),
  habitsOfSmokingDrugs: Yup.boolean().required("required"),
  habitsofConsumingAlcohol: Yup.boolean().required("required"),
  childIsDiagnosedADHD: Yup.boolean().required("required"),
  overallBehaviour: Yup.number().required("required"),
  summary: Yup.string().required("required"),
});
