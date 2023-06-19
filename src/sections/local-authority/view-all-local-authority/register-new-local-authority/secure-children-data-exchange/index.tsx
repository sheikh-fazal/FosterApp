import { RHFSwitch, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// ----------------------------------------------------------------------

export const defaultValues = {
    localAuthorityNumber: "",
    localAuthorityName: "",
};

export const secureChildrenDataExchangeSchema = Yup.object().shape({
    localAuthorityNumber: Yup.string().required("Field is required"),
    localAuthorityName: Yup.string().required("Field is required"),
});

export const secureChildrenDataExchangeFormData = [
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
];


