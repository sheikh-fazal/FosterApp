import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import { useFormContext, Controller } from "react-hook-form";
import { FormHelperText, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SignaturePad from "@root/components/SignaturePad";

export const FosterHandbookFormData = [
    {
        id: 1,
        title: "Title",
        componentProps: {
            name: "title",
            //   label: "Title",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        title: "Date Uploaded",
        componentProps: {
            name: "dateUploaded",
            //   title: "Date Uploaded",
            fullWidth: true,
            sx: { mb: 4 },
        },
        component: RHFDatePicker,
        md: 6,
    },
    {
        id: 3,

        title: "Description",
        componentProps: {
            name: "description",
            label: "Description",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 4,


        title: "Version",
        componentProps: {
            name: "version",
            fullWidth: true,
            select: true,
            sx: { mb: 4 },
        },
        options: [{ value: "Hayes", label: "Hayes" }],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 5,

        title: "Created By",
        componentProps: {
            name: "createdBy",
            label: "Created By",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 6,

        title: "Approved By",
        componentProps: {
            name: "approvedBy",
            // label: "Approved By",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 7,

        title: "eSignature of Author",
        componentProps: {
            name: "eSignatureofAuthor",
            // label: "eSignature of Author",
            sx: { mb: 4 },
        },
        component: SignaturePad,
        md: 6,
    },
    {
        id: 8,

        title: "eSignature of Approvdsfdser",
        componentProps: {
            name: "eSignatureofApprover",
            // label: "eSignature of Approver",
            sx: { mb: 4 },
        },
        component: SignaturePad,
        md: 6,
    },
    {
        id: 9,
        title: "Date of eSignature of Author",
        componentProps: {
            name: "author",
            //   title: "Date of eSignature of Author",
            fullWidth: true,
            // sx: { mb: 4, mt: 4 },
        },
        component: RHFDatePicker,
        md: 6,
    },
    {
        id: 10,
        title: "Date of eSignature of Approver",
        componentProps: {
            name: "approver",
            //   title: "Date of eSignature of Approver",
            fullWidth: true,
            sx: { mb: 4,  },
        },
        component: RHFDatePicker,
        md: 6,
    },
    {
        id: 11,
        title: "Creation Time",
        componentProps: {
            name: "creationTime",
            //   title: "Creation Time",
            fullWidth: true,
            sx: { mb: 4 },
        },
        component: RHFTimePicker,
        md: 6,
    },
    {
        id: 12,
        title: "Last Modified Time",
        componentProps: {
            name: "lastModifiedTime",
            //   title: "Last Modified Time",
            fullWidth: true,
            sx: { mb: 4 },
        },
        component: RHFTimePicker,
        md: 6,
    },
    {
        id: 13,
        title: "Modified By",
        componentProps: {
            name: "modifiedBy",
            //   label: "Modified By",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 14,
        title: "Upload image",
        componentProps: {
            name: "uploadImage",
            fullWidth: true,
            size: "small",
            sx: { mb: 4 },
        },
        component: RHFUploadFile,
        md: 6,
    },
];

export const FosterHandbookFormDataValues = {
    title: "",
    dateUploaded: "",
    description: "",
    version: "",
    createdBy: "",
    approvedBy: "",
    author: "",
    approver: "",
    creationTime: "",
    lastModifiedTime: "",
    modifiedBy: "",
    uploadImage: "",
    eSignatureofAuthor: "",
    eSignatureofApprover: "",
};

export const FosterHandbookFormValidationSchema = Yup.object().shape({
    // title: Yup.string().trim().required("Field is Required"),
    // yourrequest: Yup.string().trim().required("Field is Required"),
    // dateUploaded: Yup.string().trim().required("Field is Required"),
    // description: Yup.string().trim().required("Field is Required"),
    // version: Yup.string().trim().required("Field is Required"),
    // createdBy: Yup.string().trim().required("Field is Required"),
    // approvedBy: Yup.string().trim().required("Field is Required"),
    // author: Yup.string().trim().required("Field is Required"),
    // approver: Yup.string().trim().required("Field is Required"),
    // creationTime: Yup.string().trim().required("Field is Required"),
    // lastModifiedTime: Yup.string().trim().required("Field is Required"),
    // modifiedBy: Yup.string().trim().required("Field is Required"),
    // uploadImage: Yup.string().trim().required("Field is Required"),
    // eSignatureofAuthor: Yup.string().trim().required("Field is Required"),
    // eSignatureofApprover: Yup.string().trim().required("Field is Required"),
});

function RHFUploadFile(props: any) {
    const { disabled, name, ...other } = props;
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                const checkError = !!error && !field.value;
                return (
                    <>
                        <label
                            htmlFor={name}
                            style={{
                                height: "40px",
                                borderRadius: "4px",
                                // border: `1px solid #A3A6BB`,
                                border: `1px solid ${other?.formState?.errors?.[`${name}`] ? "red" : "#E5E8EB"
                                    }`,
                                width: "100% !important",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: `${disabled ? "" : "pointer"}`,
                            }}
                        >
                            <div style={{ paddingLeft: "10px", color: "#A3A6BB" }}>
                                {field?.value?.name || "Upload Image"}
                            </div>
                            <FileUploadIcon
                                sx={{
                                    color: "#A3A6BB",
                                    marginRight: "10px",
                                }}
                            />
                        </label>
                        <input
                            type="file"
                            disabled={disabled}
                            name={name}
                            id={name}
                            onChange={(e: any) => {
                                const file: any = e.target.files?.[0];
                                field.onChange({ target: { value: file, name: field.name } });
                            }}
                            style={{ display: "none" }}
                        />
                        {checkError && (
                            <FormHelperText error sx={{ px: 2 }}>
                                {error.message}
                            </FormHelperText>
                        )}
                    </>
                );
            }}
        />
    );
}
