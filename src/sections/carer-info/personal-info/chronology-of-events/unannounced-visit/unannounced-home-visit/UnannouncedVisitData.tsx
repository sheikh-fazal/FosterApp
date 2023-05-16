import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
const todayDate = dayjs().format("MM/DD/YYYY");

export const defaultValues = {
  personName: "Text",
  visitDate: new Date(todayDate),
  unannouncedVisitPurpose: "Text",
  present: "Text",
  carerWelcoming: "Text",
  fosterSatisfactory: "Text",
  childObservation: "Text",
  discussedFosterIssues: "Text",
  discussedChildIssues: "Text",
  healthIssues: "Text",
  apperarSatisfactory: "Text",
  forwardIssue: "Text",
};

export const FormSchema = Yup.object().shape({
  personName: Yup.string().required("required"),
  visitDate: Yup.date().required("required"),
  unannouncedVisitPurpose: Yup.string().required("required"),
  present: Yup.string().required("required"),
  carerWelcoming: Yup.string().required("required"),
  fosterSatisfactory: Yup.string().required("required"),
  childObservation: Yup.string().required("required"),
  discussedFosterIssues: Yup.string().required("required"),
  discussedChildIssues: Yup.string().required("required"),
  healthIssues: Yup.string().required("required"),
  apperarSatisfactory: Yup.string().required("required"),
  forwardIssue: Yup.string().required("required"),
});

export const unannouncedhomeVisitData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "personName",
      label: "Person name who carried out the visit:",
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "visitDate",
      label: "Date of Visit:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "unannouncedVisitPurpose",
      label: "Purpose of Unannounced Visit:",
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
      name: "present",
      label: "Who was present:",
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
      name: "carerWelcoming",
      label: "Were the carers welcoming into the home?",
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
      name: "fosterSatisfactory",
      label: "Is the condition of the foster home satisfactory:",
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
      name: "childObservation",
      label:
        "Observation on the child/young people in placement. Was the child/ren integrated into the family home? How did the adults and children interact? Record positives and any concerns in relation to this:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "discussedFosterIssues",
      label: "Any issues discussed with the foster carer:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "discussedChildIssues",
      label: "Any issues discussed with the child/young person:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "healthIssues",
      label:
        "Were there any health and safety issues in the home? Did you have a look around the home including the child's bedroom. Please comment and if not,why not?:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "apperarSatisfactory",
      label: "Did the care to the child/young person apperar satisfactory?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      name: "forwardIssue",
      label: "Any issues/action to be taken forward:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as UnannouncedVisit } from "./UnannouncedHomeVisit";
