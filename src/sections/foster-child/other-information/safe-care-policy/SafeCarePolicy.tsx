import React, { useState } from "react";
import { useSafeCarePolicy } from "./useSafeCarePolicy";
import { Box } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";

const SafeCarePolicy = () => {
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
  } = useSafeCarePolicy();
  return (
    <Box>
      <TableHeader
        ref={tableHeaderRef}
        title="Safe Care Policy"
        searchKey="search"
        showAddBtn={true}
        onAdd={() => console.log("Test")}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={data?.data}
        columns={columns}
        isLoading={isLoading}
        // showSerialNo
        isFetching={isFetching}
        isError={isError}
        isPagination={false}
        isSuccess={isSuccess}
        //   currentPage={data?.meta?.page ?? 1}
        //   totalPages={data?.meta?.pages ?? 2}
        //   onPageChange={(data: any) => {
        //     setPage((page) => data - 1);
        //   }}
        //   onSortByChange={(data: any) => {
        //     console.log("Sort by: ", data);
        //   }}
      />
    </Box>
  );
};

export default SafeCarePolicy;
