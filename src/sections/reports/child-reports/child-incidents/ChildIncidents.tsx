import React from "react";
import { tableMockData } from ".";
import { useChildIncidents } from "./useChildIncidents";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildIncidents = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildIncidents();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD INCIDENTS REPORT - CRITICAL INCIDENT REPORT",
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

export default ChildIncidents;
