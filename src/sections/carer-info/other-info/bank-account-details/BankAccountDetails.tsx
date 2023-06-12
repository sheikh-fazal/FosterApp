import TableHeader from "@root/components/TableHeader";
import React, { useState } from "react";
import { BankAccountDetailsTable } from "./BankAccountDetailsTable";
import BankAccountDetailsForm from "./BankAccountDetailsForm";

export default function BankAccountDetailsSection() {
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
      <BankAccountDetailsForm
        content={{}}
        closeModal={setOpenModal}
        openModal={openModal}
        formData={(data: any) =>
          console.log("oooooooooooooooooooooi Add", data)
        }
      />
    </div>
  );
}
