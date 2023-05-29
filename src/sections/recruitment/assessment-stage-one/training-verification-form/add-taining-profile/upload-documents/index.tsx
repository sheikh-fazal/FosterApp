import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
// import ActionModal from "@root/sections/enquiry-stage/initial-enquiry/documents/ActionModal";
import dayjs from "dayjs";
import { useState } from "react";



export const columnsRecruitmentUpload= (cancelDelete:any, setCancelDelete:any, handleDelete:any) => [
  {
    id: "select",
    header: ({ table, row }: any) => {
      // console.log(table.getSelectedRowModel().flatRows);
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
    accessorFn: (row: any) => row,
    id: "srNo",
    cell: (info: any) => Number(info?.row?.id) + 1,
    header: "Sr. No",
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.documentName,
    id: "documentName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Document Name</span>,
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
    accessorFn: (row: any) => row.date,
    id: "date",
    cell: (info: any) => dayjs(info.getValue()).format('MM/DD/YYYY'),
    header: () => <span>Document Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.uploadBy,
    id: "uploadBy",
    cell: (info: any) => info.getValue(),
    header: () => <span>Person Uploaded</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.password,
    id: "password",
    cell: (info: any) => info.getValue(),
    header: () => <span>Password</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="download"
          onClicked={() => console.log(info.getValue())}
        />
        <TableAction
              type="delete"
              onClicked={() => setCancelDelete(true)}
              size="small"
            />
          <DeleteModel
            open={cancelDelete}
            onDeleteClick={handleDelete}
            handleClose={() => setCancelDelete(!cancelDelete)}
          />
        {/* <ActionModal content={info} readOnly={true} btnType="view" /> */}
      </Box>
    ),
    header: () => <span>Actions</span>,
    isSortable: false,
  },
];
