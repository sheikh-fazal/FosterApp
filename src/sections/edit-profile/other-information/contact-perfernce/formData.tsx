import * as Yup from "yup";

export const defaultValues = {
  phone: true,
  whatsapp: false,
  sms: true,
  email: false,
  notification: false,
  both: false,
  noneof: false,
};

export const FormSchema = Yup.object().shape({
  phone: Yup.boolean(),
  whatsapp: Yup.boolean(),
  sms: Yup.boolean(),
  email: Yup.boolean(),
  notification: Yup.boolean(),
  both: Yup.boolean(),
  noneof: Yup.boolean(),
});
