import React from "react";
import { tableMockData } from ".";
import { useFosteringServiceManager } from "./useFosteringServiceManager";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const FosteringServiceManager = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useFosteringServiceManager();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "FOSTERING SERVICE MANAGER REPORT",
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

export default FosteringServiceManager;