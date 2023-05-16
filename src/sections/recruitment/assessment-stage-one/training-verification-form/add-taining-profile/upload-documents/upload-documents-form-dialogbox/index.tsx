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
    ],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Document Date",
      name: "documentDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "Password To Open Document",
      name: "passwordToOpenDocument",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "chooseFile",
      label: "Choose File",
    },
    component: RHFTextField,
  }
];
