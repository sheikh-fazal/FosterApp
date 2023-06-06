import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import router from "next/router";

export const data = [
  {
    id: 1,
    srNo: "1",
    DateofAbsence: "10 May 2021",
    DateofReturn: "1 May 2021",
    ReasonForAbsence: "Sick",
  },
  {
    srNo: "2",
    DateofAbsence: "1 May 2021",
    DateofReturn: "1 May 2021",
    ReasonForAbsence: "Urgent Work",
  },
];

export const columns = [
  
  {
    accessorFn: (row: any) => row.srNo,
    id: "srNo",
    cell: (info: any) => info.getValue(),
    header: () => <span>Sr.No</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.DateofAbsence,
    id: "DateofAbsence",
    cell: (info: any) => info.getValue(),
    header: () => <span>Date of Absence</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.DateofReturn,
    id: "DateofReturn",
    cell: (info: any) => info.getValue(),
    header: () => <span>Date of Return</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.ReasonForAbsence,
    id: "ReasonForAbsence",
    cell: (info: any) => info.getValue(),
    header: () => <span>Reason For Absence</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="delete"
          onClicked={() => console.log(info.getValue())}
        />
        <TableAction
          type="edit"
          onClicked={() =>
            router.push(
              `/foster-child/child-background-info/family-person-org-involved/family-form-list`
            )
          }
        />

        <DeleteModel onDeleteClick={() => {}} />
        <TableAction
          type="view"
          onClicked={() => console.log(info.getValue())}
        />
      </Box>
    ),
    header: () => <span>Actions</span>,
    isSortable: false,
  },
];
