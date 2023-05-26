import { RHFTextField } from "@root/components/hook-form";

export const formData = [
  {
    gridLength: 6,
    title: "Foster carer(s)",
    otherOptions: {
      name: 'fosterCarer',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    title: "Supervising social worker",
    otherOptions: {
      name: 'socialWorker',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 13,
    title: "Changes since the last review",
    tooltip: true,
    tooltipMsg: 'Please describe any significant changes or events in your household that have impacted on your fostering since the last review. Please give any changes in household composition, or changes in employment (including any disciplinary action that may have been taken against you). How have these changes impacted on you and your family?',
    otherOptions: {
      name: 'socialWorker',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
]