import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/hook-form/SignaturePad";

export const StageOneApprovalFormData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      label: "Applicant Name",
      name: "applicantName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      label: "Social worker recommendation",
      name: "socialWorkerRecommendation",
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      label: "Social worker comments",
      name: "socialWorkerComments",
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Name of social Worker",
      name: "nameOfWorker",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "socaialWorkerAssessmentDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "socialWorkerSignature",
      label: "SW Signature",
      // height: "130px",
      // sx: { mb: 10 },
    },
    component: SignaturePad,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      label: "Team manager decision/recommendation",
      name: "teamManagerDecision",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      label: "Team manager comments",
      name: "teamManagerComments",
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      label: "Name of Team manager",
      name: "nameTeamManager",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "teamManagerAssessmentDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "teamManagerSignature",
      label: "Signature",
      // height: "130px",
      // sx: { mb: 10 },
    },
    component: SignaturePad,
  },
];
