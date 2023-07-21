import React from "react";
import { tableMockData } from ".";
import { useReviewingOfficer } from "./useReviewingOfficer";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ReviewingOfficer = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useReviewingOfficer();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "REVIEWING OFFICER REPORT",
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

export default ReviewingOfficer;
