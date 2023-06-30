import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const statutoryMedicalListXTableColumnsFunction = (
  router?: any,
  type?: any,
  prepareRecordForDelete?: any
) => [
  {
    accessorFn: (row: any) => row?.medicalDate,
    id: "medicalDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>Medical Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.dueDate,
    id: "dueDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>Due Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.onfile,
    id: "onFile",
    cell: (info: any) => info.getValue(),
    header: () => <span>On File</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => {
      return (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="delete"
            onClicked={() => prepareRecordForDelete?.(info.getValue())}
          />
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type?id=${info.getValue()}&type=${type}&action=edit`
              )
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type?id=${info.getValue()}&type=${type}&action=view`
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

export const STATUTORYMEDICALLISTTYPEPAGELIMIT =  10;
