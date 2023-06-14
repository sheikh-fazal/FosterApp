import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { shortName } from "@root/sections/edit-profile/util/Util";
import dayjs from "dayjs";
export const getColumns = (parms: any) => {
  const { router } = parms;
  return [
    {
      accessorFn: (row: any) => row.a,
      id: "Sr. Noaaa",
      cell: (info: any) => info.getValue().toUpperCase(),
      header: "Sr. Noaaa",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.b,
      id: "Carer Name",
      cell: (info: any) => "B",
      header: "Carer Name",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.c,
      id: "Inspection Date",
      cell: (info: any) => "C",
      header: "Inspection Date",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.d,
      id: "Next Inspection Date",
      cell: (info: any) => "Not Avialable",
      header: "Next Inspection Date",
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.e,
      id: "Status",
      cell: (info: any) => "D",
      header: "Status",
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.f,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
          <TableAction
            size="small"
            type="edit"
            onClick={() =>
              router.push(
                `/foster-child/other-information/safe-care-policy-list/safe-care-policy`
              )
            }
          />
          <TableAction size="small" type="view" />
          <TableAction size="small" type="delete" />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};
