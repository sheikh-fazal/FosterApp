import * as Yup from "yup";

export const defaultValues = {
  accUserName: "Essex",
  bankName: "Essex",
  sortCode: "Essex",
  accNum: "Essex",
  accType: "Essex",
  accPerf: "Essex",
};

export const FormSchema = Yup.object().shape({
  accUserName: Yup.string(),
  bankName: Yup.string(),
  sortCode: Yup.string(),
  accNum: Yup.string(),
  accType: Yup.string(),
  accPerf: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "accUserName",
      label: "Account User Name",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "bankName",
      label: "Name of the Bank",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "sortCode",
      label: "Sort Code",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "accNum",
      label: "Account Number",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "accType",
      label: "Account Type",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "accPerf",
      label: "Account Preference",
      fieldHeader: null,
    },
  ],
];
