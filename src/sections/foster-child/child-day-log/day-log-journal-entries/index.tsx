import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import router from "next/router";

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
    header: () => <span>Sr.No</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.date,
    id: "date",
    cell: (info: any) => info.getValue(),
    header: () => <span>Date of Occurance/Time</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.type,
    id: "type",
    cell: (info: any) => info.getValue(),
    header: () => <span>Type</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.subject,
    id: "subject",
    cell: (info: any) => info.getValue(),
    header: () => <span>Subject</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.status,
    id: "status",
    cell: (info: any) => info.getValue(),
    header: () => <span>Status</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.locked,
    id: "locked",
    cell: (info: any) => info.getValue(),
    header: () => <span>Locked</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="edit"
          onClicked={() =>
            router.push(
              `/foster-child/child-day-log/day-log-journal-entries/day-log-journal-form`
            )
          }
        />
         <TableAction
          type="delete"
          // onClicked={() => openDeleteModel(info.getValue())}
          size="small"
        />

        <DeleteModel onDeleteClick={() => { }} />
        <TableAction
          type="view"
          // onClicked={() => console.log(info.getValue())}
          onClicked={() =>
            router.push(
              `/foster-child/child-day-log/day-log-journal-entries/day-log-journal-form?action=view`
            )
          }
        />
      </Box>
    ),
    header: () => <span>Actions</span>,
    isSortable: false,
  },
];

export const DayLogjournalentriesListTableData = [
  {
    id:1,
    document:"Doc Name",
    documentType: "PDF",
    date:"19/05/2021",
    personName:"Name Xame",
    password:"123abc",
  },
  {
    id:2,
    document:"Doc Name",
    documentType: "PDF",
    date:"19/05/2021",
    personName:"Name Xame",
    password:"123abc",
  },
]


