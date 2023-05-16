////
import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";

const todayDate = dayjs().format("MM/DD/YYYY");

export const defaultValues = {
  reviewDate: new Date(todayDate),
  currentMedicalIssue: "Text",
};

export const FormSchema = Yup.object().shape({
  reviewDate: Yup.date().required("required"),
  currentMedicalIssue: Yup.string().required("required"),
});

export const annualReviewBData = [
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "reviewDate",
      label: "Review Date:",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },

  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "currentMedicalIssue",
      label:
        "Do the carers have any current medical issues that have not been noted since the last Review/Medical?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as AnnualReviewB } from "./AnnualReviewB";
