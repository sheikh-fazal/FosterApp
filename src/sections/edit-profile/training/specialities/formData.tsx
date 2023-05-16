import * as Yup from "yup";

export const defaultValues = {
  followedIandP: false,
  workedInTeam: false,
  caring: false,
  commSkills: false,
  movingAndHan: false,
  observational: false,
  observationSkills: false,
  orgSkills: false,
  willing: false,
  willingForPersonalCare: false,
  others: "Put Your Opinion Here",
};

export const FormSchema = Yup.object().shape({
  followedIandP: Yup.boolean(),
  workedInTeam: Yup.boolean(),
  caring: Yup.boolean(),
  commSkills: Yup.boolean(),
  movingAndHan: Yup.boolean(),
  observationSkills: Yup.boolean(),
  orgSkills: Yup.boolean(),
  willing: Yup.boolean(),
  willingForPersonalCare: Yup.boolean(),
  others: Yup.string().required("Am I Optional?"),
});

export const fieldsInfo = [
  [
    {
      type: "SWITCH",
      name: "followedIandP",
      label: "Able to follow instructions & procedures",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "workedInTeam",
      label: "Able to work in a team but use own initiative",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "caring",
      label: "Caring and kind",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "commSkills",
      label: "Communication skills, including listening",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "movingAndHan",
      label: "Moving and handling",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "observationSkills",
      label: "Observational skills",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "orgSkills",
      label: "Organising skills",
      fieldHeader: null,
    },
    {
      type: "SWITCH",
      name: "willing",
      label: "Willing to be hands-on with patients",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "willingForPersonalCare",
      label: "Willing to do personal care tasks",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE",
      name: "others",
      label: "Others",
      fieldHeader: null,
    },
  ],
];
