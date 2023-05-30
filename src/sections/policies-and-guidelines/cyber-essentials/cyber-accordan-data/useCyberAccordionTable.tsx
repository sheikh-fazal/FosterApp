import React from "react";
import router from "next/router";
import TableAction from "@root/components/TableAction";
import { Box, Checkbox, useTheme } from "@mui/material";

// ===================================================================================================

export const useCyberAccordionTable = () => {
  const theme = useTheme();

  const appendixAColumns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        return (
          <Box>
            <Checkbox checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />
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
      accessorFn: (row: any) => row.id,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.title,
      id: "title",
      cell: (info: any) => info.getValue(),
      header: () => <span>Title</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateUploaded,
      id: "dateUploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.author,
      id: "author",
      cell: (info: any) => info.getValue(),
      header: () => <span>Author</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.versions,
      id: "versions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Versions</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname: "/policies-and-guidelines/cyber-essentials/add-form",
                query: { action: "view", id: info?.row?.original?.id },
              })
            }
          />
          <TableAction size="small" type="print" onClick={() => alert("printer icon")} />
          <TableAction size="small" type="download" onClick={() => alert("printer icon")} />
        </Box>
      ),
      header: () => <span>action</span>,
      isSortable: false,
    },
  ];

  return {
    appendixAColumns,
    theme,
  };
};
