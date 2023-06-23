import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const pageOneFormData = {
  details: [
    {
      label: "Enter Name (Code):",
      value: "Sangeetha, Subramanian (FCC-3)",
    },
    {
      label: "Supervising Social Worker:",
      value: "Not Assigned",
    },
    {
      label: "Address:",
      value: "119 Brampton Road Bexleyheath, KENT DA7 4SL",
    },
    {
      label: "Phone:",
      value: "07415901391",
    },
    {
      label: "Mobile:",
      value: "07415901391",
    },
    {
      label: "Email:",
      value: "sangeetha3012@gmail.com",
    },
  ],
  formFields: [
    {
      title: "Review Written by (if other than the Supervising Social Worker)",
      gridLength: 6,
      otherOptions: {
        name: "reviewWritten",
      },
      component: RHFTextField,
    },
    {
      tag: <br />,
    },
    {
      title: "Review Type",
      gridLength: 6,
      otherOptions: {
        name: "reviewType",
        select: true,
        options: [{ value: "Diasabeled Choice", label: "Diasabeled Choice" }],
      },
      component: RHFSelect,
    },
    {
      gridLength: 6,
      otherOptions: {
        name: "onFile",
        label: "on File",
        sx: { mt: "20px" },
      },
      component: RHFCheckbox,
    },
    {
      title: "Review Date",
      gridLength: 6,
      otherOptions: {
        name: "reviewDate",
      },
      component: RHFDatePicker,
    },
    {
      title: "Next Review Date",
      gridLength: 6,
      otherOptions: {
        name: "nextReviewDate",
      },
      component: RHFDatePicker,
    },
    {
      title: "Prevoius Review Date",
      gridLength: 6,
      otherOptions: {
        name: "preReviewDate",
      },
      component: RHFDatePicker,
    },
    {
      title: "Confirmation of Review Held Date:",
      gridLength: 6,
      otherOptions: {
        name: "confirmationofReviewHeldDate",
      },
      component: RHFDatePicker,
    },
    {
      gridLength: 6,
      otherOptions: {
        name: "hasReviewTakenPlace",
        label: "Has Review Taken Place",
      },
      component: RHFCheckbox,
    },
    {
      title: "Purpose Of Review:",
      gridLength: 12,
      otherOptions: {
        name: "purposeOfReview",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      title: "Independent Review Offer:",
      gridLength: 12,
      otherOptions: {
        name: "independentReviewOffer",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      title: "Next Panel Date:",
      gridLength: 6,
      otherOptions: {
        name: "nextPanelDate",
      },
      component: RHFDatePicker,
    },
    {
      title: "Previous Panel Date:",
      gridLength: 6,
      otherOptions: {
        name: "previousPanelDate",
      },
      component: RHFDatePicker,
    },
    {
      title: "Current Approval Date:",
      gridLength: 6,
      otherOptions: {
        name: "currentApprovalDate",
      },
      component: RHFDatePicker,
    },
    {
      title: "Terms Of Approval:",
      gridLength: 12,
      otherOptions: {
        name: "termsOfApproval",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      title: "Pets Info:",
      gridLength: 12,
      otherOptions: {
        name: "petsInfo",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      title: "Previous Review Officer Recommendation",
      gridLength: 12,
      otherOptions: {
        name: "previousReviewOfficerRecommendation",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      title: "Previous Panel Recommendation",
      gridLength: 12,
      otherOptions: {
        name: "previousPanelRecommendation",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      title: "Issues for Discussion at Review Time",
      gridLength: 12,
      otherOptions: {
        name: "issuesforDiscussionatReviewTime",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      title: "Dates of Supervising Social Worker Visits",
      gridLength: 12,
      otherOptions: {
        name: "datesofSupervisingSocialWorkerVisits",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      title: "Dates Of Unannounced Visit",
      gridLength: 12,
      otherOptions: {
        name: "datesOfUnannouncedVisit",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        name: "safeCaringPolicyisUptodate",
        label: "Safe Caring Policy is Up to date?",
      },
      component: RHFCheckbox,
    },
    {
      title: "Mettings",
      gridLength: 12,
      otherOptions: {
        name: "mettings",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      title: "Number of rooms currently used for the purpose of fostering?",
      gridLength: 6,
      otherOptions: {
        name: "numberofRooms",
      },
      component: RHFTextField,
    },
    {
      title: "Foster Carer Current Placement",
      gridLength: 12,
      otherOptions: {
        name: "FosterCarerCurrentPlacement",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      title: "Sleeping Arrangments",
      gridLength: 12,
      otherOptions: {
        name: "sleepingArrangments",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        name: "carerRegisteredChildminder",
        label: "Is Carer a Registered Childminder?",
      },
      component: RHFCheckbox,
    },
  ],
};
