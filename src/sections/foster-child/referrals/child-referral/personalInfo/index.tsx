import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const PersonalInfoFormData = [
  {
    id: 1,
    componentProps: {
      name: "childCode",
      label: "Child Code",
    },
    component: RHFTextField,
    md: 6,
  },
];

export const defaultValues = {
  childCode: "",
};

export const validationSchema = Yup.object().shape({
  childCode: Yup.string().trim().required("Field is Required"),
});

export { default as PersonalInfoForm } from "./PersonalInfoForm";
