import React, { useState } from "react";

import TableHeader from "@root/components/TableHeader";
import { UploadDocumentTable } from "./UploadDocumentTable";

import UploadDocumentModal from "./UploadDocumentModal";

const UploadDocuments = (props: any) => {
  const {
    readOnly,
    tableData,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    modalData,
  } = props;
  const [openModal, setOpenModal] = useState(false);
  const changeHandler = (i: any) => {
    console.log(i);
  };
  return (
    <div>
      <TableHeader
        title="Uploaded Documents"
        onChanged={changeHandler}
        showAddBtn={!readOnly}
        onAdd={() => setOpenModal(true)}
      />
      <UploadDocumentTable
        readOnly={readOnly}
        tableData={tableData}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
      />
      <UploadDocumentModal
        closeModal={setOpenModal}
        openModal={openModal}
        formData={(data: any) => {
          // console.log("oooooooooooooooooooooi data", data);
          modalData(data);
        }}
      />
    </div>
  );
};

export default UploadDocuments;
