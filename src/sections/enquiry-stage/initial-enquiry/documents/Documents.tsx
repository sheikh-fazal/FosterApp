import TableHeader from "@root/components/TableHeader";
import React, { useState } from "react";
import { DocumentTable } from "./DocumentTable";
import { useGetInitialInquiryDocumentsDataQuery } from "@root/services/carer-info/personal-info/initial-enquiry/initial-inquiry-all";
import ActionModal from "./ActionModal";

const DocumentsInitialEnquiry = ({ readOnly }: { readOnly: boolean }) => {
  const [openModal, setOpenModal] = useState(false);
  const changeHandler = (i: any) => {
    console.log(i);
  };
  return (
    <div>
      <TableHeader
        title="Uploaded Documents"
        onChanged={changeHandler}
        showAddBtn={readOnly}
        onAdd={() => setOpenModal(true)}
      />
      <DocumentTable readOnly={readOnly} />
      <ActionModal
        closeModal={setOpenModal}
        openModal={openModal}
        formData={(data: any) =>
          console.log("oooooooooooooooooooooi data", data)
        }
      />
    </div>
  );
};

export default DocumentsInitialEnquiry;
