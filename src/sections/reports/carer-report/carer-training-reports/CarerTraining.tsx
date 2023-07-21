import React from "react";
import { TableDemoData } from ".";
import { useCarerTraining } from "./useCarerTraining";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const CarerTraining = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useCarerTraining();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CARER TRAINING REPORTS",
        showAddBtn: true,
        onAdd: () => handleAction("add")
      }}
      tableProps={{
        data: TableDemoData,
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

export default CarerTraining;
