import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import dayjs from "dayjs";

export const columnsChildExclusionInfoTable = (
  handleDelete: any,
  router: any,
  cancelDelete: any,
  setCancelDelete: any,
  openDeleteModel: any
) => [
  {
    id: "select",
    header: ({ table, row }: any) => {
      // console.log(table.getSelectedRowModel().flatRows);
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
    accessorFn: (row: any) => row,
    id: "srNo",
    cell: (info: any) => Number(info?.row?.id) + 1,
    header: "Sr. No",
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.exclusionDate,
    id: "exclusionDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>Exclusion Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.returnDate,
    id: "returnDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>Return Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.typeExclusion,
    id: "typeExclusion",
    cell: (info: any) => info.getValue(),
    header: () => <span>Type of Exclusion</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="edit"
          onClicked={() => router.push(`/foster-child/education-records/child-exclusion-info/view-child-exclusion-info?${info.getValue()}`)}
        />
        <TableAction
          type="delete"
          onClicked={() => openDeleteModel(info.getValue())}
          size="small"
        />

        <TableAction
          type="view"
          onClicked={() => router.push(`?${info.getValue()}`)}
        />
      </Box>
    ),
    header: () => <span>Actions</span>,
    isSortable: false,
  },
];

export const DummyChildExclusionData = [
  {
    id: 1,
    srNo: "1",
    returnDate: new Date().toDateString(),
    exclusionDate: new Date().toDateString(),
    typeExclusion: "abc",
  },
];
