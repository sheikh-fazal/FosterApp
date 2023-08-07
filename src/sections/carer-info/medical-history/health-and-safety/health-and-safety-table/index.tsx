import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import dayjs from "dayjs";

export const columns = (deleteList: any) => [
  // {
  //   id: "select",
  //   header: ({ table, row }: any) => {
  //     console.log(table.getSelectedRowModel().flatRows);
  //     return (
  //       <Box>
  //         <Checkbox
  //           checked={table.getIsAllRowsSelected()}
  //           onChange={table.getToggleAllRowsSelectedHandler()}
  //         />
  //       </Box>
  //     );
  //   },
  //   cell: ({ row, table }: any) => (
  //     <Box>
  //       <Checkbox
  //         disabled={row?.original?.Assigned}
  //         checked={row?.original?.Assigned ? false : row.getIsSelected()}
  //         onChange={row.getToggleSelectedHandler()}
  //       />
  //     </Box>
  //   ),
  // },
  // {
  //   accessorFn: (row: any) => row?.srNo,
  //   id: "srNo",
  //   cell: (info: any) => info.getValue(),
  //   header: () => <span>Sr.No</span>,
  //   isSortable: true,
  // },
  {
    accessorFn: (row: any) => row?.inspectionDate,

    id: "inspectionDate",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Inspection Date",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.nestInspectionDate,
    id: "nestInspectionDate",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Next Inspection Date",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.status,
    id: "status",
    cell: (info: any) => info.getValue(),
    header: "Status",
    isSortable: true,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction type="edit" onClicked={() => alert("Edit")} />
        <TableAction type="delete" onClicked={() => deleteList(info)} />

        <TableAction type="view" onClicked={() => alert("View")} />
      </Box>
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  },
];

export const HEALTH_AND_SAFETYDATA = [
  {
    id: 1,
    srNo: "1",
    // social_worker: "Palwasha",
    createdAt: 30 / 4 / 2011,
    nextInspectionDate: 30 / 4 / 2011,
    status: "Pending",
  },
  {
    id: 2,
    srNo: "2",
    // social_worker: "John",
    createdAt: 30 / 4 / 2011,
    nextInspectionDate: 30 / 4 / 2011,
    status: "Completed",
  },
];
