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
  writternReview: "",
  reviewType: "",
  onFire: true,
  reviewDate: new Date(todayDate),
  nextReview: new Date(todayDate),
  previousDate: new Date(todayDate),
  confirmDate: new Date(todayDate),
  hasReview: true,
  purposeReview: "Text",
  independentReview: "Text",
  nextPanel: new Date(todayDate),
  previousPanelDate: new Date(todayDate),
  currentApprovalDate: new Date(todayDate),
  approvalTerms: "Text",
  petsInfo: "Text",
  previousReviewOfficer: "Text",
  previousPanelRecommendation: "Text",
  discussionIssues: "Text",
  supervisingDate: new Date(),
  announcedVisit: "Text",
  safeCaring: true,
  meetings: "Text",
  numberOfRooms: "",
  currentPlacement: "Text",
  sleepingArrangements: "Text",
  registerChildMinder: true,
};

export const FormSchema = Yup.object().shape({
  writternReview: Yup.string().required("required"),
  reviewType: Yup.string().required("required"),
  onFire: Yup.boolean().required("required"),
  reviewDate: Yup.date().required("required"),
  nextReview: Yup.date().required("required"),
  previousDate: Yup.date().required("required"),
  confirmDate: Yup.date().required("required"),
  hasReview: Yup.boolean().required("required"),
  purposeReview: Yup.string().required("required"),
  independentReview: Yup.string().required("required"),
  nextPanel: Yup.date().required("required"),
  previousPanelDate: Yup.date().required("required"),
  currentApprovalDate: Yup.date().required("required"),
  approvalTerms: Yup.string().required("required"),
  petsInfo: Yup.string().required("required"),
  previousReviewOfficer: Yup.string().required("required"),
  previousPanelRecommendation: Yup.string().required("required"),
  discussionIssues: Yup.string().required("required"),
  supervisingDate: Yup.date().required("required"),
  announcedVisit: Yup.string().required("required"),
  safeCaring: Yup.boolean().required("required"),
  meetings: Yup.string().required("required"),
  numberOfRooms: Yup.string().required("required"),
  currentPlacement: Yup.string().required("required"),
  sleepingArrangements: Yup.string().required("required"),
  registerChildMinder: Yup.boolean().required("required"),
});

export const annualReviewAData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "writternReview:",
      label: "Review Writtern by (if other than the Supervising Social Worker)",
    },
    component: RHFTextField,
  },
  {
    id: 2,
    otherOptions: {
      name: "reviewType:",
      label: "Review Type",
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
    id: 3,
    otherOptions: {
      name: "onFire",
      label: "On Fire:",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "reviewDate",
      label: "Review Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "nextReview",
      label: "Next Review Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "previousDate",
      label: "Previous Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "confirmDate",
      label: "Confirmation of Review Held Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 8,
    otherOptions: {
      name: "hasReview",
      label: "Has Review Taken Place:",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "purposeReview",
      label: "Purpose Of Review:",
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
      name: "independentReview",
      label: "Independent Review Offer:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "nextPanel",
      label: "Next Panel Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      name: "previousPanelDate",
      label: "Previous Panel Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 13,
    gridLength: 6,
    otherOptions: {
      name: "currentApprovalDate",
      label: "Current Approval Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 14,
    otherOptions: {
      name: "approvalTerms",
      label: "Terms Of Approval:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 12,
  },
  {
    id: 15,
    gridLength: 12,
    otherOptions: {
      name: "petsInfo",
      label: "Pets Info:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 16,
    gridLength: 12,
    otherOptions: {
      name: "previousReviewOfficer",
      label: "Previous Panel Recommendation:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 17,
    gridLength: 12,
    otherOptions: {
      name: "previousPanelRecommendation",
      label: "Previous Panel Recommendation:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 18,
    gridLength: 12,
    otherOptions: {
      name: "discussionIssues",
      label: "Issues for Discussion at Review Time:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 19,
    gridLength: 12,
    otherOptions: {
      name: "supervisingDate",
      label: "Dates of supervising Social Worker Visits:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 20,
    gridLength: 12,
    otherOptions: {
      name: "announcedVisit",
      label: "Dates of Unannounced Visit:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 21,
    otherOptions: {
      name: "safeCaring",
      label: "Safe Caring Policy is Up to Date?",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 22,
    gridLength: 12,
    otherOptions: {
      name: "meetings",
      label: "Meettings:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 23,
    gridLength: 6,
    otherOptions: {
      name: "numberOfRooms",
      label: "Number of rooms currently used for the purpose of fostering?",
    },
    component: RHFTextField,
  },
  {
    id: 24,
    gridLength: 12,
    otherOptions: {
      name: "currentPlacement",
      label: "Foster Carer Current Placement:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 25,
    gridLength: 12,
    otherOptions: {
      name: "sleepingArrangements",
      label: "Sleeping Arragements:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 26,
    otherOptions: {
      name: "registerChildMinder",
      label: "Is Carer a Regsitered Childminder?",
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
];
export { default as AnnualReviewA } from "./AnnualReviewA";

export const personalDetails = [
  {
    id: 1,
    label: "Enter Name (Code):",
    name: "Sangeetha, Subramanian (FCC-3)",
  },
  {
    id: 2,
    label: "Address:",
    name: "119 Brampton Road Bexleyheath, KENT DA7 4SL",
  },
  {
    id: 3,
    label: "Supervising Social Worker:",
    name: "Not Assigned",
  },
  {
    id: 4,
    label: "Phone:",
    name: "0741565874",
  },
  {
    id: 5,
    label: "Mobile:",
    name: "0741565874",
  },
  {
    id: 6,
    label: "Email:",
    name: "Sangeetha3012@gmail.com",
  },
];
