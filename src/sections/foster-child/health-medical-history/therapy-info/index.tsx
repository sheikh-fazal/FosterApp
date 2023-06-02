import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const therapyInfoTableColumnsFunction = (router?: any) => [
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
    accessorFn: (row: any) => row.CAMHSDate,
    id: "CAMHSDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>CAMHS Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.appointment,
    id: "appointment",
    cell: (info: any) => info.getValue(),
    header: () => <span>Appointment</span>,
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
                `/foster-child/health-medical-history/therapy-info/edit-child-therapy-info/${info?.row?.id}`
              )
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                "/foster-child/health-medical-history/therapy-info/child-therapy-info"
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
