import React from "react";
import { TableDemoData } from ".";
import { useSecondOpinin } from "./useSecondOpinin";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const SecondOpinin = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useSecondOpinin();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "SECOND OPINION REPORTS",
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

export default SecondOpinin;
