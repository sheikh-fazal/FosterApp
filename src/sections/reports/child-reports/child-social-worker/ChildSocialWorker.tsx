import React from "react";
import { tableMockData } from ".";
import { useChildSocialWorker } from "./useChildSocialWorker";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildSocialWorker = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildSocialWorker();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD'S SOCIAL WORKER REPORT",
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

export default ChildSocialWorker;
