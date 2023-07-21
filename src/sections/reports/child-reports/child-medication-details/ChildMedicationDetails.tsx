import React from "react";
import { tableMockData } from ".";
import { useChildMedicationDetails } from "./useChildMedicationDetails";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildMedicationDetails = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildMedicationDetails();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD MEDICATION DETAILS REPORT",
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

export default ChildMedicationDetails;