import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";


export const RegAssessmentModalData = [
    {
        id: 1,
        // gridLength: 6,
        componentProps: {
            name: "consultationdate ",
            label: "Consultation date",
            fullWidth: true, sx: { mb: 1 },
        },
        component: RHFDatePicker,
        md: 6,
    },
    {
        id: 2,
        componentProps: {
            name: "consultationdTime ",
            label: "Consultation Time",
            fullWidth: true, sx: { mb: 1 },
        },
        component: RHFTimePicker,
        md: 6,
    },
    {
        id: 3,
        componentProps: {
            name: "sWName",
            label: "SW Name",
            fullWidth: true,
            size: "small",
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 12,
    },
    {
        id: 4,
        componentProps: {
            name: "meetingAttendees",
            label: 'Meeting Attendees',
            multiline: true,
            minRows: 3,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 12,
    },
    {
        id: 5,
        componentProps: {
            name: "meetingOutcomes",
            label: 'Meeting outcomes',
            multiline: true,
            minRows: 3,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 12,
    },
    {
        id: 6,
        componentProps: {
            name: "meetingAction",
            label: 'Meeting Action',
            multiline: true,
            minRows: 3,
            sx: { mb: `` },
        },
        component: RHFTextField,
        md: 12,
    },
    {
        id: 7,
        componentProps: {
            name: "nextConsultationDate  ",
            label: "Next Consultation date ",
            fullWidth: true, sx: { mb: `` },
        },
        component: RHFDatePicker,
        md: 6,
    },
    {
        id: 8,
        componentProps: {
            name: "nextConsultationTime  ",
            label: "Next Consultation Time ",
            fullWidth: true, sx: { mb: `` },
        },
        component: RHFTimePicker,
        md: 6,
    },

    {
        id: 9,
        uploadPhoto: true,
        fullWidth: true,
        md: 12,
    }

];

export const RegAssessmentModalValues = {
    consultationdate: "",
    consultationdTime: "",
    sWName: "",
    meetingAttendees: "",
    meetingOutcomes: "",
    meetingAction: "",
    nextConsultationDate: "",
    nextConsultationTime: "",
    updatePhoto: null,


};

export const RegAssessmentModalValidationSchema = Yup.object().shape({
    consultationdate: Yup.string().trim().required("Field is Required"),
    consultationdTime: Yup.string().trim().required("Field is Required"),
    sWName: Yup.string().trim().required("Field is Required"),
    meetingAttendees: Yup.string().trim().required("Field is Required"),
    meetingOutcomes: Yup.string().trim().required("Field is Required"),
    meetingAction: Yup.string().trim().required("Field is Required"),
    nextConsultationDate: Yup.string().trim().required("Field is Required"),
    nextConsultationTime: Yup.string().trim().required("Field is Required"),
    updatePhoto: Yup.string().required("Field is Required"),

});

export { default as DeRegAssissmentAddModal } from "./DeRegAssissmentAddModal";

