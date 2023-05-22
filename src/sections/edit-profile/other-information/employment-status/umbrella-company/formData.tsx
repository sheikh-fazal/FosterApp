import * as Yup from "yup";

export const defaultValues = {
  uComName: "Orcalo Holdings",
  uComPhone: "XYZ",
  uComEmail: "creative@test.com",
};

export const FormSchema = Yup.object().shape({
  uComName: Yup.string(),
  uComPhone: Yup.string(),
  uComEmail: Yup.string().required("Email is required").email("Invalid Email"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "uComName",
      label: "Umbrella Company Name*",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "uComPhone",
      label: "Umbrella Company Phone*",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "uComEmail",
      label: "Umbrella Company Email*",
      fieldHeader: null,
    },
    {
      type: null,
      name: "nationalInsNum",
      label: "National Insurance No.*",
      fieldHeader: null,
    },
  ],
];
