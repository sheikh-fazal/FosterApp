import {  RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupBoolean from "@root/components/hook-form/RHFRadioGroupBoolean";
import * as Yup from "yup";

export const ComplaintsInfoFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "urnNumber",
      label: "URN Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "complaintAgainstPersonCategory",
      label: "Complaint Against Person Category",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "complaintAgainstPerson",
      label: "Complaint Against Person ",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "complaintDate",
      label: "Complaint Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "agencyReportedDate",
      label: "Agency Reported Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "reviewDate",
      label: "Review Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "natureOfComplaint",
      label: "Nature of Complaint",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "personNotifiedAgency",
      label: "Person Notified to Agency",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "personCompletingReport",
      label: "Person Completing Report",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "agencySocialWorkerInvolved",
      label: "Agency Social Worker Involved",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "childLocalAuthority",
      label: "Child Local Authority",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      name: "carerLocalAuthority",
      label: "Carer Local Authority",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 13,
    gridLength: 12,
    otherOptions: {
      name: "complaintDetails",
      label: "Complaint Details",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 12,
    otherOptions: {
      name: "investigationUndertaken",
      label: "Investigation Undertaken",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 15,
    gridLength: 12,
    otherOptions: {
      name: "independentSupportInfo",
      label: "Independent Support Offred Info",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 16,
    gridLength: 12,
    otherOptions: {
      name: "agencyActionTaken",
      label: "Agency Action Taken",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 17,
    gridLength: 12,
    otherOptions: {
      name: "complaintOutcome",
      label: "Complaint Outcome",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 18,
    gridLength: 6,
    otherOptions: {
      name: "isThisSubstained",
      label: "Is This Substained",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 19,
    gridLength: 12,
    otherOptions: {
      name: "teamManagerRecommendation",
      label: "Team Manager Recommendation",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 20,
    gridLength: 6,
    otherOptions: {
      label: "Has Registered Manager Informed",
      name: "hasRegisteredManagerInformed",
    },
    component: RHFRadioGroupBoolean,
  },
  {
    id: 21,
    gridLength: 6,
    otherOptions: {
      name: "registeredManagerInformedDate",
      label: "Registered Manager Informed Date",
      fullWidth: true,
    },

    component: RHFDatePicker,
  },
  {
    id: 22,
    gridLength: 6,
    otherOptions: {
      label: "Has Ofsted been Informed",
      name: "hasOfstedBeenInformed",
    },
    component: RHFRadioGroupBoolean,
  },
  {
    id: 23,
    gridLength: 6,
    otherOptions: {
      name: "ofstedNotifiedDate",
      label: "Ofsted Notified Date",
      fullWidth: true,
    },

    component: RHFDatePicker,
  },
  {
    id: 24,
    gridLength: 6,
    otherOptions: {
      label: "Is Schedule",
      name: "isSchedule",
    },
    component: RHFRadioGroupBoolean,
  },
  {
    id: 25,
    gridLength: 12,
    otherOptions: {
      name: "reportedTo",
      label: "Reported To",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 26,
    gridLength: 12,
    otherOptions: {
      name: "registeredManagerRecommendation",
      label: "Registered Manager Recommendation",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 27,
    gridLength: 6,
    otherOptions: {
      name: "closureDate",
      label: "Closure Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 28,
    gridLength: 6,
    otherOptions: {
      name: "nextAlertDate",
      label: "Next Alert Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
export const defaultValues = {
  urnNumber: "Nil",
  complaintAgainstPersonCategory: null,
  complaintAgainstPerson: null,
  complaintDate: new Date(),
  agencyReportedDate: new Date(),
  reviewDate: new Date(),
  natureOfComplaint: "Nil",
  personNotifiedAgency: "Nil",
  personCompletingReport: "Nil",
  agencySocialWorkerInvolved: "Nil",
  childLocalAuthority: null,
  carerLocalAuthority: null,
  complaintDetails: "Nil",
  investigationUndertaken: "Nil",
  independentSupportInfo: "Nil",
  agencyActionTaken: "Nil",
  complaintOutcome: "Nil",
  isThisSubstained: null,
  teamManagerRecommendation: "Nil",
  hasRegisteredManagerInformed: true,
  registeredManagerInformedDate: new Date(),
  hasOfstedBeenInformed: true,
  ofstedNotifiedDate: new Date(),
  isSchedule: true,
  reportedTo: "Nil",
  registeredManagerRecommendation: "Nil",
  closureDate: new Date(),
  nextAlertDate: new Date(),
  status: null,
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  urnNumber: Yup.string().required("Required"),
  complaintAgainstPersonCategory: Yup.string().required("Required"),
  complaintAgainstPerson: Yup.string().required("Required"),
  complaintDate: Yup.date().required("Required"),
  agencyReportedDate: Yup.date().required("Required"),
  reviewDate: Yup.date().required("Required"),
  natureOfComplaint: Yup.string().required("Required"),
  personNotifiedAgency: Yup.string().required("Required"),
  personCompletingReport: Yup.string().required("Required"),
  agencySocialWorkerInvolved: Yup.string().required("Required"),
  childLocalAuthority: Yup.string().required("Required"),
  carerLocalAuthority: Yup.string().required("Required"),
  complaintDetails: Yup.string().required("Required"),
  investigationUndertaken: Yup.string().required("Required"),
  independentSupportInfo: Yup.string().required("Required"),
  agencyActionTaken: Yup.string().required("Required"),
  complaintOutcome: Yup.string().required("Required"),
  isThisSubstained: Yup.string().required("Required"),
  teamManagerRecommendation: Yup.string().required("Required"),
  registeredManagerInformedDate: Yup.date().required("Required"),
  ofstedNotifiedDate: Yup.date().required("Required"),
  reportedTo: Yup.string().required("Required"),
  registeredManagerRecommendation: Yup.string().required("Required"),
  closureDate: Yup.date().required("Required"),
  nextAlertDate: Yup.date().required("Required"),
});