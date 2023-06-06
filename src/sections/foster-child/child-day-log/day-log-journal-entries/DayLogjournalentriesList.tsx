import React from "react";
import { columns } from ".";
import router from "next/router";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";

export default function DayLogjournalentriesListTable() {

  const data = [
    {
      id: 1,
      srNo: "1",
      date: "02:30:20",
      type: "Day To Day Activity",
      subject: "",
      status: "",
      locked: "",
    },
  ];



  return (
    <>
      <Card>
        <TableHeader
          showAddBtn
          title="Day Log/Journal Entries"
          onAdd={() => {
            router.push(
              `/foster-child/`
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
