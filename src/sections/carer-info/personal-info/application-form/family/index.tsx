import { Box } from "@mui/material";
import dayjs from "dayjs";

export const defaultValues = [
  {
    srNo: "U4721XBUCA",
    memberName: "Sijo Francis",
    dob: "02-30-20",
    relation: "Brother",
    subject: "",
    isLivingAtHome: "Yes",
  },
  {
    srNo: "U3721XBUCB",
    memberName: "Sijo Francis",
    dob: "02-30-20",
    relation: "Brother",
    subject: "",
    isLivingAtHome: "Yes",
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
