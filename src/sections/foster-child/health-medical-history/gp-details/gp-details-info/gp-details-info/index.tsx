import { Typography } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";
import { COUNTYDROPDOWN } from "@root/dropdown-data/county";
import * as Yup from "yup";

export const gpDetailsInfoFormValues = {
  physicianName: "",
  physicianType: "",
  address: "",
  town: "",
  telephone: "",
  phoneNo: "",
  email: "",
  county: "",
  country: "",
  postalCode: "",
};

export const defaultValueGpDetailsInfoForm = (
  data: any = gpDetailsInfoFormValues
) => {
  return {
    physicianName: data?.physicianName,
    physicianType: data?.physicianType,
    address: data?.address,
    town: data?.town,
    telephone: data?.telephone,
    phoneNo: data?.phoneNo,
    email: data?.email,
    county: data?.county,
    country: data?.country,
    postalCode: data?.postalCode,
  };
};

export const gpDetailsInfoFormSchema: any = Yup.object().shape({
  physicianName: Yup.string()
    .trim()
    .required("Physician name is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  physicianType: Yup.string().required("Physician type is required"),
  address: Yup.string()
    .trim()
    .required("Address is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  town: Yup.string()
    .trim()
    .required("Town is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  telephone: Yup.string()
    .trim()
    .required("Telephone is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  phoneNo: Yup.string()
    .trim()
    .required("Mobile phone is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  email: Yup.string()
    .trim()
    .required("Email is required")
    .email("Invalid Email"),
  county: Yup.string().required("County is required"),
  country: Yup.string().required("Country is required"),
  postalCode: Yup.string()
    .trim()
    .required("Postal code is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
});

export const gpDetailsInfoFormDataFunction = (isFieldDisable = false) => [
  {
    id: 1,
    componentProps: {
      fullWidth: true,
      name: "physicianName",
      label: "Physician Name",
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 2,
    component: RHFSelect,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "physicianType",
      label: "Physician Type",
      select: true,
      options: [
        {
          id: 1,
          label: "Eye",
          text: "Eye",
        },
        {
          id: 2,
          label: "Physician",
          text: "Physician",
        },
      ],
    },
  },
  {
    id: 1.5,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "h6",
    },
    heading: "Contact Details",
    gridLength: 12,
    component: Typography,
  },
  {
    id: 3,
    componentProps: {
      fullWidth: true,
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 4,
    componentProps: {
      fullWidth: true,
      name: "town",
      label: "Town/City",
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 5,
    componentProps: {
      fullWidth: true,
      name: "telephone",
      label: "Telephone",
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 6,
    componentProps: {
      fullWidth: true,
      name: "phoneNo",
      label: "Mobile Phone",
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 7,
    componentProps: {
      fullWidth: true,
      name: "email",
      label: "Email",
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 8,
    componentProps: {
      fullWidth: true,
      name: "county",
      label: "County",
      select: true,
      options: COUNTRIESDROPDOWN,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    // component: RHFTextField,
    component: RHFSelect,
  },
  {
    id: 9,
    componentProps: {
      fullWidth: true,
      name: "country",
      label: "Country",
      select: true,
      options: COUNTYDROPDOWN,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFSelect,
    // component: RHFTextField,
  },
  {
    id: 10,
    componentProps: {
      fullWidth: true,
      name: "postalCode",
      label: "Postal Code",
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },
];
