import React from "react";
import { TableDemoData } from ".";
import { useCarerVacancy } from "./useCareVacancy";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const CarerVacancy = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } =
    useCarerVacancy();
  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CARER VACANCY REPORTS",
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

export default CarerVacancy;
