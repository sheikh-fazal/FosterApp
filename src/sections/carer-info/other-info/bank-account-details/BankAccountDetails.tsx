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
<<<<<<<< HEAD:src/sections/carer-info/other-info/bank-account-details/BankAccountDetailsSection.tsx
        content={{}}
========
>>>>>>>> 7b76b21a (#other details bankDetailsForm UI done):src/sections/carer-info/other-info/bank-account-details/BankAccountDetails.tsx
        closeModal={setOpenModal}
        openModal={openModal}
        formData={(data: any) =>
          console.log("oooooooooooooooooooooi Add", data)
        }
      />
    </div>
  );
}
