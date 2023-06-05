import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const gpDetailsInfoFormValues = {
  referralToCAMHS: "",
  CAMHSappointment: "",
  referralDate: "",
  appointmentDate: "",
  anyOtherTherapy: "",
  therapistName:"",
  therapyArrangements:"",
  uncheckOption1:"",
  uncheckOption2:"",
  uncheckOption3:"",
  childInTherapy:""
};


export const defaultValueGpDetailsInfoForm = (data: any = gpDetailsInfoFormValues) => {
  return {
    referralToCAMHS: data.referralToCAMHS,
    CAMHSappointment: data.CAMHSappointment,
    referralDate: data.referralDate,
    appointmentDate: data.appointmentDate,
    anyOtherTherapy: data.anyOtherTherapy,
    therapistName:data.therapistName,
    therapyArrangements:data.email,
    uncheckOption1:data.uncheckOption1,
    uncheckOption2:data.uncheckOption2,
    uncheckOption3:data.uncheckOption3,
    childInTherapy:data.childInTherapy
  };
};

export const gpDetailsFormSchema = Yup.object().shape({
  referralToCAMHS: Yup.string()
    .required("Physician name is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    CAMHSappointment: Yup.string()
    .required("Physician type is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    referralDate: Yup.string()
    .required("Address is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    appointmentDate: Yup.string()
    .required("City is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    anyOtherTherapy: Yup.string()
    .required("Telephone is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    therapistName: Yup.string()
    .required("Mobile phone is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    therapyArrangements: Yup.string()
    .required("Email is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    uncheckOption1: Yup.string()
    .required("County is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    uncheckOption2: Yup.string()
    .required("Country is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    uncheckOption3: Yup.string()
    .required("Postal code is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    childInTherapy: Yup.string()
    .required("Postal code is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
});

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
      name: "CAMHSappointment",
      label: "CAMHS Appointment",
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
      name: "anyOtherTherapy",
      label: "Any Other Therapy",
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFCheckbox,
  },
  {
    id: 6,
    componentProps: {
      fullWidth: true,
      name: "therapistName",
      label: "Therapist Name / Address",
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
      name: "therapyArrangements",
      label: "Therapy Arrangements",
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
      name: "uncheckOption",
      label: "Uncheck Options",
      disabled: isFieldDisable,
    },
    gridLength: 4,
    component: RHFCheckbox,
  },
  {
    id: 9,
    componentProps: {
      name: "uncheckOption",
      label: "Uncheck Options",
      disabled: isFieldDisable,
    },
    gridLength: 4,
    component: RHFCheckbox,
  },
  {
    id: 10,
    componentProps: {
      name: "uncheckOption",
      label: "Uncheck Options",
      disabled: isFieldDisable,
    },
    gridLength: 4,
    component: RHFCheckbox,
  },
  {
    id: 11,
    componentProps: {
      name: "childInTherapy",
      label: "Is this Child Engaged in therapy as identified in the Care Plan?",
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
