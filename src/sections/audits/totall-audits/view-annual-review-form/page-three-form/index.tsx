import { RHFTextField } from "@root/components/hook-form";

export const formFields = [
  {
    title: "Complaits or Allegation during period under review",
    gridLength: 12,
    otherOptions: {
      name: "allegation",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Significant changes/events for Carers since last review",
    gridLength: 12,
    otherOptions: {
      name: "significantChanges",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Impact of Foresting On Family",
    gridLength: 12,
    otherOptions: {
      name: "impact",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    heading: "Experience of working with birth parent(s)",
  },
  {
    title: "Impact of Foresting On Family",
    gridLength: 12,
    otherOptions: {
      name: "impact2",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    heading: "Working relationship with the Agency",
  },
  {
    title:
      "What specific prepration / training have the carer/s to assist them to become foster carers (First Review ONLY)?",
    gridLength: 12,
    otherOptions: {
      name: "prepration",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Support for Carers",
    gridLength: 12,
    otherOptions: {
      name: "support",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    heading: "Working relationship with professional",
  },
  {
    title: "Supervising Social Workers",
    gridLength: 12,
    otherOptions: {
      name: "socialWorkers",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Other Professionals",
    gridLength: 12,
    otherOptions: {
      name: "otherProfessionals",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Other Foster Carers",
    gridLength: 12,
    otherOptions: {
      name: "otherFosterCarers",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Procedures",
    gridLength: 12,
    otherOptions: {
      name: "procedures",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
];
