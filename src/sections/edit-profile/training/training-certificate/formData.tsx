import * as Yup from "yup";

export const defaultValues = {
  physicallyAudit: false,
  yes: false,
  no: false,
  single: false,
  multiple: false,
  issue: new Date(),
  expiry: new Date(),
};

export const FormSchema = Yup.object().shape({
  physicallyAudit: Yup.boolean().required("Current Address is required"),
  yes: Yup.boolean().required("Current Address is required"),
  no: Yup.boolean().required("Current Address is required"),
  single: Yup.boolean().required("Single Address is required"),
  multiple: Yup.boolean().required("Multiple Address is required"),
});
