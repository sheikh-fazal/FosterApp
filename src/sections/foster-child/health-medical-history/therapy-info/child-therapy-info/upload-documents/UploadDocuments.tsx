import React, { useState } from "react";
import { useSafeCarePolicyList } from "./useSafeCarePolicyList";
import { Box } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";

const UploadDocuments = () => {
  // const [tabelData, setTabelData] = useState([
  //   {
  //     a: "a",
  //     b: "b",
  //     c: "c",
  //     d: "d",
  //     e: "e",
  //     f: "f",
  //   },
  //   {
  //     a: "a",
  //     b: "b",
  //     c: "c",
  //     d: "d",
  //     e: "e",
  //     f: "f",
  //   },
  // ]);
  const {
    tableHeaderRef,
    columns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    setPage,
    page,
  } = useSafeCarePolicyList();
  return (
    <Box>
      <TableHeader
        ref={tableHeaderRef}
        title="Uploaded Documents"
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
        showSerialNo
        isFetching={isFetching}
        isError={isError}
        isPagination={true}
        isSuccess={isSuccess}
        currentPage={page}
        totalPages={10}
        onPageChange={(data: any) => {
          setPage(() => data);
        }}
        onSortByChange={(data: any) => {
          // console.log("Sort by: ", data);
          return;
        }}
      />
    </Box>
  );
};

export default UploadDocuments;
