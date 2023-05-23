import { Grid } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

import * as Yup from 'yup';

export const NotificationSettingsInitialValues = {
    configurationItem: '',
    value: '',
    notificationType: '',
    description: '',
}
export const NotificationSettingsFormSchema = Yup.object().shape({
    configurationItem: Yup.string().required('Field is required'),
    value: Yup.string().required('Field is required'),
    notificationType: Yup.string().required('Field is required'),
    description: Yup.string().required('Field is required'),
})
export const NotificationSettings = [
    {
        id: 1,
        title: 'Configuration Item',
        componentProps: {
            name: "configurationItem",
            fullWidth: true,
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        title: 'Value',
        componentProps: {
            name: "value",
            fullWidth: true,
            select: true,
            // sx: { mb: 1 },
        },
        options: [
            { value: "option 1", label: "option 1" },
            { value: "option 2", label: "option 2" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 3,
        title: 'Notification Type',
        componentProps: {
            name: "notificationType",
            fullWidth: true,
            select: true,
           
        },
        options: [
            { value: "option 1", label: "option 1" },
            { value: "option 2", label: "option 2" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 1,
        title: '',
        componentProps: {
            name: "",
            fullWidth: true,
            // sx: { mb: 1 },
        },
        component: Grid,
        md: 6,
    },
    {
        id: 4,
        title: 'Description',
        componentProps: {
            name: "description",
            multiline: true,
            minRows: 3,
            sx: { mb: 2 },
        },
        component: RHFTextField,
        md: 12,
    },


]