import React from "react";
import { columns } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useDocumentationTable } from "./useDocumentationTable";

export default function ClaDocumentationListTable() {

    const {router, data, isError, isLoading, isSuccess, isFetching} = useDocumentationTable();

    console.log("data", data)

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        showAddBtn
        title="CLA Documentation"
        searchKey="search"
        onAdd={() => {
            router.push(
            "/foster-child/child-background-info/cla-documentation/add-cla-documentation"
          );
        }}
      />
      <CustomTable
        data={data?.data}
        columns={columns}
        isSuccess={isSuccess}
        isLoading={isLoading}
        isFetching={isFetching}
        currentPage={1}
        isError={isError}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />
    </Card>
  );
}
