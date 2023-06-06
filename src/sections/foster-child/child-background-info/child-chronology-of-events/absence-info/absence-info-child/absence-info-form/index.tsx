import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const absenceInfoFormData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "dateOfAbsence",
      label: "Date Of Absence",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "label",
      label: "Label",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "schoolName",
      label: "School Name",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "reasonforAbsence",
      label: "Reason for Absence",
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const formatters: any = {};

for (const formControl of absenceInfoFormData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  schoolName: "",
  reasonforAbsence: "",
  dateOfAbsence: new Date(),
  label: new Date(),
  comments: "",
};
export const formSchema = Yup.object().shape({
  schoolName: Yup.string().required("School Name Required"),
  reasonforAbsence: Yup.string().required("Absence Reason Required"),
  dateOfAbsence: Yup.date().required("Absence Date Required"),
  label: Yup.date().required("Agency Reported Date Required"),
  comments: Yup.string(),
});

//formSchema
// reviewDate: Yup.date().required("Review Date Required"),
// personNotifiedAgency: Yup.string(),
// personCompletedReport: Yup.string(),
// agencySocialWorkerInvolved: Yup.string(),
// childLocalAuthority: Yup.string(),
// carerLocalAuthority: Yup.string(),
// allegationDetails: Yup.string(),
// investigationUndertaken: Yup.string(),
// independentSupportInfo: Yup.string(),
// allegationActionTaken: Yup.string(),
// allegationOutcome: Yup.string(),
// isThisSubstained: Yup.string(),
// teamManagerRecommendation: Yup.string(),
// hasRegisteredManagerInformed: Yup.boolean(),
// registeredManagerInformedDate: Yup.date(),
// hasOfstedBeenInformed: Yup.boolean(),
// ofstedNotifiedDate: Yup.date(),
// isSchedule: Yup.boolean(),
// reportedTo: Yup.string(),
// registeredManagerRecommendation: Yup.string(),
// closureDate: Yup.date(),
// nextAlertDate: Yup.date(),
///////////////////////////////////////////////////////

//defaultValues

// reviewDate: new Date(),

// personNotifiedAgency: "",
// personCompletedReport: "",
// agencySocialWorkerInvolved: "",
// childLocalAuthority: "",
// carerLocalAuthority: "",
// allegationDetails: "",
// investigationUndertaken: "",
// independentSupportInfo: "",
// allegationActionTaken: "",
// allegationOutcome: "",
// isThisSubstained: "",
// teamManagerRecommendation: "",
// hasRegisteredManagerInformed: null,
// registeredManagerInformedDate: new Date(),
// hasOfstedBeenInformed: null,
// ofstedNotifiedDate: new Date(),
// isSchedule: null,
// reportedTo: "",
// registeredManagerRecommendation: "",
// closureDate: new Date(),
// nextAlertDate: new Date(),
/////////////////////////////////////////////////////////////////

// {
//   id: 5,
//   otherOptions: {
//     name: "reviewDate",
//     label: "Review Date",
//     fullWidth: true,
//   },
//   component: RHFDatePicker,
//   format: (date: any) => {
//     return new Date(date);
//   },
//   gridLength: 6,
// },

// {
//   id: 7,
//   gridLength: 6,
//   otherOptions: {
//     name: "personNotifiedAgency",
//     label: "Person Notified to Agency",
//     multiline: false,
//     //   minRows: 3,
//     fullWidth: true,
//   },
//   component: RHFTextField,
// },
// {
//   id: 8,
//   gridLength: 6,
//   otherOptions: {
//     name: "personCompletedReport",
//     label: "Person Completing Report",
//     multiline: false,
//     //   minRows: 3,
//     fullWidth: true,
//   },
//   component: RHFTextField,
// },

// {
//   id: 9,
//   gridLength: 6,
//   otherOptions: {
//     name: "agencySocialWorkerInvolved",
//     label: "Agency Social worker Involved:",
//     multiline: false,
//     //   minRows: 3,
//     fullWidth: true,
//   },
//   component: RHFTextField,
// },
// {
//   id: 10,
//   otherOptions: {
//     name: "childLocalAuthority",
//     label: "Child Local Authority:",
//     select: true,
//     fullWidth: true,
//   },
//   component: RHFSelect,
//   gridLength: 6,
//   options: [
//     {
//       value: "childParents",
//       label: "Child Parents",
//     },
//     {
//       value: "childSocialWorker",
//       label: "Child Social Worker",
//     },
//     {
//       value: "childSocialWorker",
//       label: "Child Social Worker",
//     },
//     {
//       value: "childYoungPerson",
//       label: "Child/Young Person",
//     },
//     {
//       value: "fosterCarer",
//       label: "Foster Carer",
//     },
//     {
//       value: "otherProfessional",
//       label: "Other Professional",
//     },
//     {
//       value: "other",
//       label: "Other",
//     },
//   ],
// },
// {
//   id: 11,
//   otherOptions: {
//     name: "carerLocalAuthority",
//     label: "Carer Local Authority:",
//     select: true,
//     fullWidth: true,
//   },
//   component: RHFSelect,
//   gridLength: 6,
//   options: [
//     {
//       value: "childParents",
//       label: "Child Parents",
//     },
//     {
//       value: "childSocialWorker",
//       label: "Child Social Worker",
//     },
//     {
//       value: "childSocialWorker",
//       label: "Child Social Worker",
//     },
//     {
//       value: "childYoungPerson",
//       label: "Child/Young Person",
//     },
//     {
//       value: "fosterCarer",
//       label: "Foster Carer",
//     },
//     {
//       value: "otherProfessional",
//       label: "Other Professional",
//     },
//     {
//       value: "other",
//       label: "Other",
//     },
//   ],
// },
// {
//   id: 12,
//   gridLength: 12,
//   otherOptions: {
//     name: "allegationDetails",
//     label: "Allegation Details:",
//     multiline: true,
//     minRows: 3,
//     fullWidth: true,
//   },
//   component: RHFTextField,
// },
// {
//   id: 13,
//   gridLength: 12,
//   otherOptions: {
//     name: "investigationUndertaken",
//     label: "Investigation Undertaken:",
//     multiline: true,
//     minRows: 3,
//     fullWidth: true,
//   },
//   component: RHFTextField,
// },
// {
//   id: 14,
//   gridLength: 12,
//   otherOptions: {
//     name: "independentSupportInfo",
//     label: "Independent Support Offered Info:",
//     multiline: true,
//     minRows: 3,
//     fullWidth: true,
//   },
//   component: RHFTextField,
// },
// {
//   id: 15,
//   gridLength: 12,
//   otherOptions: {
//     name: "allegationActionTaken",
//     label: "Agency Action Taken:",
//     multiline: true,
//     minRows: 3,
//     fullWidth: true,
//   },
//   component: RHFTextField,
// },
// {
//   id: 16,
//   gridLength: 12,
//   otherOptions: {
//     name: "allegationOutcome",
//     label: "Allegation Outcome",
//     multiline: true,
//     minRows: 3,
//     fullWidth: true,
//   },
//   component: RHFTextField,
// },
// {
//   id: 17,
//   otherOptions: {
//     name: "isThisSubstained",
//     label: "Is This substantiated:",
//     select: true,
//     fullWidth: true,
//   },
//   component: RHFSelect,
//   gridLength: 6,
//   options: [
//     {
//       value: "childParents",
//       label: "Child Parents",
//     },
//     {
//       value: "childSocialWorker",
//       label: "Child Social Worker",
//     },
//     {
//       value: "childSocialWorker",
//       label: "Child Social Worker",
//     },
//     {
//       value: "childYoungPerson",
//       label: "Child/Young Person",
//     },
//     {
//       value: "fosterCarer",
//       label: "Foster Carer",
//     },
//     {
//       value: "otherProfessional",
//       label: "Other Professional",
//     },
//     {
//       value: "other",
//       label: "Other",
//     },
//   ],
// },
// {
//   id: 18,
//   gridLength: 12,
//   otherOptions: {
//     name: "teamManagerRecommendation",
//     label: "Team Manger Recommendation:",
//     multiline: true,
//     minRows: 3,
//     fullWidth: true,
//   },
//   component: RHFTextField,
// },
// {
//   id: 19,
//   gridLength: 6,
//   Options: [true, false],
//   otherOptions: {
//     name: "hasRegisteredManagerInformed",
//     label: "Has Registered Manger Informed:",
//   },
//   component: "RadioGroup",
// },
// {
//   id: 20,
//   gridLength: 6,
//   otherOptions: {
//     name: "registeredManagerInformedDate",
//     label: "Registered Manager informed Date",
//     fullWidth: true,
//   },
//   component: RHFDatePicker,
//   format: (date: any) => {
//     return new Date(date);
//   },
// },

// {
//   id: 21,
//   gridLength: 6,
//   Options: [true, false],
//   otherOptions: {
//     name: "hasOfstedBeenInformed",
//     label: "Has Ofsted been Informed:",
//   },
//   component: "RadioGroup",
// },
// {
//   id: 22,
//   gridLength: 6,
//   otherOptions: {
//     name: "ofstedNotifiedDate",
//     label: "OFSTED Notified Date",
//     fullWidth: true,
//   },
//   component: RHFDatePicker,
//   format: (date: any) => {
//     return new Date(date);
//   },
// },

// {
//   id: 23,
//   gridLength: 6,
//   Options: [true, false],
//   otherOptions: {
//     name: "isSchedule",
//     label: "Is Schedule",
//   },
//   component: "RadioGroup",
// },
// {
//   id: 24,
//   gridLength: 12,
//   otherOptions: {
//     name: "reportedTo",
//     label: "Reported To:",
//     multiline: true,
//     minRows: 3,
//     fullWidth: true,
//   },
//   component: RHFTextField,
// },
// //set
// {
//   id: 25,
//   gridLength: 12,
//   otherOptions: {
//     name: "registeredManagerRecommendation",
//     label: "Registered Manger Recommendation:",
//     multiline: true,
//     minRows: 3,
//     fullWidth: true,
//   },
//   component: RHFTextField,
// },
// {
//   id: 26,
//   gridLength: 6,
//   otherOptions: {
//     name: "closureDate",
//     label: "Closure Date:",
//     fullWidth: true,
//   },
//   component: RHFDatePicker,
//   format: (date: any) => {
//     return new Date(date);
//   },
// },
// {
//   id: 27,
//   gridLength: 6,
//   otherOptions: {
//     name: "nextAlertDate",
//     label: "Next Alert Date",
//     fullWidth: true,
//   },
//   component: RHFDatePicker,
//   format: (date: any) => {
//     return new Date(date);
//   },
// },
