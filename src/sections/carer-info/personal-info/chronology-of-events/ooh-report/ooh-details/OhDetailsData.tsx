import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";

const todayDate = dayjs().format("MM/DD/YYYY");

export const defaultValues = {
  reportingDate: new Date(todayDate),
  placementRequired: true,
  callNature: "Text",
  actionTaken: "Text",
  actionNeeded: "Text",
  personCompleting: "John Doe",
  childRecord: "",
};

export const FormSchema = Yup.object().shape({
  reportingDate: Yup.date().required("required"),
  placementRequired: Yup.boolean().required("required"),
  callNature: Yup.string().required("required"),
  actionTaken: Yup.string().required("required"),
  actionNeeded: Yup.string().required("required"),
  personCompleting: Yup.string().required("required"),
  childRecord: Yup.string().required("required"),
});

export const carerSectionAlphaData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "reportingDate",
      label: "Report Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    otherOptions: {
      name: "placementRequired",
      label: "Emergency Placement Required?",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "callNature",
      label: "Nature of Call/Reason:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    otherOptions: {
      name: "actionTaken",
      label: "Action Taken:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 12,
  },
  {
    id: 5,
    otherOptions: {
      name: "actionNeeded",
      label: "Action Needed:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 12,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "personCompleting",
      label: "Person Completing the OOH Report:",
    },
    component: RHFTextField,
  },
  {
    id: 7,
    otherOptions: {
      name: "childRecord",
      label: "Add to Child Record",
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
];
export { default as OhDetails } from "./OhDetails";

export const personalDetails = [
  {
    id: 1,
    label: "Carer Code",
    name: "FCC-3",
  },
  {
    id: 2,
    label: "Carer Name",
    name: "Sangeetha Subramanian",
  },
  {
    id: 3,
    label: "Supervising Social Worker",
    name: "Not Assigned",
  },
  {
    id: 4,
    label: "Status",
    name: "Approved",
  },
];
