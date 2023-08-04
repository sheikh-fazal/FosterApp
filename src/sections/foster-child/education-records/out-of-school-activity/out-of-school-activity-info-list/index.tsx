import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const columnsOutSchoolActivityTable = (
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
    accessorFn: (row: any) => row.fromDate,
    id: "fromDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>Form Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.outOfDate,
    id: "outOfDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>To Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.activityType,
    id: "activityType",
    cell: (info: any) => info.getValue(),
    header: () => <span>Activity Type</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="edit"
          onClicked={() => router.push(`/foster-child/education-records/out-of-school-activity/edit-out-of-school-activity-info?${info.getValue()}`)}
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
    formDate: new Date().toDateString(),
    toDate: new Date().toDateString(),
    activityType: "abc",
  },
];
