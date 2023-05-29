import * as Yup from "yup";

export const defaultValues = {
  cname: "Orcalo Holdings",
  cnum: "XYZ",
  payTextCode: "ZOTI4AX",
  nationalInsNum: "4J5KI",
};

export const FormSchema = Yup.object().shape({
  cname: Yup.string(),
  cnum: Yup.string(),
  payTextCode: Yup.string(),
  nationalInsNum: Yup.string(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "cname",
      label: "Company Name*",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "cnum",
      label: "Company No*",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "payTextCode",
      label: "Pay Tax Code*",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "nationalInsNum",
      label: "National Insurance No.*",
      fieldHeader: null,
    },
  ],
];
