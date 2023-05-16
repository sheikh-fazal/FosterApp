import * as Yup from "yup";

export const defaultValues = {
  phone: false,
  whatsapp: false,
  sms: false,
  email: false,
  notification: false,
  both: false,
  noneof: false,
};

export const FormSchema = Yup.object().shape({
  phone: Yup.boolean().required("phone is required"),
  whatsapp: Yup.boolean().required("whatsapp is required"),
  sms: Yup.boolean().required("sms is required"),
  email: Yup.boolean().required("email is required"),
  notification: Yup.boolean().required("notification is required"),
  both: Yup.boolean().required("both is required"),
  noneof: Yup.boolean().required("noneof is required"),
});
