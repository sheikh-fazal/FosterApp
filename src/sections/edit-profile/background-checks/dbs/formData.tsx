import * as Yup from "yup";

export const defaultValues = {
  haveValidDBS: "Yes",
  dbsNumber: "Essex",
  dbsIssueDate: new Date(),
  isDbsOnline: "Yes",
  dbsUpdatedServiceNo: "Essex",
};

export const FormSchema = Yup.object().shape({
  haveValidDBS: Yup.string(),
  dbsNumber: Yup.string(),
  dbsIssueDate: Yup.date(),
  isDbsOnline: Yup.string(),
  dbsUpdatedServiceNo: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "SELECT",
      name: "haveValidDBS",
      fieldHeader: null,
      options: ["Yes", "No"],
    },
    {
      type: "TEXT",
      name: "dbsNumber",
      label: "DBS (PVG) Certificate Number",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "DATE_PICKER",
      name: "dbsIssueDate",
      label: "DBS (PVG) issue Date",
      fieldHeader: null,
    },
    {
      type: "SELECT",
      name: "isDbsOnline",
      label: "Is DBS (PVG) online?",
      fieldHeader: null,
      options: ["Yes", "No"],
    },
  ],
  [
    {
      type: "TEXT",
      name: "dbsUpdatedServiceNo",
      label: "DBS (PVG) Update Service No.",
      fieldHeader: null,
    },
    {
      type: null,
    },
  ],
];
