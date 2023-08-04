import React, { useState } from "react";
import { useStudySupportInfoTable } from "./useStudySupportInfoTable";
import { Box, Card } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { enqueueSnackbar } from "notistack";
import dayjs from "dayjs";
import { useRouter } from "next/router";

export const StudySupportInfoTable = ({ fosterChildId }: any) => {
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
  } = useStudySupportInfoTable();
  const columns = [
    {
      accessorFn: (row: any) => row?.fromDate,
      id: "fromDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: "From Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.studyType,
      id: "studyType",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Study Type",
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
              router.push({
                pathname:
                  "/foster-child/education-records/study-support-info/edit-study-support-info",
                query: {
                  action: "edit",
                  id: info.row.original.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
            size="small"
          />

          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/education-records/study-support-info/view-study-support-info",
                query: {
                  action: "view",
                  id: info.row.original.id,
                  fosterChildId: fosterChildId,
                },
              })
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
        title="Study Support Info"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/foster-child/education-records/study-support-info/add-study-support-info",
            query: { action: "add", fosterChildId: fosterChildId },
          });
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
};
