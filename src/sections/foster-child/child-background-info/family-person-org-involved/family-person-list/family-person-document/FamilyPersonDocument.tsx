import React from "react";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { useFamilyPersonDocument } from "./useFamilyPersonDocument";

export const FamilyPersonDocument = () => {
  const {
    data,
    query,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    setPage,
    setSearchValue,
    listDeleteHandler,
    submitFamilyPersonDocumentData,
  }: any = useFamilyPersonDocument();

  console.log(data);

  return (
    <>
      <UploadDocuments
        readOnly={query?.action === "view"}
        searchParam={(data: any) => {
          setSearchValue(data.search);
        }}
        tableData={data?.data}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        modalData={(data: any) => {
          console.log("data all the way here", data);
          submitFamilyPersonDocumentData(data);
        }}
        
        column={["documentName", "documentType", "documentDate", "personName", "password"]}
        onPageChange={(pageNo: any) => {
          setPage(() => (pageNo - 1) * 10);
        }}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages}
        onDelete={(data: any) => console.log("Deleting", data)}
      />
    </>
  );
};
