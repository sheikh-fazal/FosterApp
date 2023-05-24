import TableHeader from "@root/components/TableHeader";
import ActionModal from "@root/sections/documents/UploadDocumentModal";
import React, { useState } from "react";
import { BankAccountDetailsTable } from "./BankAccountDetailsTable";

export default function BankAccountDetails() {
  const [openModal, setOpenModal] = useState(false);
  const changeHandler = (i: any) => {
    console.log(i);
  };
  return (
    <div>
      <TableHeader
        title="Uploaded Documents"
        onChanged={changeHandler}
        showAddBtn
        onAdd={() => setOpenModal(true)}
      />
      <BankAccountDetailsTable />
      <ActionModal
        closeModal={setOpenModal}
        openModal={openModal}
        formData={(data: any) =>
          console.log("oooooooooooooooooooooi data", data)
        }
      />
    </div>
  );
}
