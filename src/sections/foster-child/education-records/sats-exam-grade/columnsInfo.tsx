import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { shortName } from "@root/sections/edit-profile/util/Util";
import dayjs from "dayjs";
import { useRouter } from "next/router";
export const getColumns = (parms: any) => {
  const { router, handleDeleteSats } = parms;
  const { query } = router;
  const { fosterChildId } = query;
  return [
    {
      accessorFn: (row: any) => row.schoolYear,
      id: "School Year",
      cell: (info: any) => info.getValue(),
      header: "School Year",
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.term,
      id: "Term",
      cell: (info: any) => info.getValue(),
      header: "Term",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.subject,
      id: "subject",
      cell: (info: any) => info.getValue(),
      header: "subject",
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
                `/foster-child/health-medical-history/therapy-info-list/child-therapy-info/?fosterChildId=${fosterChildId}&action=update&therapyInfoId=${info.row.original.id}`
              )
            }
          />
          <TableAction
            size="small"
            type="view"
            onClick={() =>
              router.push(
                `/foster-child/health-medical-history/therapy-info-list/child-therapy-info/?fosterChildId=${fosterChildId}&action=view&therapyInfoId=${info.row.original.id}`
              )
            }
          />
          <TableAction
            size="small"
            type="delete"
            onClicked={() => handleDeleteSats(info.row.original.id)}
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};
