import React, { useState } from "react";
import TableAction from "@root/components/TableAction";
import { useSchoolDetailInfoTable } from "./useSchoolDetailInfoTable";
import { Box, Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

export default function SchoolDetailInfoTable() {
  const [open, setOpen] = useState(false);
  const {
    router,
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
  } = useSchoolDetailInfoTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.firstName + " " + row?.lastName,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: "School Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relation,
      id: "relation",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Principal Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => (row?.livingAtHome ? "Yes" : "No"),
      id: "livingAtHome",
      cell: (info: any) => info.getValue(),
      header: "Action",
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {/* Can move it outside of the table if need arises */}

          <TableAction
            type="delete"
            onClicked={() => {
              console.log("delete this", info.row.original);
              setOpen(true);
            }}
            size="small"
          />

          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                `/foster-child/education-records/school-detail-info/edit-school-detail?${info.getValue()}`
              )
            }
            size="small"
          />

          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                `/foster-child/education-records/school-detail-info/view-school-detail?${info.getValue()}`
              )
            }
            size="small"
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <DeleteModel
        open={open}
        handleClose={() => setOpen(false)}
        onDeleteClick={() => {}}
      />
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="School Detail Info"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push(
            "/foster-child/education-records/school-detail-info/add-school-detail"
          );
        }}
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={family}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        showSerialNo
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
}
