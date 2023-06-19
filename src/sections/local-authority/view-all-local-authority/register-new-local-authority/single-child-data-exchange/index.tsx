import { RHFSwitch, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

// ----------------------------------------------------------------------

export const defaultValues = {
    localAuthorityNumber: "",
    localAuthorityName: "",
    childName: "",
    childCaseId: "",
    followTemplate: false,
};

export const singleChildDataExchangeSchema = Yup.object().shape({
    localAuthorityNumber: Yup.string().required("Field is required"),
    localAuthorityName: Yup.string().required("Field is required"),
    childName: Yup.string().required("Field is required"),
    childCaseId: Yup.string().required("Field is required"),
    followTemplate: Yup.boolean().required(),
});

export const singleChildDataExchangeFormData = [
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
        title: "Child Name",
        otherOptions: { name: "childName", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        title: "Child Case ID",
        otherOptions: { name: "childCaseId", fullWidth: true, sx: { width: { lg: "58%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    }, 
    {
        gridLength: 3,
        otherOptions: {
          name: "followTemplate",
          label: "Follow Template",
        },
        component: RHFSwitch,
      },
];


