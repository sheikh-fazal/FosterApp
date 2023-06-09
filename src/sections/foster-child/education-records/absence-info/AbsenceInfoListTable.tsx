import React from "react";
import { data } from ".";
import router from "next/router";
import { Box, Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";

export default function AbsenceInfoListTable() {
  const columns = [
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
          <DeletePrompt />
          <TableAction
            type="edit"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/education-records/absence-info/add-absence-info`,
                query: { action: "edit", id: "" },
              })
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/education-records/absence-info/add-absence-info`,
                query: { action: "view", id: "" },
              })
            }
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Card>
        <TableHeader
          showAddBtn
          title="Absence Info"
          onAdd={() => {
            router.push({
              pathname: `/foster-child/education-records/absence-info/add-absence-info`,
              query: { action: "add" },
            });
          }}
        />
        <CustomTable
          data={data}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
        />
      </Card>
    </>
  );
}
