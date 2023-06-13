import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const claMedicalListTableColumnsFunction = (router?: any) => [
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
                    `/foster-child/health-medical-history/statutory-medical-list/cla-medical-info/${info?.row?.id}?action=edit`
                  )
                }
              />
              <TableAction
                type="view"
                onClicked={() =>
                  router.push(
                    `/foster-child/health-medical-history/statutory-medical-list/cla-medical-info/${info?.row?.id}?action=view`
                  )
                }
              />
            </Box>
          );
        },
        header: () => <span>Action</span>,
        isSortable: false,
      },
]