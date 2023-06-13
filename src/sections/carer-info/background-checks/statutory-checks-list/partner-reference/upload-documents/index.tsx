import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const STATUTORY_UPLOAD_DOCUMENTS = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "documentType",
      label: "Document Type",
      select: true,
      options: [
        {
          value: "PDF",
          label: "PDF",
        },
        {
          value: "DOC",
          label: "DOC",
        },
        {
          value: "PNG",
          label: "PNG",
        },
        {
          value: "JPG",
          label: "JPG",
        },
        {
          value: "JPEG",
          label: "JPEG",
        },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 3,
    componentProps: {
      name: "documentDate",
      label: "Document Date",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "documentPassword",
      label: "Password to Open Document",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const formatters: any = {};

for (const formControl of STATUTORY_UPLOAD_DOCUMENTS) {
  if (formControl.format)
    formatters[formControl.componentProps.name] = formControl.format;
}

export const defaultValues = {
  documentType: "",
  documentDate: new Date(),
  documentPassword: "",
  file: null,
};
export const formSchema = Yup.object().shape({
  documentType: Yup.string().required("Document Type Required"),
  documentDate: Yup.date().required("Document Date Required"),
  documentPassword: Yup.string().required("Password Required"),
  file: Yup.mixed().required("File Required"),
});
