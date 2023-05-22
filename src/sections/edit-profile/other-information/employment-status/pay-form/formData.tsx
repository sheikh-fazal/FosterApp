import * as Yup from "yup";

export const defaultValues = {
  textCode: "Yes",
  nationalCode: "Essex",
  havePs45: "No",
  optA: false,
  optB: false,
  optC: false,
  studentLoanType1: "Yes",
  postgraduateLoan: "Yes",
};

export const FormSchema = Yup.object().shape({
  textCode: Yup.string(),
  nationalCode: Yup.string(),
  havePs45: Yup.string(),
  optA: Yup.boolean(),
  optB: Yup.boolean(),
  optC: Yup.boolean(),
  studentLoanType1: Yup.string(),
  postgraduateLoan: Yup.string(),
});
