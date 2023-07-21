import React from "react";
import { Box, Checkbox, } from "@mui/material";
import { tableSubHeader, viewReportsFilterData, tableMockData } from ".";
import { useAdultHouseHoldMember } from "./useAdultHouseHoldMember";
import TableAction from "@root/components/TableAction";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const AdultHouseHoldMember = () => {
  const { handleSearch, handleAction, openDelete, handleCloseDeleteModal } =
    useAdultHouseHoldMember();

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row, table }: any) => (
        <Checkbox
          disabled={row?.original?.Assigned}
          checked={row?.original?.Assigned ? false : row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    },
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.fosterCarer,
      id: "fosterCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Foster Carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relationshipToFosterCarer,
      id: "relationshipToFosterCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Relationship To Foster Carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relativeName,
      id: "relativeName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Relative Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.signedDate,
      id: "signedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Signed Date</span>,
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
          {["edit", "delete", "view", "print"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => handleAction(action, info.row.original.id)}
              />
            </span>
          ))}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <ReportsLayout
      searchOnRight
      handleFilterBtn={handleSearch}
      tableHeaderProps={{ title: '', showAddBtn: true, onAdd: () => handleAction('add') }}
      selectFilterArray={viewReportsFilterData}
      handleFilterChange={(event: any) => { }}
      TableSubHeaderData={tableSubHeader}
      tableProps={{
        data: tableMockData,
        columns,
        isSuccess: true
      }}
      deleteModalProps={{
        open: openDelete,
        handleClose: handleCloseDeleteModal,
        onDeleteClick: handleCloseDeleteModal
      }}
    />
  );
};

export default AdultHouseHoldMember;
