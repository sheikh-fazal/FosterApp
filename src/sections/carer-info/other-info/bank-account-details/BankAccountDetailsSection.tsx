import TableHeader from "@root/components/TableHeader";
import React, { useState } from "react";
import { BankAccountDetailsTable } from "./BankAccountDetailsTable";
import BankAccountDetailsForm from "./BankAccountDetailsForm";

export default function BankAccountDetailsSection(props: any) {
  const {
    tableData,
    formData,
    searchedText,
    gettingStatus,
    postingStatus,
    editingStatus,
    editedData,
    onDelete,
  } = props;
  console.log(props);

  const [openModal, setOpenModal] = useState(false);
  const changeHandler = (i: any) => {
    searchedText(i);
  };
  return (
    <div>
      <TableHeader
        title="Bank Details"
        onChanged={changeHandler}
        showAddBtn
        onAdd={() => setOpenModal(true)}
      />
      <BankAccountDetailsTable
        tableData={tableData}
        onDelete={onDelete}
        editedData={editedData}
        gettingStatus={gettingStatus}
        editingStatus={editingStatus}
      />
      <BankAccountDetailsForm
        content={{}}
        closeModal={setOpenModal}
        openModal={openModal}
        formData={(data: any) => formData(data)}
        status={postingStatus}
      />
    </div>
  );
}
