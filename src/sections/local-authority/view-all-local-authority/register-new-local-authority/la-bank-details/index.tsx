import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// ----------------------------------------------------------------------

export const defaultValues = {
    accountName: "",
    backName: "",
    accountNumber: "",
    sortCode: "",
};

export const laBackDetailsSchema = Yup.object().shape({
    accountName: Yup.string().required("Field is required"),
    backName: Yup.string().required("Field is required"),
    accountNumber: Yup.string().required("Field is required").min(4, "Mininum 4 characters").max(15, "Maximum 15 characters"),
    sortCode: Yup.string().required("Field is required").min(4, "Mininum 4 characters").max(15, "Maximum 15 characters"),
});

export const laBackDetailsFormData = [
    {
        gridLength: 12,
        title: "Bank Account Name",
        otherOptions: { name: "accountName", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        title: "Bank Name",
        otherOptions: { name: "backName", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        title: "Account Number",
        otherOptions: { name: "accountNumber", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        title: "Sort Code",
        otherOptions: { name: "sortCode", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    }, 
];


