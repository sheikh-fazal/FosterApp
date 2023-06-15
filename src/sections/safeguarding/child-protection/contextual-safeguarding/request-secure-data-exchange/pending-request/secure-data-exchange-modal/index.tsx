import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import * as Yup from "yup";

export const initialValues = {
  localAuthorityNumber: "",
  requestedPerson: "",
  role: "",
  date: "",
  dataType: "",
};
export const formSchema = Yup.object().shape({
  localAuthorityNumber: Yup.string().required("Field is required"),
  requestedPerson: Yup.string().required("Field is required"),
  role: Yup.string().required("Field is required"),
  date: Yup.string().required("Field is required"),
  dataType: Yup.string().required("Field is required"),
});
export const SecureDataExchange = [
  {
    gridLength: 6,
    title: "Local Authority Number",
    otherOptions: {
      size: "small",
      name: "localAuthorityNumber",
      fullWidth: true,
      type: "text",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Requested By (IFA Requested Person)",
    otherOptions: {
      size: "small",
      name: "requestedPerson",
      fullWidth: true,
      type: "text",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Role",
    otherOptions: {
      size: "small",
      name: "role",
      fullWidth: true,
      type: "text",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Date",
    otherOptions: {
      name: "date",
      size: "small",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    title: "Data Type",
    otherOptions: {
      size: "small",
      name: "dataType",
      fullWidth: true,
      select: true,
      options: [
        { value: "Request for Single Data", label: "Request for Single Data" },
        { value: "Request for Bulk Data", label: "Request for Bulk Data" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 12,
    title: "Other Details",
    otherOptions: {
      name: "otherDetails",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      size: "small",
      type: "text",
    },
    component: RHFTextField,
  },
];
