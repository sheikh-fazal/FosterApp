import { RHFSelect, RHFTextField } from "@root/components/hook-form";

import * as Yup from 'yup';

export const initialValues = {
    parameter: '',
    setting: '',
    description: '',
}
export const formSchema = Yup.object().shape({
    parameter: Yup.string().required('Field is required'),
    setting: Yup.string().required('Field is required'),
    description: Yup.string().required('Field is required'),
})
export const AddTrainingClockEngine = [
    {
        id: 1,
        title: 'Parameters',
        componentProps: {
            name: "parameter",
            fullWidth: true,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        title: 'Settings',
        componentProps: {
            name: "setting",
            fullWidth: true,
            select: true,
            sx: { mb: 1 },
        },
        options: [
            { value: "twoYears", label: "2 Years" },
            { value: "threeYears", label: "3 Years" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 3,
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