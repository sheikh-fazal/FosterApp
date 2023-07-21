import React from "react";
import { TableDemoData } from ".";
import { useCarerImmunisationDetail } from "./useCarerImmunisationDetail";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const CarerImmunisationDetail = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useCarerImmunisationDetail();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CARER IMMUNISATION DETAILS REPORTS",
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

export default CarerImmunisationDetail;
