import { Typography } from "@mui/material";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";
import { designatedAuthority } from "@root/dropdown-data/designatedAuthority";
import { educationStage } from "@root/dropdown-data/educationStage";
import { personalEducationPlan } from "@root/dropdown-data/personalEducationPlan";
import { SCHOOLTYPE } from "@root/dropdown-data/schoolType";
import { schoolYear } from "@root/dropdown-data/schoolYear";

export const sanctionDetailsDefaultValues = {
  reviewDate: "",
  outLineBehaviour: "",
  sanctionAgrees: "",
};

export const sanctionDetailsFormDataFunction = (isFieldDisable = false) => [
  {
    id: 3,
    title: "Date of Review",
    otherOptions: {
      name: "reviewDate",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
    // format: (date: any) => {
    //   return new Date(date);
    // },
  },
  {
    id: 3,
    gridLength: 12,
    title: "OutLine Behaviour",
    otherOptions: {
      name: "outLineBehaviour",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    title: "Sanction Agreed:",
    otherOptions: {
      name: "sanctionAgrees",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    component: RHFTextField,
  },
];

export const defaultValueEducationInfoForm = (
  data: any = sanctionDetailsDefaultValues
) => {
  return {
    reviewDate: data?.reviewDate,
    outLineBehaviour: data?.outLineBehaviour,
    sanctionAgrees: data?.sanctionAgrees,
  };
};
