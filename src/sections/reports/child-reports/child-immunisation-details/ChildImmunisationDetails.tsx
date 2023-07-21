import React from "react";
import { tableMockData } from ".";
import { useChildImmunisationDetails } from "./useChildImmunisationDetails";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildImmunisationDetails = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildImmunisationDetails();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD IMMUNISATION DETAILS REPORT",
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

export default ChildImmunisationDetails;