import { FormHelperText, Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Controller, useFormContext } from "react-hook-form";
import * as Yup from "yup";

export const formDataFeildData = [
  {
    componentProps: {
      name: "fosterCarerName",
      label: "Foster carer Name",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Placement Type ",
      name: "placementType",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "curentReferral", label: "Curent Referral" },
      { value: "onHold", label: "OnHold" },
      { value: "rejected", label: "Rejected" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Termination Date",
      name: "terminationDate",
      fullWidth: true,
      value: new Date(),
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      label: "Any child Under this carer",
      name: "underThisCarer",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "curentReferral", label: "Curent Referral" },
      { value: "onHold", label: "OnHold" },
      { value: "rejected", label: "Rejected" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    componentProps: {
      name: "terminationAssessment",
      label: "Termination Assessment",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "responseToWrittenNotice",
      label: "Termination Reason",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    componentProps: {
      name: "letterOfCarer",
      label: "Upload Termination letter of carer",
      sx: { mb: 4 },
    },
    component: RHFUploadFile,
    md: 6,
  },
  {
    componentProps: {
      name: "approverName",
      label: "Termination Approver Name",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "mentionTheReasonOfTransfer",
      label: "You can tranfer the applicant to any other agency, If YES then name the Agency and Mention the reason of transfer.",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const formDataValues = {
  fosterCarerName: "",
  placementType: "",
  terminationDate: "",
  underThisCarer: "",
  terminationAssessment: "",
  responseToWrittenNotice: "",
  letterOfCarer: "",
  approverName:"",
  mentionTheReasonOfTransfer:"",
};

export const formValidationSchema = Yup.object().shape({
  fosterCarerName: Yup.string().trim().required("Field is Required"),
  placementType: Yup.string().trim().required("Field is Required"),
  terminationDate: Yup.string().trim().required("Field is Required"),
  underThisCarer: Yup.string().trim().required("Field is Required"),
  terminationAssessment: Yup.string().trim().required("Field is Required"),
  responseToWrittenNotice: Yup.string().trim().required("Field is Required"),
  letterOfCarer: Yup.string().trim().required("Field is Required"),
  approverName: Yup.string().trim().required("Field is Required"),
  mentionTheReasonOfTransfer: Yup.string().trim().required("Field is Required"),
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
                border: `1px solid ${
                  other?.formState?.errors?.[`${name}`] ? "red" : "#E5E8EB"
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
