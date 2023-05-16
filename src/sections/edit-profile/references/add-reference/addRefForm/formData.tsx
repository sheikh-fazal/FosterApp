import * as Yup from "yup";

export const defaultValues = {
  refType: "Student",
  refname: "Ali",
  refcontact: "+9230154123654",
  refemail: "abc@gmail.com",
  canwereq: false,
};

export const FormSchema = Yup.object().shape({
  refType: Yup.string()
    .required("refType is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  refname: Yup.string()
    .required("refname is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  refcontact: Yup.string().required("refcontact is required"),
  refemail: Yup.string().required("Email is required").email("Invalid Email"),
  canwereq: Yup.boolean().required("canwereq is required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "refType",
      label: "Reference Type",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "refname",
      label: "Full name of the referee",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "refcontact",
      label: "Contact number of the referee",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "refemail",
      label: "Email ID of the referee",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "canwereq",
      label: "Can we request reference from this contact now?",
      fieldHeader: null,
    },
  ],
];
