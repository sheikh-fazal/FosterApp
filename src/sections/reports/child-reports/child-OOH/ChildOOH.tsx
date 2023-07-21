import React from "react";
import { tableMockData } from ".";
import { useChildOOH } from "./useChildOOH";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildOOH = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildOOH();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD OOH REPORT",
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

export default ChildOOH;
