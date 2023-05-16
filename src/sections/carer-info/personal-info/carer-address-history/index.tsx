import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";
import router from "next/router";

// utils

// ----------------------------------------------------------------------

export const defaultValues = {
  addressType: "Pre Approved",
  datedMoved: "",
  currentAddress: "Yes",
  address: "",
  townCity: "",
  telephone: "",
  officePhone: "",
  mobilePhone: "",
  email: "",
  county: "",
  country: "",
  postalCode: "",
};

export const FormSchema = Yup.object().shape({
  addressType: Yup.string().required("Field is required"),
  datedMoved: Yup.string().required("Field is required"),
  currentAddress: Yup.string().required("Field is required"),
  address: Yup.string().required("Field is required"),
  townCity: Yup.string().required("Field is required"),
  telephone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  officePhone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  mobilePhone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(15, "Maximum 15 characters"),
  email: Yup.string()
    .required("Field is required")
    .email("Invalid Email Address"),
  county: Yup.string().required("Field is required"),
  country: Yup.string().required("Field is required"),
  postalCode: Yup.string().required("Field is required"),
});
export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      defaultValue: "Pre Approved",
      label: "Type?",
      name: "addressType",
      options: ["Pre Approved", "Post Approved"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "datedMoved",
      label: "Dated Moved",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },

  {
    gridLength: 12,
    otherOptions: {
      defaultValue: "Yes",
      label: "Current Address",
      name: "currentAddress",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
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
    otherOptions: { name: "townCity", label: "Town City", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "telephone", label: "Telephone", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "officePhone",
      label: "Office Phone",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "mobilePhone",
      label: "Mobile Phone",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "email", label: "Email", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "county",
      label: "County",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "country",
      label: "Country",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: { name: "postalCode", label: "Postal Code", fullWidth: true },
    component: RHFTextField,
  },
];

export const columns = [
  {
    id: "select",
    header: ({ table, row }: any) => {
      console.log(table.getSelectedRowModel().flatRows);
      return (
        <Box>
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        </Box>
      );
    },
    cell: ({ row, table }: any) => (
      <Box>
        <Checkbox
          disabled={row?.original?.Assigned}
          checked={row?.original?.Assigned ? false : row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      </Box>
    ),
  },
  {
    accessorFn: (row: any) => row.srNo,
    id: "srNo",
    cell: (info: any) => info.getValue(),
    header: () => <span>Sr. No</span>,
  },
  {
    accessorFn: (row: any) => row.city,
    id: "city",
    cell: (info: any) => info.getValue(),
    header: () => <span>City</span>,
  },
  {
    accessorFn: (row: any) => row.address,
    id: "address",
    cell: (info: any) => info.getValue(),
    header: () => <span>Address</span>,
  },
  {
    accessorFn: (row: any) => row.currentAddress,
    id: "currentAddress",
    cell: (info: any) => info.getValue(),
    header: () => <span>Current Adrress</span>,
  },
  {
    accessorFn: (row: any) => row.status,
    id: "status",
    cell: (info: any) => info.getValue(),
    header: () => <span>Status</span>,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="edit"
          onClicked={() =>
            router.push(
              "/carer-info/personal-info/carer-address-history/edit-address-history?123"
            )
          }
        />
        <TableAction type="delete" onClicked={() => alert("delete")} />
        <TableAction
          type="view"
          onClicked={() =>
            router.push(
              "/carer-info/personal-info/carer-address-history/view-address-history?123"
            )
          }
        />
      </Box>
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  },
];

export const CarerAddressHistoryTableData = [
  {
    srNo: "1",
    city: "Doc Name",
    address: "Document Type",
    currentAddress: "19/05/2021",
    status: "Name Xame",
  },
  {
    srNo: "2",
    city: "Doc Name",
    address: "Document Type",
    currentAddress: "19/05/2021",
    status: "Name Xame",
  },
];
export { default as CarerAddressHistory } from "./CarerAddressHistoryForms";
