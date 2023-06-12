import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// ----------------------------------------------------------------------

export const defaultValues = {
    localAuthorityNumber: "",
    localAuthorityName: "",
    name: "",
    telephoneNo: "",
    email: "",
    designation: "",
    localAuthorityPhone: "",
    localAuthorityEmail: "",
    address: "",
};

export const laBasicInformationSchema = Yup.object().shape({
    localAuthorityNumber: Yup.string().required("Field is required"),
    localAuthorityName: Yup.string().required("Field is required"),
    name: Yup.string().required("Field is required"),
    telephoneNo: Yup.string().required("Field is required").min(4, "Mininum 4 characters").max(15, "Maximum 15 characters"),
    email: Yup.string().required("Email is required").email("Invalid Email"),
    designation: Yup.string().required("Field is required"),
    localAuthorityPhone: Yup.string().required("Field is required"),
    localAuthorityEmail: Yup.string().required("Field is required"),
    address: Yup.string().required("Field is required"),
});

export const laBasicInformationFormData = [
    {
        gridLength: 12,
        title: "Local Authority Number",
        otherOptions: { name: "localAuthorityNumber", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        title: "Local Authority Name",
        otherOptions: { name: "localAuthorityName", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        head: "Primary Contact"
    },
    {
        gridLength: 12,
        title: "Name",
        otherOptions: { name: "name", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        title: "Telephone",
        otherOptions: { name: "telephoneNo", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    }, 
    {
        gridLength: 12,
        title: "Email ID",
        otherOptions: { name: "email", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        title: "Designation",
        otherOptions: { name: "designation", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        title: "Local Authority Phone",
        otherOptions: { name: "localAuthorityPhone", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        title: "Local Authority Email ID",
        otherOptions: { name: "localAuthorityEmail", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        title: "Address",
        otherOptions: {
          name: "address",
          multiline: true,
          minRows: 2,
          fullWidth: true,
          size: "small",
          sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" }
        },
        component: RHFTextField,
      },
];


