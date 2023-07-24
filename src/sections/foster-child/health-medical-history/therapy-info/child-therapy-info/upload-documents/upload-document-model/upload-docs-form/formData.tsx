import * as Yup from "yup";

export const defaultValues = {
  docsType: "PDF",
  docsDate: new Date(),
  docsPass: "",
};

export const FormSchema = Yup.object().shape({
  docsType: Yup.string().required("docsType is required"),
  docsDate: Yup.date()
    .typeError("date is required")
    .required("date is required"),
  docsPass: Yup.string().required("docsPass is required"),
});

export const fieldsInfo = [
  [
    {
      type: "SELECT",
      name: "docsType",
      label: "Document Type",
      fieldHeader: null,
      options: ["PDF", "DOC", "DOCX"],
    },
  ],

  [
    {
      type: "DATE_PICKER",
      name: "Document Date",
      label: "Document Date ",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "docsPass",
      label: "Password to Open Document",
      fieldHeader: null,
    },
  ],
];
