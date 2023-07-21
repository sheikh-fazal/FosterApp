import React from "react";
import { TableDemoData } from ".";
import { useAnnualReviewDate } from "./useAnnualReviewDate";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const AnnualReviewDate = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useAnnualReviewDate();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "ANNUAL REVIEW REPORTS",
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

export default AnnualReviewDate;
