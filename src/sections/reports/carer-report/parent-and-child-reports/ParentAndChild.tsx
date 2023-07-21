import React from "react";
import { TableDemoData } from ".";
import { useParentAndChild } from "./useParentAndChild";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ParentAndChild = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useParentAndChild();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "PARENT AND CHILD REPORTS",
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

export default ParentAndChild;
