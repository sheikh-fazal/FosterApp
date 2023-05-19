import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import { useTraineeTable } from "./useTraineeTable";
// import theme from '@root/theme';

const TaineeListTable = () => {
  const {
    tableHeaderRefTwo,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    columns,
    TableData,
  } = useTraineeTable();
  return (
    <CustomTable
      data={TableData}
      columns={columns}
      isLoading={false}
      isFetching={false}
      isError={false}
      isSuccess={true}
      isPagination={false}
      currentPage={1}
      onPageChange={(data: any) => {
        console.log("Current page data: ", data);
      }}
      onSortByChange={(data: any) => {
        console.log("Sort by: ", data);
      }}
    />
  );
};

export default TaineeListTable;
