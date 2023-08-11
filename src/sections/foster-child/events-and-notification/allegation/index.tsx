import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";

export const allegationInfoTableColumnsFunction = (
  router?: any,
  prepareRecordForDelete?: any
) => [
  {
    accessorFn: (row: any) => row?.allegationDate,
    id: "allegationDate",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    header: () => <span>Date of Allegation</span>,
  },
  {
    accessorFn: (row: any) => row.status,
    id: "status",
    cell: (info: any) => {
      return (
        <>
          {info.getValue()} <small>draft</small>
        </>
      );
    },
    header: () => <span>Status</span>,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => {
      return (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="delete"
            onClicked={() => prepareRecordForDelete?.(info?.getValue())}
          />
          <TableAction
            type="edit"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/events-and-notification/allegation/allegation-info`,
                query: {
                  id: info?.getValue(),
                  action: "edit",
                  ...(!!router?.query?.fosterChildId && {
                    fosterChildId: router?.query?.fosterChildId,
                  }),
                },
              })
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/events-and-notification/allegation/allegation-info`,
                query: {
                  id: info.getValue(),
                  action: "view",
                  ...(!!router?.query?.fosterChildId && {
                    fosterChildId: router?.query?.fosterChildId,
                  }),
                },
              })
            }
          />
        </Box>
      );
    },
    header: () => <span>Action</span>,
  },
];

export const ALLEGATIONLISTPAGELIMIT = 10;
