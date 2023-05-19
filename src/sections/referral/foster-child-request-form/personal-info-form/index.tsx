import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import { useFormContext, Controller } from "react-hook-form";
import { FormHelperText, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";


export const PersonalInfoFormData = [
  {
    id: 1,
    title:'Child Code',
    componentProps: {
      name: "childCode",
      label: "CHC-2",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    title:'Child Identifier',
    componentProps: {
      name: "childIdentifier",
      label:"Child Identifier",
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    title:'Child Or Parent & Child',
    componentProps: {
      name: "childParentChild",
      label: "Child",
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },


  {
    id: 4,
    title:'Area Office',
    componentProps: {
      name: "areaOffice",
     
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Hayes", label: "Hayes" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 4.5,
    heading: "Personal Details",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 5,
    title:'Upload image',
    componentProps: {
      name: "uploadImage",
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFUploadFile,
    md: 6,
  },
  {
    id: 6,
    title:'First Name',
    componentProps: { name: "firstName", label: "First Name", fullWidth: true, sx: { mb: 4 }, },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 7,
    gridLength: 6,
    title:'Middle Name',
    componentProps: {
      name: "middleName",
      label: "Middle Name",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 8,
    gridLength: 6,
    title:'Last Name',
    componentProps: { name: "lastName", label: "Last Name", fullWidth: true, sx: { mb: 4 }, },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 9,
    gridLength: 6,
    title:'Date of Birth',
    componentProps: { name: "dateOfBirth",  fullWidth: true, sx: { mb: 4 }, },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 10,
    gridLength: 6,
    title:'Age',
    componentProps: { name: "age", label: "Age", fullWidth: true, sx: { mb: 4 }, },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 11,
    gridLength: 6,
    title:'Gender',
    componentProps: {
      name: "gender",
    
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 12,
    gridLength: 6,
    title:'Ethnicity',
    componentProps: {
      name: "ethnicity",
     
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: ETHNICITYDROPDOWN,
    component: RHFSelect,
    md: 6,
  },
  {
    id: 13,
    gridLength: 6,
    title:'Ofsted Ethnicity',
    componentProps: {
      name: "ofstedEthnicity",
    
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 14,
    gridLength: 6,
    title:'Language',
    componentProps: {
      name: "language",
      
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 15,
    gridLength: 6,
    title:'Legal Status',
    componentProps: {
      name: "legalStatus",
     
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 16,
    gridLength: 6,
    title:'Nationality',
    componentProps: {
      name: "nationality",
    
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 17,
    gridLength: 6,
    title:'Religion',
    componentProps: {
      name: "religion",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: RELIGIONDROPDOWN,
    component: RHFSelect,
    md: 6,
  },
  {
    id: 18,
    gridLength: 6,
    title:'Immigration Status',
    componentProps: {
      name: "immigrationStatus",
      
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 19,
    gridLength: 6,
    title:'Disability?',
    componentProps: {
      name: "disability",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 20,
    gridLength: 6,
    title:'Behaviour',
    componentProps: {
      name: "behaviour",
     
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 21,
    title:'Synopsis',
    componentProps: {
      name: "synopsis",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 22,
    title:'Is the Child Currently in Education?',
    componentProps: {
      name: "isChildCurrentlyEducation",
      fullWidth: true,
      select: true,

    },
    options: [
      { value: "Yes", label: "Yes" },
      { value: "No", label: "No" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 23,
    componentProps: {
      name: "areThereAnyOtherSiblings",
      label: "Are there any other Siblings?",
      sx: { mb: 4 ,mt:2},
    },
    component: RHFCheckbox,
    md: 6,
  },
];

export const PersonalInfoFormValues = {
  childCode: "",
  childIdentifier: "",
  childParentChild: "",
  areaOffice: "",
  uploadImage: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: "",
  age: "",
  gender: "",
  ethnicity: "",
  ofstedEthnicity: "",
  language: "",
  legalStatus: "",
  nationality: "",
  religion: "",
  immigrationStatus: "",
  disability: "",
  behaviour: "",
  synopsis: "",
  isChildCurrentlyEducation: "",
  areThereAnyOtherSiblings:"",

};

export const PersonalInfoFormValidationSchema = Yup.object().shape({
  childCode: Yup.string().trim().required("Field is Required"),
  childIdentifier: Yup.string().trim().required("Field is Required"),
  childParentChild: Yup.string().trim().required("Field is Required"),
  areaOffice: Yup.string().trim().required("Field is Required"),
  uploadImage: Yup.string().trim().required("Field is Required"),
  firstName: Yup.string().trim().required("Field is Required"),
  middleName: Yup.string().trim().required("Field is Required"),
  lastName: Yup.string().trim().required("Field is Required"),
  dateOfBirth: Yup.string().trim().required("Field is Required"),
  age: Yup.string().trim().required("Field is Required"),
  gender: Yup.string().trim().required("Field is Required"),
  ethnicity: Yup.string().trim().required("Field is Required"),
  ofstedEthnicity: Yup.string().trim().required("Field is Required"),
  language: Yup.string().trim().required("Field is Required"),
  legalStatus: Yup.string().trim().required("Field is Required"),
  nationality: Yup.string().trim().required("Field is Required"),
  religion: Yup.string().trim().required("Field is Required"),
  immigrationStatus: Yup.string().trim().required("Field is Required"),
  disability: Yup.string().trim().required("Field is Required"),
  behaviour: Yup.string().trim().required("Field is Required"),
  synopsis: Yup.string().trim().required("Field is Required"),
  isChildCurrentlyEducation: Yup.string().trim().required("Field is Required"),
  areThereAnyOtherSiblings: Yup.string().trim().required("Field is Required"),
});

export { default as PesonalInfoForm } from "./PersonalInfoForm";

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