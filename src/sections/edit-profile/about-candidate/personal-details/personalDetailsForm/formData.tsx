import * as Yup from "yup";

export const defaultValues = {
  fname: "Ali",
  lname: "Khan",
  dob: new Date(),
  gender: "Male",
  phone: "+9230164028524",
  email: "iamemial@email.com",
  nationality: "Pakistani",
  applyingFor: "Senior Software Developer",
  linkedId: "Fooster App.",
  validLicence: "LTV",
};

export const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("fname is required"),
  lastName: Yup.string().required("lname is required"),
  dob: Yup.date().typeError("date is required").required("date is required"),
  gender: Yup.string().required("fname is required"),
  phoneNumber: Yup.string().required("phone is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  nationality: Yup.string().required("nationality is required"),
  applyingFor: Yup.string().required("applyingFor is required"),
  linkedId: Yup.string().required("linkedId is required"),
  validLicence: Yup.string().required("linkedId is required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "fname",
      label: "First Name",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "lname",
      label: "Last Name",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "DATE_PICKER",
      name: "dob",
      label: "Date of Birth",
      fieldHeader: null,
    },
    {
      type: "SELECT",
      name: "gender",
      label: "Gender",
      fieldHeader: null,
      options: ["Male", "Female"],
    },
  ],
  [
    {
      type: "TEXT",
      name: "phone",
      label: "Phone Number",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "email",
      label: "Email",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SELECT",
      name: "nationality",
      label: "Nationality",
      fieldHeader: null,
      options: ["Pakistani", "Indiani"],
    },
    {
      type: "SELECT",
      name: "applyingFor",
      label: "Job Applying For",
      fieldHeader: null,
      options: ["Senior Software Developer", "Senior Software Developer 2"],
    },
  ],
  [
    {
      type: "TEXT",
      name: "linkedId",
      label: "LinkedIn ID",
      fieldHeader: null,
    },
    {
      type: "SELECT",
      name: "validLicence",
      label: "Valid Driving Licence?",
      fieldHeader: null,
      options: ["LTV", "HTV"],
    },
  ],
];
