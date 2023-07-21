import React from "react";
import { tableMockData } from ".";
import { useChildAllegations } from "./useChildAllegations";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildAllegations = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildAllegations();


  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD ALLEGATIONS REPORT",
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

export default ChildAllegations;
