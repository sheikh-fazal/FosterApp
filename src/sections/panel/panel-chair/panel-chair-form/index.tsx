import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import { RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/hook-form";

// =========================================================
export const panelChairData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "carerName",
      label: "Carer Name (Code)",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "option 1", label: "Madiha Iffat" }],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Time",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFTimePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "caseName",
      label: "Case Name",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "option 1", label: "Case123" }],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      placeholder: "01/01/2010",
      label: "Date Minutes Completed",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      placeholder: "01/01/2010",
      label: "Date Submitted to chair for Recommendation",
      name: "uploadDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "status",
      label: "Status",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "pending", label: "pending" }],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    title: "submitted to ADM for approval:",
    otherOptions: {
      name: "approval",
      options: ["Yes", "No"],
      fullWidth: true,
    },
    component: RHFRadioGroup,
    sx: { display: "flex", alignItem: "center", gap: "30px" },
    gridSize: { xs: 12 },
  },
  {
    gridLength: 6,
    requireFileUpload: true,
  },

  {
    gridLength: 12,
    otherOptions: {
      name: "minutes",
      multiline: true,
      label: "Minutes",
      minRows: 2,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
];
