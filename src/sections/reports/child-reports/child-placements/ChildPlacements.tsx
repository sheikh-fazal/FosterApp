import React from "react";
import { tableMockData } from ".";
import { useChildPlacements } from "./useChildPlacements";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildPlacements = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildPlacements();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD PLACEMENTS REPORT",
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

export default ChildPlacements;
