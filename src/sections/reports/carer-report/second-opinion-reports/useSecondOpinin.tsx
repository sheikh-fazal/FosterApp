import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useState } from "react";

export const useSecondOpinin = () => {
  const path = "/reports/carer-reports/second-opinion/form";
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDeleteModal = () => setOpenDelete(!openDelete);
  const router = useRouter();
  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "add":
        router.push({ pathname: path });
      case "view":
        router.push({ pathname: `${path}/${id}`, query: { action: "view" } });
        break;
      case "delete":
        setOpenDelete(true);
        break;
      case "edit":
        router.push({ pathname: `${path}/${id}`, query: { action: "edit" } });
        break;
      case "print":
        window.print();
        break;
      default:
        break;
    }
  };
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table);
        return (
          <Box>
            <Checkbox
              indeterminate={table.getIsSomeRowsSelected()}
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </Box>
        );
      },
      cell: ({ row, table }: any) => (
        <Box>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={row?.original?.Assigned ? false : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.sNO,
      id: "S.NO",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.prospectiveFosterCarer,
      id: "prospectiveFosterCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name of Prospective foster carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.personCompletingReport,
      id: "personCompletingReport",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name of person completing report</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.statusPosition,
      id: "statusPosition",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status/position in fostering service</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.secondOpinionVisit,
      id: "secondOpinionVisit",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of second opinion visit</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdDate,
      id: "createdDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.createdBy,
      id: "createdBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Created By</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.modifiedDate,
      id: "modifiedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Modified Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.modifiedBy,
      id: "modifiedBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Modified By</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["view", "delete", "edit", "print"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => handleAction(action, info.row.original.id)}
              />
            </span>
          ))}
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
  return {
    columns,
    handleAction,
    handleCloseDeleteModal,
    openDelete,
    router,
    path,
  };
};
