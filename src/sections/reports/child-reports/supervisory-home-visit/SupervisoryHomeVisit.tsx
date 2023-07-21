import React from "react";
import { tableMockData } from ".";
import { useSupervisoryHomeVisit } from "./useSupervisoryHomeVisit";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ReviewingOfficer = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useSupervisoryHomeVisit();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "SUPERVISORY HOME VISIT",
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
