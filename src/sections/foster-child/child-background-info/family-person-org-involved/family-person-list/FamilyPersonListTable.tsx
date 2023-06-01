import React from "react";
import { columns } from ".";
import router from "next/router";
import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";

export default function FamilyPersonListTable() {

  const data = [
    {
      id: 1,
      srNo: "1",
      contactName: "Khan",
      contactType: "Nil",
    },
    {
      srNo: "2",
      contactName: "Khan",
      contactType: "Nil",
    },
  ];



  return (
    <>
      <Card>
        <TableHeader
          showAddBtn
          title="Child Family / Persons & Org. Involved"
          onAdd={() => {
            router.push(
              `/family-person-list/family-form-list`
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
