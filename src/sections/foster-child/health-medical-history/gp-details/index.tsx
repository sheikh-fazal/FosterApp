import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const gpDetailsInfoTableColumnsFunction = (router?: any) => [
  //   {
  //     id: "select",
  //     header: ({ table, row }: any) => {
  //       console.log(table.getSelectedRowModel().flatRows);
  //       return (
  //         <Box>
  //           <Checkbox
  //             checked={table.getIsAllRowsSelected()}
  //             onChange={table.getToggleAllRowsSelectedHandler()}
  //           />
  //         </Box>
  //       );
  //     },
  //     cell: ({ row, table }: any) => (
  //       <Box>
  //         <Checkbox
  //           disabled={row?.original?.Assigned}
  //           checked={row?.original?.Assigned ? false : row.getIsSelected()}
  //           onChange={row.getToggleSelectedHandler()}
  //         />
  //       </Box>
  //     ),
  //   },
  {
    accessorFn: (row: any) => row.physicianName,
    id: "physicianName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Physician Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.physicianType,
    id: "physicianType",
    cell: (info: any) => info.getValue(),
    header: () => <span>Physician Type</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.telephone,
    id: "telephone",
    cell: (info: any) => info.getValue(),
    header: () => <span>Telephone</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => {
      console.log(info);
      return (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="delete"
            // onClicked={() => SetIsSingleDocumentDetailViewed?.(true)}
          />
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                `/foster-child/health-medical-history/gp-details/edit-gp-details-info/${info?.row?.id}`
              )
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                "/foster-child/health-medical-history/gp-details/gp-details-info"
              )
            }
          />
        </Box>
      );
    },
    header: () => <span>Action</span>,
    isSortable: false,
  },
];
