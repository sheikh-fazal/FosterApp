import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const gpDetailsInfoTableColumnsFunction = (router?: any) => [
  {
    accessorFn: (row: any) => row?.physicianName,
    id: "physicianName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Physician Name</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row: any) => row.physicianType,
    id: "physicianType",
    cell: (info: any) => info.getValue(),
    header: () => <span>Physician Type</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row: any) => row.telephone,
    id: "telephone",
    cell: (info: any) => info.getValue(),
    header: () => <span>Telephone</span>,
    // isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => {
      return (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                `/foster-child/health-medical-history/gp-details/gp-details-info?gpInfoId=${info.getValue()}&action=edit`
              )
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                `/foster-child/health-medical-history/gp-details/gp-details-info?gpInfoId=${info.getValue()}&action=view`
              )
            }
          />
        </Box>
      );
    },
    header: () => <span>Action</span>,
    // isSortable: false,
  },
];
