import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const UPLOADDOCUMENTSFORMDATA = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "documentType",
      label: "Document Type",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "word", label: "Word" },
      { value: "pdf", label: "PDF" },
    ],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Document Date",
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },

  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Password To Open Document",
      name: "password",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
