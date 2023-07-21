import React, { useState } from "react";
import { useChildUploadDocuemntInfoList } from "./useChildUploadDocuemntInfoList";
import { Box, Grid } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import IsFetching from "@root/components/loaders/IsFetching";

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
    therapInfoCon,
  }: any = useChildUploadDocuemntInfoList();
  const { someAsyncAction } = therapInfoCon;
  return (
    <Grid sx={{ position: "relative" }}>
      {someAsyncAction && <IsFetching isFetching />}
      <TableHeader
        ref={tableHeaderRef}
        title="Child Therapy Info "
        searchKey="search"
        showAddBtn={true}
        onAdd={() => console.log("Test")}
        onChanged={(data: any) => {
          setSearchValue(data?.search);
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={data?.data?.therapy_info}
        columns={columns}
        isLoading={isLoading}
        showSerialNo
        isFetching={isFetching}
        isError={isError}
        isPagination={true}
        isSuccess={isSuccess}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages || 1}
        // onPageChange={(data: any) => {
        //   setPage(() => data);
        // }}
        onPageChange={(pageNo: any) => {
          setPage((pageNo - 1) * 10);
        }}
        onSortByChange={(data: any) => {
          // console.log("Sort by: ", data);
          return;
        }}
      />
    </Grid>
  );
};

export default UploadDocuments;
