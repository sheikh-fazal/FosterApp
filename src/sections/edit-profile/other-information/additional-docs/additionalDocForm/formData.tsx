import * as Yup from "yup";

export const defaultValues = {
  docName: "Essex",
};

export const FormSchema = Yup.object().shape({
  docName: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "docName",
      label: "Documents Name",
      fieldHeader: null,
    },
    {
      type: null,
      name: "docName",
      label: "Documents Name",
      fieldHeader: null,
    },
  ],
];
