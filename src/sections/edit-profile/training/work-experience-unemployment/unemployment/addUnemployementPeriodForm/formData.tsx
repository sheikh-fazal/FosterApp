import * as Yup from "yup";

export const defaultValues = {
  resForLeaving: "I don't want to discuss",
  startDate: new Date(),
  endDate: new Date(),
  currentworking: false,
};

export const FormSchema = Yup.object().shape({
  resForLeaving: Yup.string().required("resForLeaving is required"),
  startDate: Yup.date().required("Issue Date Is Required"),
  endDate: Yup.date().required("Expiry Date Is Required"),
  currentworking: Yup.boolean(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT_MULTILINE",
      name: "resForLeaving",
      label: "Reason for Unemployment",
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
      label: "Currently Unemployement",
      fieldHeader: null,
    },
  ],
];
