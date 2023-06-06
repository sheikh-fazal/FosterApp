import React from "react";
import { data } from ".";
import router from "next/router";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useAbsenceInfoListTable } from "./useAbsenceInfoListTable";

export default function AbsenceInfoListTable() {
  const {columns} = useAbsenceInfoListTable()
  return (
    <>
      <Card>
        <TableHeader
          showAddBtn
          title="Absence Info"
          onAdd={() => {
            router.push(
              `/foster-child/child-background-info/child-chronology-of-events/absence-info/add-absence-info`
            );
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
