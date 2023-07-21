import React from "react";
import { tableMockData } from ".";
import { useChildRegister } from "./useChildRegister";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildRegister = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildRegister();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD REGISTER REPORT FOSTERED CHILD'S COMMENTS",
        showAddBtn: true,
        onAdd: () => handleAction("add")
      }}
      tableProps={{
        data: tableMockData,
        columns,
        isSuccess: true
      }}
      deleteModalProps={{
        open: openDelete,
        handleClose: handleCloseDeleteModal,
        onDeleteClick: handleCloseDeleteModal
      }}
    />
  );
};

export default ChildRegister;
