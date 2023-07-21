import React from "react";
import { tableMockData } from ".";
import { useClaDocumentation } from "./useClaDocumentation";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ClaDocumentation = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns, } = useClaDocumentation();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CLA DOCUMENTATION REPORT",
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

export default ClaDocumentation;