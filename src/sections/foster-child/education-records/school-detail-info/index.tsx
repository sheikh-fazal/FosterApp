import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import router from "next/router";
import * as Yup from "yup";

export const defaultValues = {
  schoolName: "",
  buildingNo: "",
  street: "",
  city: "",
  county: "",
  country: "",
  postalCode: "",
  telephoneNumber: "",
  mobileNumber: "",
  faxNumber: "",
  email: "",
  principalName: "",
};
export const SchoolDetailInfoFormSchema = Yup.object().shape({
  schoolName: Yup.string().trim().required("School Name is Required"),
  buildingNo: Yup.string().trim().required("Building Number/Name is Required"),
  street: Yup.string().trim().required("Street Number is Required"),
  city: Yup.date().required("City is Required"),
  county: Yup.string().trim().required("County is Required"),
  country: Yup.string().trim().required("Country is Required"),
  postalCode: Yup.string().trim().required("Postal Code is Required"),
  telephoneNumber: Yup.string()
    .typeError("Must be a number")
    .min(10, "Invalid Telephone Number")
    .matches(/^\+44\d{10}$/, "Invalid Telephone Number")
    .required("Telephone Number is Required"),
  mobileNumber: Yup.string()
    .typeError("Must be a number")
    .min(10, "Invalid Mobile Number")
    .matches(/^\+44\d{10}$/, "Invalid Mobile Number")
    .required("Mobile Number is Required"),
  faxNumber: Yup.string().required("Fax Number is Required"),
  email: Yup.string().required("Email is Required").email("Invalid Email"),
  principalName: Yup.string().trim().required("Principal Name is Required"),
});

export const columns = [
  {
    accessorFn: (row: any) => row?.firstName + " " + row?.lastName,
    id: "name",
    cell: (info: any) => info.getValue(),
    header: "School Name",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.relation,
    id: "relation",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Principal Name",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => (row?.livingAtHome ? "Yes" : "No"),
    id: "livingAtHome",
    cell: (info: any) => info.getValue(),
    header: "Action",
    isSortable: true,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        {/* Can move it outside of the table if need arises */}

        <TableAction
          type="delete"
          onClicked={() => {
            console.log("delete this", info.row.original);
            alert("delete");
          }}
          size="small"
        />

        <TableAction
          type="edit"
          onClicked={() =>
            router.push(
              `/foster-child/education-records/school-detail-info/edit-school-detail?${info.getValue()}`
            )
          }
          size="small"
        />

        <TableAction
          type="view"
          onClicked={() =>
            router.push(
              `/foster-child/education-records/school-detail-info/view-school-detail?${info.getValue()}`
            )
          }
          size="small"
        />
      </Box>
    ),
    header: "Actions",
    isSortable: false,
  },
];

export { default as SchoolDetailInfoTable } from "./SchoolDetailInfoTable";
