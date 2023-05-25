import React from "react";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import UploadDocumentModal from "@root/components/modal/UploadDocumentModal/UploadDocumentModal";
import { useUploadDocTable } from "./useUploadDocTable";

const UploadDocTable = (props: any) => {
  const {
    tableHeaderRefTwo,
    openModal,
    setOpenModal,
    onSubmit,
    tableData,
    columns,
    setViewOpenModal,
    viewOpenModal,
  } = useUploadDocTable();

  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Uploaded Documents"
        searchKey="search"
        showAddBtn
        onAdd={() => setOpenModal(!openModal)}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
      <UploadDocumentModal
        disabled
        open={viewOpenModal}
        handleClose={() => setViewOpenModal(!viewOpenModal)}
      />
      <UploadDocumentModal
        isHideSubmitButton
        open={openModal}
        handleClose={() => setOpenModal(!openModal)}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default UploadDocTable;
