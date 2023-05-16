import * as Yup from "yup";

export const defaultValues = {
  addressFirstLine: "123 Sr#32  Affleck road",
  addressSecondLine: "Rawalpindi 6th road",
  town: "Colchester",
  county: "Essex",
  country: "Pakistan",
  postcode: "C04 3xR",
  from: new Date(),
  to: new Date(),
  currentAddress: false,
};

export const FormSchema = Yup.object().shape({
  addressFirstLine: Yup.string()
    .required("addressFirstLine is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  addressSecondLine: Yup.string()
    .required("addressSecondLine is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  town: Yup.string().required("town is required"),
  county: Yup.string()
    .required("county is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 25 characters"),
  country: Yup.string().required("country is required"),
  postcode: Yup.string().required("postcode is required"),
  from: Yup.string().required("From is required"),
  to: Yup.string().required("to is required"),
  currentAddress: Yup.boolean().required("Current Address is required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "addressFirstLine",
      label: "Address First Line",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "addressSecondLine",
      label: "Address Second Line",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "town",
      label: "Town/City",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "county",
      label: "County",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "country",
      label: "Country Name",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "postcode",
      label: "Post Code",
      fieldHeader: null,
    },
  ],
];
