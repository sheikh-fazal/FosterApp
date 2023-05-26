import { Box } from "@mui/material";
import dayjs from "dayjs";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const defaultValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  address: "",
  phoneNumber: "",
  email: "",
};

export const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  middleName: Yup.string().required("Middle Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  address: Yup.string()
    .required("Address is required")
    .min(6, "Mininum 6 characters")
    .max(20, "Maximum 10 characters"),
  phoneNumber: Yup.string()
    .required("Telephone is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
});
export const formData = [
  {
    gridLength: 6,
    otherOptions: { name: "firstName", label: "First Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "middleName", label: "Middle Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "lastName", label: "Last Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "phoneNumber",
      label: "Phone Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "email", label: "Email", fullWidth: true },
    component: RHFTextField,
  },
];
export const columns = [
  {
    accessorFn: (row: any) => row.memberName,
    id: "member_name",
    cell: (info: any) => info.getValue(),
    header: () => <span>Member Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.dob,
    id: "dob",
    cell: (info: any) => {
      return <Box>{dayjs(info.getValue()).format("DD/MM/YYYY")}</Box>;
    },
    header: () => <span>Date of Birth</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.relation,
    id: "relation",
    cell: (info: any) => info.getValue(),
    header: () => <span>Relation</span>,
  },
  {
    accessorFn: (row: any) => row.subject,
    id: "subject",
    cell: (info: any) => info.getValue(),
    header: () => <span>Subject</span>,
  },
  {
    accessorFn: (row: any) => row.isLivingAtHome,
    id: "isLivingAtHome",
    cell: (info: any) => (info.getValue() ? "Yes" : "No"),
    header: () => <span>Is Living at home</span>,
  },
];

export { default as FamilyTable } from "./FamilyTable";
