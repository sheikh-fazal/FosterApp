import React from "react";
import { tableMockData } from ".";
import { useFosteredYoungPerson } from "./useFosteredYoungPerson";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const FosteredYoungPerson = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } = useFosteredYoungPerson();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "FOSTERED YOUNG PERSON'S COMMENTS",
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

export default FosteredYoungPerson;
