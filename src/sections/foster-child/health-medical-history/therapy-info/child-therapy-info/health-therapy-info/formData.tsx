import * as Yup from "yup";

export const defaultValues = {
  referraltoCAMHS: true,
  CAMHSAppointment: false,
  referralDate: new Date(),
  appointmentDate: new Date(),
  anyOtherTherapy: false,
  therapistNameAddress: "",
  therapyArrangements: "",
  isChildEng: "",
};

export const FormSchema = Yup.object().shape({
  referraltoCAMHS: Yup.boolean(),
  CAMHSAppointment: Yup.boolean(),
  referralDate: Yup.date()
    .typeError("date is required")
    .required("date is required"),
  appointmentDate: Yup.date()
    .typeError("date is required")
    .required("date is required"),
  anyOtherTherapy: Yup.boolean(),
  therapistNameAddress: Yup.string(),
  therapyArrangements: Yup.string(),
  isChildEng: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "DATE_PICKER",
      name: "referralDate",
      label: "Referral Date",
      fieldHeader: null,
    },
    {
      type: "DATE_PICKER",
      name: "appointmentDate",
      label: "Appointment Date",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "CHECKBOX",
      name: "anyOtherTherapy",
      label: "Any Other Therapy",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "therapistNameAddress",
      label: "Therapist Name / Address",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "therapyArrangements",
      label: "Therapy Arrangements",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SELECT",
      name: "isChildEng",
      label:
        "Is this Child Engaged in therapy as identified in the Care Plan ?",
      fieldHeader: null,
      options: ["YES", "NO"],
    },
    {
      type: null,
      name: "linkedin",
      label: "LinkedIn ID",
      fieldHeader: null,
    },
  ],
];
