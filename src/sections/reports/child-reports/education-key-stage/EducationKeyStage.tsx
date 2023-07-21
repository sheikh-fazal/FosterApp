import React from "react";
import { tableMockData } from ".";
import { useEducationKeyStage } from "./useEducationKeyStage";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const EducationKeyStage = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useEducationKeyStage();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "EDUCATION KEY STAGE REPORT",
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

export default EducationKeyStage;
