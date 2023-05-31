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
    accessorFn: (row: any) => row.contactName,
    id: "contactName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Contact Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.contactType,
    id: "contactType",
    cell: (info: any) => info.getValue(),
    header: () => <span>Contact Type</span>,
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
              `/foster-child/child-background-info/family-person-org-involved/family-form-list`
            )
          }
        />
        <DeleteModel onDeleteClick={() => { }} />
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


