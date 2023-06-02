import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const healthTherapyInfoFormDataFunction = (isFieldDisable = false) => [
  {
    id: 1,
    componentProps: {
      name: "referralToCAMHS",
      label: "Referral to CAMHS",
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 2,
    componentProps: {
      name: "referralToCAMHS",
      label: "Referral to CAMHS",
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 3,
    componentProps: {
      name: "referralDate",
      label: "Referral Date",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 4,
    componentProps: {
      name: "appointmentDate",
      label: "Appointment Date",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 5,
    componentProps: {
      name: "referralToCAMHS",
      label: "Referral to CAMHS",
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 6,
    componentProps: {
      fullWidth: true,
      name: "additionalSourceInformation",
      label: "Additional Source Information",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 7,
    componentProps: {
      fullWidth: true,
      name: "additionalSourceInformation",
      label: "Additional Source Information",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 8,
    componentProps: {
      name: "referralToCAMHS",
      label: "Referral to CAMHS",
      disabled: isFieldDisable,
    },
    gridLength: 4,
    component: RHFCheckbox,
  },
  {
    id: 9,
    componentProps: {
      name: "referralToCAMHS",
      label: "Referral to CAMHS",
      disabled: isFieldDisable,
    },
    gridLength: 4,
    component: RHFCheckbox,
  },
  {
    id: 10,
    componentProps: {
      name: "referralToCAMHS",
      label: "Referral to CAMHS",
      disabled: isFieldDisable,
    },
    gridLength: 4,
    component: RHFCheckbox,
  },
  {
    id: 11,
    componentProps: {
      name: "firstName",
      label: "First Name",
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
