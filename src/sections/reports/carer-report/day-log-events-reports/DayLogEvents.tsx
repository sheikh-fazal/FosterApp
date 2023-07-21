import React from "react";
import { TableDemoData } from ".";
import { useDayLogEvent } from "./useDayLogEvent";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const DayLogEvent = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useDayLogEvent();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "DAYLOG EVENTS REPORTS",
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

export default DayLogEvent;
