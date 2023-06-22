import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

export const formFields = [
  {
    title: "Child Code",
    gridLength: 6,
    otherOptions: {
      name: "childCode",
      select: true,
      options: [{ value: "Diasabeled Choice", label: "Diasabeled Choice" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 12,
    heading:
      "What are the needs of this Child/Young Person? How has the Carer met these needs over the course of the placements",
  },
  {
    title: "(If a trans-racial placement, how is the child’s needs being met)",
    gridLength: 12,
    otherOptions: {
      name: "childNeeds",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Independence Seld-care Skills",
    gridLength: 12,
    otherOptions: {
      name: "seldCareSkills",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Social Presentation Leisure Skills",
    gridLength: 12,
    otherOptions: {
      name: "leisureSkills",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Contact",
    gridLength: 12,
    otherOptions: {
      name: "contact",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Other issues or Concerns",
    gridLength: 12,
    otherOptions: {
      name: "otherIssues",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Statement from Child/Young Person",
    gridLength: 12,
    otherOptions: {
      name: "statementFromPerson",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    heading: "Audit Data",
  },
  {
    title: "Audit Date",
    gridLength: 6,
    otherOptions: {
      name: "auditDate",
    },
    component: RHFDatePicker,
  },
  {
    title: "Audit Type",
    gridLength: 6,
    otherOptions: {
      name: "auditType",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    title: "Audit Outcome",
    gridLength: 6,
    otherOptions: {
      name: "auditOutcome",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    title: "Participants of Audit",
    gridLength: 6,
    otherOptions: {
      name: "participantOfAudit",
    },
    component: RHFTextField,
  },
  {
    title: "Audit Agenda",
    gridLength: 6,
    otherOptions: {
      name: "auditAgenda",
    },
    component: RHFTextField,
  },
  {
    title: "Audit Recommendations Level",
    gridLength: 6,
    otherOptions: {
      name: "auditRecommendationsLevel",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    title: "Audit Recommendations Type",
    gridLength: 6,
    otherOptions: {
      name: "auditRecommendationsType",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    title: "Audit Meeting Minutes",
    gridLength: 6,
    otherOptions: {
      name: "auditMeetingMinutes",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    title: "Recommendations Details",
    gridLength: 12,
    otherOptions: {
      name: "recommendationsDetails",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Upload Meeting Record",
    gridLength: 6,
    otherOptions: {
      name: "uploadMeetingRecord",
    },
    // component: RHFUploadFile,
    requireFileUpload: true,
  },
  {
    title: "Due Date",
    gridLength: 6,
    otherOptions: {
      name: "dueDate",
    },
    component: RHFDatePicker,
  },
];
