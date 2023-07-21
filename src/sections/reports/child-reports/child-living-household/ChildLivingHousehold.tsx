import React from "react";
import { tableMockData } from ".";
import { useChildLivingHousehold } from "./useChildLivingHousehold";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildLivingHousehold = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildLivingHousehold();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD LIVING IN THE HOUSEHOLD'S COMMENTS",
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

export default ChildLivingHousehold;

