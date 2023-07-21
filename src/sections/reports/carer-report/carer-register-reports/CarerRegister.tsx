import React from "react";
import { TableDemoData } from ".";
import { useCarerRegister } from "./useCarerRegister";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const CarerRegister = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useCarerRegister();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CARER REGISTER REPORTS",
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

export default CarerRegister;
