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
    accessorFn: (row: any) => row.srNo,
    id: "Sr. No",
    cell: (info: any) => info.getValue(),
    header: () => <span>Sr. No</span>,
    isSortable: true,
  },
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
    cell: (info: any) => info.getValue(),
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
    id: "is_living_at_home",
    cell: (info: any) => info.getValue(),
    header: () => <span>Is Living at home</span>,
  },
];

export { default as FamilyTable } from "./FamilyTable";
