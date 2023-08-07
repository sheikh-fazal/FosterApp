import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import dayjs from "dayjs";

export const columns = ({
  openDeleteModel,
}: any) => [
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
        <TableAction
          type="delete"
          onClicked={() => openDeleteModel(info?.row?.original?.id)}
        />

        <TableAction type="view" onClicked={() => alert("View")} />
      </Box>
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  },
];

