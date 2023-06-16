import React, { useState } from "react";
import { useSafeCarePolicyList } from "./useSafeCarePolicyList";
import { Box } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";

const SafeCarePolicyList = () => {
  const [tabelData, setTabelData] = useState([
    {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      e: "e",
      f: "f",
    },
    {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      e: "e",
      f: "f",
    },
  ]);
  const {
    tableHeaderRef,
    columns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
  } = useSafeCarePolicyList();
  return (
    <Box>
      <TableHeader
        ref={tableHeaderRef}
        title="Safe Care Policy"
        searchKey="search"
        showAddBtn={true}
        onAdd={() => console.log("Test")}
        onChanged={(data: any) => {
          setSearchValue(data?.search);
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={isLoading}
        // showSerialNo
        isFetching={isFetching}
        isError={isError}
        isPagination={true}
        isSuccess={isSuccess}
        currentPage={1}
        totalPages={2}
        onPageChange={(data: any) => {
          return;
          // setPage((page) => data - 1);
        }}
        onSortByChange={(data: any) => {
          // console.log("Sort by: ", data);
          return;
        }}
      />
    </Box>
  );
};

export default SafeCarePolicyList;
