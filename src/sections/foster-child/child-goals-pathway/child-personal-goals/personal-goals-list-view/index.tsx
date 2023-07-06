import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const childPersonalGoalListViewData = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `Personal Goals`,
  },
  {
    id: 1,
    componentProps: {
      name: "goalName",
      fullWidth: true,
      label: "Goal Name",
      multiline: true,
    //   minRows: 3,
    },
    gridLength: 6,

    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "status",
      label: "Status",
      multiline: true,
      fullWidth: true,
    //   minRows: 3,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "date",
      label: "Date",
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "comments",
      label: "Comments",
    },
    component: RHFTextField,
  },
];
