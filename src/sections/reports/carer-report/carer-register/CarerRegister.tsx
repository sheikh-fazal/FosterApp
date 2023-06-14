import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { TableDemoData } from ".";
import CustomTable from "@root/components/Table/CustomTable";
import { useCarerRegister } from "./useCarerRegister";

 const CarerRegister = () => {
  const { columns } = useCarerRegister();
  return (
    <Card sx={{ py: 2, px: 1 }}>
      <TableHeader
        title="CARER REGISTER REPORTS"
        searchKey="search"
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={TableDemoData}
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
  );
};

export default CarerRegister;
