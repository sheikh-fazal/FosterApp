import React from "react";
import UploadDocuments from "@root/sections/documents/UploadDocuments";
import { UploadDocumentData } from ".";
import { useFamilyPersonDocument } from "./useFamilyPersonDocument";

export const FamilyPersonDocument = () => {
  const {
    query,
    data,
    isLoading,
    isSuccess,
    isFetching,
    isError,
    submitFamilyPersonDocumentData,
  }:any = useFamilyPersonDocument();

  console.log(data);

  return (
    <>
      <UploadDocuments
        readOnly={false}
        searchParam={(searchedText: string) =>
          console.log("searched Value", searchedText)
        }
        tableData={data?.data}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        modalData={(data: any) => {
          console.log("data all the way here", data);
          submitFamilyPersonDocumentData(data);
        }}
        column={["docName", "docType", "date", "uploadedBy", "password"]}
        onPageChange={(page: any) => console.log("parent log", page)}
      />
    </>
  );
};
