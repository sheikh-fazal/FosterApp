import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { shortName } from "@root/sections/edit-profile/util/Util";
import dayjs from "dayjs";
export const getColumns = (parms: any) => {
  const { router } = parms;
  return [
    {
      accessorFn: (row: any) => row.a,
      id: "Document Name",
      cell: (info: any) => info.getValue().toUpperCase(),
      header: "Document Name",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.c,
      id: "Document Type",
      cell: (info: any) => "C",
      header: "Document Type",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.d,
      id: "Document Date",
      cell: (info: any) => "Not Avialable",
      header: "Document Date",
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.e,
      id: "Person Uploaded",
      cell: (info: any) => "D",
      header: "Person Uploaded",
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
          <TableAction size="small" type="download" />
          <TableAction size="small" type="view" />
          <TableAction size="small" type="delete" />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};
