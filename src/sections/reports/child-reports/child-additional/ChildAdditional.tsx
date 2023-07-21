
import React from "react";
import { tableMockData } from ".";
import { useChildAdditional } from "./useChildAdditional";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildAdditional = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildAdditional();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD ADDITIONAL REPORTS",
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

export default ChildAdditional;

