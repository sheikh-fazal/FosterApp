import React from "react";
import { TableDemoData } from ".";
import { usePermanentFostering } from "./usePermanentFostering";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const PermanentFostering = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = usePermanentFostering();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "PERMANENT FOSTERING REPORTS",
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

export default PermanentFostering;
