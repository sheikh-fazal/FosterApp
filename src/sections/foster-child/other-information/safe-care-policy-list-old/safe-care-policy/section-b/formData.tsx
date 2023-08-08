import * as Yup from "yup";

export const defaultValues = {
  privacy: "",
  dress: "",
  lang: "",
  touch: "",
  sortDiffs: "",
  displainAndSan: "",
  managingSexBeh: "",
  bedTimeRoutine: "",
  bathRoutine: "",
  transportingChild: "",
  babySitting: "",
  confidentiality: "",
  pets: "",
  computers: "",
  dayLog: "",
  contactArrangements: "",
  offendingBeh: "",
  other: "",
  child: "",
};

export const FormSchema = Yup.object().shape({
  privacy: Yup.string().required("privacy is required"),
  dress: Yup.string().required("privacy is required"),
  touch: Yup.string().required("privacy is required"),
  displainAndSan: Yup.string().required("privacy is required"),
  managingSexBeh: Yup.string().required("privacy is required"),
  bedTimeRoutine: Yup.string().required("privacy is required"),
  bathRoutine: Yup.string().required("privacy is required"),
  transportingChild: Yup.string().required("privacy is required"),
  babySitting: Yup.string().required("privacy is required"),
  confidentiality: Yup.string().required("privacy is required"),
  pets: Yup.string().required("privacy is required"),
  computers: Yup.string().required("privacy is required"),
  dayLog: Yup.string().required("privacy is required"),
  contactArrangements: Yup.string().required("privacy is required"),
  offendingBeh: Yup.string().required("privacy is required"),
  other: Yup.string().required("privacy is required"),
  child: Yup.string().required("privacy is required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "privacy",
      label: "Privacy",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "dress",
      label: "Dress",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "lang",
      label: "Language",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "touch",
      label: "Touch",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "sortDiffs",
      label: "Sorting out differences",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "displainAndSan",
      label: "Discipline and sanctions",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "Managing sexualised behaviour",
      label: "managingSexBeh",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "bedTimeRoutine",
      label: "Bedtime routines",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "bathRoutine",
      label: "Bathroom routines",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "transportingChild",
      label: "Transporting Children",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "babySitting",
      label: "Baby sitting / Child Minding",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "confidentiality",
      label: "Confidentiality",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "pets",
      label: "Pets",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "computers",
      label: "Computers",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "dayLog",
      label: "Day log recording",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "contactArrangements",
      label: "Contact Arrangements",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "offendingBeh",
      label: "Offending Behaviour",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "other",
      label: "Other",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE_TWO_LINES",
      name: "child",
      label: "Child / Young Person's Comments",
      fieldHeader: null,
    },
  ],
];
