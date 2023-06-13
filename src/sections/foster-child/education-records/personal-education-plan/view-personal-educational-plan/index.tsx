import {
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const EditPersonalEducationPlanData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "school",
      label: "School",
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "PEP Date",
      name: "pepDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    title: 'On File',
    otherOptions: {
      size: 'small',
      name: 'docType',
      fullWidth: true,
      select: true,
      options: [{ value: 'value', label: 'label' }]
    },
    component: RHFSelect
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      label: "Comments",
      name: "comments",
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
