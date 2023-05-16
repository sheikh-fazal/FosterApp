import { Box, Checkbox } from "@mui/material";
import DeleteModel from "@root/components/modal/DeleteModel";
import TableAction from "@root/components/TableAction";
import React, { useState } from "react";

const useRecruitmentUploadDocuments = () => {
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const deleteList = (data: any) => {};

  const [data, setData] = useState([
    {
      id: 1,
      srNo: "1",
      documentName: "Activity Info",
      documentType: "PDF",
      documentDate: "19/05/2021",
      personUploaded: "Name Xame",
      password: "123abc",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
    {
      id: 2,
      srNo: "2",
      documentName: "Activity Info",
      documentType: "PDF",
      documentDate: "19/05/2021",
      personUploaded: "Name Xame",
      password: "123abc",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
  ]);

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
      accessorFn: (row: any) => row.documentDate,
      id: "documentDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.personUploaded,
      id: "personUploaded",
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
          <DeleteModel onDeleteClick={()=> {}} />
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
  return { columns, data, openFormDialog, setOpenFormDialog, deleteList };
};

export default useRecruitmentUploadDocuments;
