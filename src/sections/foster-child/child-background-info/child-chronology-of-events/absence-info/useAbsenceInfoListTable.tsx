import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useRouter } from "next/router";
import React from "react";

export  function useAbsenceInfoListTable() {
  const router = useRouter();
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
        return (
          <Box>
            <Checkbox
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
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.DateofAbsence,
      id: "DateofAbsence",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Absence</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.DateofReturn,
      id: "DateofReturn",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Return</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.ReasonForAbsence,
      id: "ReasonForAbsence",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reason For Absence</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="delete"
            onClicked={() => console.log(info.getValue())}
          />
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                `/foster-child/child-background-info/family-person-org-involved/family-form-list`
              )
            }
          />

          <DeleteModel onDeleteClick={() => {}} />
          <TableAction
            type="view"
            onClicked={() => console.log(info.getValue())}
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];
  return{
    columns
  }
}
