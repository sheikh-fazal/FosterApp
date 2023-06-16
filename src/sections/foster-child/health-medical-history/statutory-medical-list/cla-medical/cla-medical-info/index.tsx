import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const claMedicalInfoFormValues = {
  medicalDate: "",
  dueDate: "",
  onFile: "",
  result: "",
  comments: "",
};

export const defaultValueClaMedicalInfoForm = (
  data: any = claMedicalInfoFormValues
) => {
  return {
    medicalDate: data?.medicalDate,
    dueDate: data?.dueDate,
    onFile: data?.onFile,
    result: data?.result,
    comments: data?.comments,
  };
};

export const claMedicalInfoFormSchema = Yup.object().shape({
  medicalDate: Yup.date()
    .typeError("Medical Date is required")
    .required("Medical Date is required"),
  dueDate: Yup.date()
    .typeError("Due Date  is required")
    .required("Due Date  is required"),
  onFile: Yup.string()
    .required("on File is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  result: Yup.string()
    .required("Result is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  comments: Yup.string()
    .required("Comments is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
});

export const claMedicalInfoFormDataFunction = (isFieldDisable = false) => [
  {
    id: 1,
    componentProps: {
      name: "medicalDate",
      label: "Medical Date",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 2,
    componentProps: {
      name: "dueDate",
      label: "Due Date",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
    component: RHFSelect,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "onFile",
      label: "On File",
      select: true,
      options: [
        {
          id: 1,
          label: "Eye",
          text: "Eye",
        },
        {
          id: 2,
          label: "Physician",
          text: "Physician",
        },
      ],
    },
  },
  {
    id: 4,
    componentProps: {
      fullWidth: true,
      name: "result",
      label: "Result",

      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 5,
    componentProps: {
      fullWidth: true,
      name: "comments",
      label: "Comments",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
