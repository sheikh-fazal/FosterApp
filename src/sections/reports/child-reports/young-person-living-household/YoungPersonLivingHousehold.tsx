import React from "react";
import { tableMockData } from ".";
import { useYoungPersonLivingHousehold } from "./useYoungPersonLivingHousehold";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const YoungPersonLivingHousehold = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns, } = useYoungPersonLivingHousehold();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "YOUNG PERSON LIVING IN THE HOUSEHOLD'S COMMENTS",
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

export default YoungPersonLivingHousehold;
