import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const opticianCheckInfoFormValues = {
  physicianName: "",
  physicianType: "",
  address: "",
  town: "",
  telephone: "",
  phoneNo:"",
  email:"",
  county:"",
  country:"",
  postalCode:""
};


export const defaultValueOpticianCheckInfoForm = (data: any = opticianCheckInfoFormValues) => {
  return {
    physicianName: data?.physicianName,
    physicianType: data?.physicianType,
    address: data?.address,
    town: data?.town,
    telephone: data?.telephone,
    phoneNo:data?.phoneNo,
    email:data?.email,
    county:data?.county,
    country:data?.country,
    postalCode:data?.postalCode
  };
};

export const opticianCheckInfoFormSchema = Yup.object().shape({
  physicianName: Yup.string()
    .required("Physician name is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
    physicianType: Yup.string()
    .required("Physician type is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
    address: Yup.string()
    .required("Address is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
    town: Yup.string()
    .required("Town is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
    telephone: Yup.string()
    .required("Telephone is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
    phoneNo: Yup.string()
    .required("Mobile phone is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
    email: Yup.string().required("Email is required").email("Invalid Email"),
    county: Yup.string()
    .required("County is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
    country: Yup.string()
    .required("Country is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
    postalCode: Yup.string()
    .required("Postal code is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
});

export const opticianCheckInfoFormDataFunction = (isFieldDisable = false) => [
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
    id: 4,
    component: RHFSelect,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "physicianType",
      label: "Physician Type",
      select: true,
      options: [{
        id:1,
        label:'Eye',
        text:'Eye'
      },
      {
        id:2,
        label:'Physician',
        text:'Physician'
      }],
    },
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
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 9,
    componentProps: {
      fullWidth: true,
      name: "country",
      label: "Country",
      // select: true,
      // options: COUNTRIESDROPDOWN,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    // component: RHFSelect,
    component: RHFTextField,
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
