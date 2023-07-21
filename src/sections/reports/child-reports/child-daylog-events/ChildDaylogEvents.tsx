import React from "react";
import { tableMockData } from ".";
import { useChildDaylogEvents } from "./useChildDaylogEvents";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ChildDaylogEvents = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useChildDaylogEvents();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CHILD DAYLOG EVENTS REPORT",
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

export default ChildDaylogEvents;