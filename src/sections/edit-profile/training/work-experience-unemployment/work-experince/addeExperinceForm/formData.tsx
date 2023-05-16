import * as Yup from "yup";

export const defaultValues = {
  empName: "Ali",
  empPosition: "Senior",
  exp: "I am ajsas ajsas",
  resForLeaving: "I don't want to discuss",
  startDate: new Date(),
  endDate: new Date(),
  currentworking: false,
};

export const FormSchema = Yup.object().shape({
  empName: Yup.string()
    .required("trainingName is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  empPosition: Yup.string().required("empPosition is required"),
  exp: Yup.string().required("Experience is required"),
  resForLeaving: Yup.string().required("resForLeaving is required"),
  startDate: Yup.date().required("Issue Date Is Required"),
  endDate: Yup.date().required("Expiry Date Is Required"),
  currentworking: Yup.boolean(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "empName",
      label: "Name of Employer",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "empPosition",
      label: "Position with the employer",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE",
      name: "exp",
      label: "Experience",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE",
      name: "resForLeaving",
      label: "Reason for leaving",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "DATE_PICKER",
      name: "startDate",
      label: "Start Date",
      fieldHeader: null,
    },
    {
      type: "DATE_PICKER",
      name: "endDate",
      label: "End Date",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "currentworking",
      label: "Currently working here",
      fieldHeader: null,
    },
  ],
];
