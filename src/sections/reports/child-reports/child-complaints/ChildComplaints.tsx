import React from "react";
import { tableMockData } from ".";
import { useChildComplaints } from "./useChildComplaints";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildComplaints = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildComplaints();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD COMPLAINTS  REPORTS",
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

export default ChildComplaints;