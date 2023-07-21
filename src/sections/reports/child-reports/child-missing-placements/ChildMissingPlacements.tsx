import React from "react";
import { tableMockData } from ".";
import { useChildMissingPlacements } from "./useChildMissingPlacements";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildMissingPlacements = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildMissingPlacements();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD MISSING PLACEMENTS REPORT",
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

export default ChildMissingPlacements;
