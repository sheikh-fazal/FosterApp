import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { HEAREDABOUTAGENCY } from "@root/dropdown-data/hearAboutAgency";

export const healthTherapyInfoFormDataFunction = (isFieldDisable = false) => [
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
      options: HEAREDABOUTAGENCY,
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
      name: "mobilePhone",
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
      disabled: isFieldDisable,
    },
    gridLength: 6,
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
