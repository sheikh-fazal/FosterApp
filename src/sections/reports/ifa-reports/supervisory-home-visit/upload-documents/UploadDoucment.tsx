import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import { TableDemoData } from ".";
import { useUploadDocument } from "./useUploadDoucument";
import TableHeader from "@root/components/TableHeader";

const SupervisoryUploadDocuments = () => {
  const { columns } = useUploadDocument();

  return (
    <>
      <TableHeader title={'Uploaded Documents'} hideSearch />
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
    </>
  );
};

export default SupervisoryUploadDocuments;
