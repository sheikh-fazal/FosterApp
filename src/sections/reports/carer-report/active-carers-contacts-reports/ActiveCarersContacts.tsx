import React from "react";
import { TableDemoData } from ".";
import { useActiveCarersContacts } from "./useActiveCarersContacts";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const ActiveCarersContacts = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useActiveCarersContacts();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "ACTIVE CARER CONTACT REPORTS",
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

export default ActiveCarersContacts;
