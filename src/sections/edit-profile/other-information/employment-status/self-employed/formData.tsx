import * as Yup from "yup";

export const defaultValues = {
  iNum: "Orcalo Holdings",
  utr: "XYZ",
};

export const FormSchema = Yup.object().shape({
  iNum: Yup.string(),
  utr: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "iNum",
      label: "National Insurance No.",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "utr",
      label: "UTR",
      fieldHeader: null,
    },
  ],
];
