import React from "react";
import { TableDemoData } from ".";
import { useCarerPlacement } from "./useCarerPlacement";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const CarerPlacement = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useCarerPlacement();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CARER PLACEMENT REPORTS",
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

export default CarerPlacement;
