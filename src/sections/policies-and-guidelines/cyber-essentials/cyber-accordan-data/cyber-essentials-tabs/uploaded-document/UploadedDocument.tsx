import React from "react";
import { data } from ".";
import TableHeader from "@root/components/TableHeader";
import { useUploadedDocument } from "./useUploadedDocument";
import DeleteModel from "@root/components/modal/DeleteModel";
import CustomTable from "@root/components/Table/CustomTable";

// ====================================================================

const UploadedDocument = () => {
  const { columns, theme, isDeleteModal, handleClose } = useUploadedDocument();
  return (
    <>
      <TableHeader title="Panel Case List" searchKey="search" showAddBtn onAdd={() => alert("ADD")} />
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
        rootSX={{ my: theme.spacing(2), mt: 0 }}
      />
      <DeleteModel open={isDeleteModal} handleClose={handleClose} />
    </>
  );
};

export default UploadedDocument;
