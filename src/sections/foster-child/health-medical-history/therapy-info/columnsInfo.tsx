import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { shortName } from "@root/sections/edit-profile/util/Util";
import dayjs from "dayjs";
import { useRouter } from "next/router";
export const getColumns = (parms: any) => {
  const { router } = parms;
  const { query } = useRouter();
  const { fosterChildId } = query;
  return [
    {
      accessorFn: (row: any) => row.a,
      id: "CAMHS Date",
      cell: (info: any) => info.getValue().toUpperCase(),
      header: " CAMHS Date",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.b,
      id: "Appointment",
      cell: (info: any) => "B",
      header: "Appointment",
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
                `/foster-child/health-medical-history/therapy-info-list/child-therapy-info?fosterChildId=${fosterChildId}`
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
