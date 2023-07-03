import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const pageTwoFormData = {
  formFields: [
    {
      title: "Review Date",
      gridLength: 6,
      otherOptions: {
        name: "reviewDate",
      },
      component: RHFDatePicker,
    },
    {
      title:
        "Do the carer/s have any current medical issues that have not been noted since the last Review/Medical?",
      gridLength: 12,
      otherOptions: {
        name: "medicalIssues",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
  ],
};
