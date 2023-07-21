import React from "react";
import { TableDemoData } from ".";
import { useRecordCriticalIncidents } from "./useRecordCriticalIncidents";
import ReportsLayout from "../../reports-layout/ReportsLayout";


const RecordCriticalIncidents = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useRecordCriticalIncidents();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CARER INCIDENTS REPORTS",
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

export default RecordCriticalIncidents;
