import React from "react";
import { TableDemoData } from ".";
import { useDiaryRecordings } from "./useDiaryRecordings";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const DiaryRecordings = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useDiaryRecordings();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "DIARY RECORDING BY CARER REPORTS",
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

export default DiaryRecordings;
