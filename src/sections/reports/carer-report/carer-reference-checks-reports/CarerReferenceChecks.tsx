import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { TableDemoData } from ".";
import CustomTable from "@root/components/Table/CustomTable";
import { useCarerReferenceChecks } from "./useCarerReferenceChecks";
import DeleteModel from "@root/components/modal/DeleteModel";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const CarerReferenceChecks = () => {
  const { columns, handleCloseDeleteModal, openDelete, handleAction } = useCarerReferenceChecks();

  return (
    <ReportsLayout
      hideFilterSection
      tableHeaderProps={{
        title: "CARER REFERENCE CHECKS REPORTS",
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

export default CarerReferenceChecks;
