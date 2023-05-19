import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const complaintsFormData = [
  {
    id: 1,
    otherOptions: {
      name: "complaintAgainstPersonCategory",
      label: "Complaints against person category:",
      select: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "Diasabeled Choice",
        label: "Diasabeled Choice",
      },
    ],
  },
  {
    id: 2,
    otherOptions: {
      name: "complaintAgainstPerson",
      label: "Complaints against person:",
      select: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "Diasabeled Choice",
        label: "Diasabeled Choice",
      },
    ],
  },

  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "complaintDate",
      label: "Complaints Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "agencyReportedDate",
      label: "Agency Reported Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 5,
    otherOptions: {
      name: "reviewDate",
      label: "Review Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
    gridLength: 6,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "natureOfComplaint",
      label: "Nature of Complaints:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "personNotifiedAgency",
      label: "Person Notified to Agency",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "personCompletedReport",
      label: "Person Completing Report",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "agencySocialWorkerInvolved",
      label: "Agency Social worker Involved:",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    otherOptions: {
      name: "childLocalAuthority",
      label: "Child Local Authority:",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "Diasabeled Choice",
        label: "Diasabeled Choice",
      },
    ],
  },
  {
    id: 11,
    otherOptions: {
      name: "carerLocalAuthority",
      label: "Carer Local Authority:",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "Diasabeled Choice",
        label: "Diasabeled Choice",
      },
    ],
  },
  {
    id: 12,
    gridLength: 12,
    otherOptions: {
      name: "complaintDetails",
      label: "Complaints Details:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 12,
    otherOptions: {
      name: "investigationUndertaken",
      label: "Investigation Undertaken:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 12,
    otherOptions: {
      name: "independentSupportInfo",
      label: "Independent Support Offered Info:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 12,
    otherOptions: {
      name: "agencyActionTaken",
      label: "Agency Action Taken:",
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
      name: "complaintOutcome",
      label: "Complaints Outcome",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 17,
    otherOptions: {
      name: "isThisSubstained",
      label: "Is This substantiated:",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "Diasabeled Choice",
        label: "Diasabeled Choice",
      },
    ],
  },
  {
    id: 18,
    gridLength: 12,
    otherOptions: {
      name: "teamManagerRecommendation",
      label: "Team Manger Recommendation:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 19,
    gridLength: 6,
    Options: [true, false],
    otherOptions: {
      name: "hasRegisteredManagerInformed",
      label: "Has Registered Manger Informed:",
    },
    component: "RadioGroup",
  },
  {
    id: 20,
    gridLength: 6,
    otherOptions: {
      name: "registeredManagerInformedDate",
      label: "Registered Manager informed Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },

  {
    id: 21,
    gridLength: 6,
    Options: [true, false],
    otherOptions: {
      name: "hasOfstedBeenInformed",
      label: "Has Ofsted been Informed:",
    },
    component: "RadioGroup",
  },
  {
    id: 22,
    gridLength: 6,
    otherOptions: {
      name: "ofstedNotifiedDate",
      label: "OfSted Notified Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 23,
    gridLength: 6,
    Options: [true, false],
    otherOptions: {
      name: "isSchedule",
      label: "Is Schedule",
    },
    component: "RadioGroup",
  },
  {
    id: 24,
    gridLength: 12,
    otherOptions: {
      name: "reportedTo",
      label: "Reported To:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },

  //set
  {
    id: 25,
    gridLength: 12,
    otherOptions: {
      name: "registeredManagerRecommendation",
      label: "Registered Manger Recommendation:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 26,
    gridLength: 6,
    otherOptions: {
      name: "closureDate",
      label: "Closure Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 27,
    gridLength: 6,
    otherOptions: {
      name: "nextAlertDate",
      label: "Next Alert Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
];

export const formatters: any = {};

for (const formControl of complaintsFormData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  complaintAgainstPersonCategory: "",
  complaintAgainstPerson: "",
  complaintDate: new Date(),
  agencyReportedDate: new Date(),
  reviewDate: new Date(),
  natureOfComplaint: "",
  personNotifiedAgency: "",
  personCompletedReport: "",
  agencySocialWorkerInvolved: "",
  childLocalAuthority: "",
  carerLocalAuthority: "",
  complaintDetails: "",
  investigationUndertaken: "",
  independentSupportInfo: "",
  agencyActionTaken: "",
  complaintOutcome: "",
  isThisSubstained: "",
  teamManagerRecommendation: "",
  hasRegisteredManagerInformed: null,
  registeredManagerInformedDate: new Date(),
  hasOfstedBeenInformed: null,
  ofstedNotifiedDate: new Date(),
  isSchedule: null,
  reportedTo: "",
  registeredManagerRecommendation: "",
  closureDate: new Date(),
  nextAlertDate: new Date(),
};

export const formSchema = Yup.object().shape({
  complaintAgainstPersonCategory: Yup.string().required("required"),
  complaintAgainstPerson: Yup.string().required("required"),
  complaintDate: Yup.date().required("required"),
  agencyReportedDate: Yup.date().required("required"),
  reviewDate: Yup.date().required("required"),
  natureOfComplaint: Yup.string().required("required"),
  personNotifiedAgency: Yup.string().required("required"),
  personCompletedReport: Yup.string().required("required"),
  agencySocialWorkerInvolved: Yup.string().required("required"),
  childLocalAuthority: Yup.string().required("required"),
  carerLocalAuthority: Yup.string().required("required"),
  complaintDetails: Yup.string().required("required"),
  investigationUndertaken: Yup.string().required("required"),
  independentSupportInfo: Yup.string().required("required"),
  agencyActionTaken: Yup.string().required("required"),
  complaintOutcome: Yup.string().required("required"),
  isThisSubstained: Yup.string().required("required"),
  teamManagerRecommendation: Yup.string().required("required"),
  hasRegisteredManagerInformed: Yup.boolean().required("required"),
  registeredManagerInformedDate: Yup.date().required("required"),
  hasOfstedBeenInformed: Yup.boolean().required("required"),
  ofstedNotifiedDate: Yup.date().required("required"),
  isSchedule: Yup.boolean().required("required"),
  reportedTo: Yup.string().required("required"),
  registeredManagerRecommendation: Yup.string().required("required"),
  closureDate: Yup.date().required("required"),
  nextAlertDate: Yup.date().required("required"),
});
