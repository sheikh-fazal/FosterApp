import { useTheme } from "@mui/material";
import { SOCIAL_WORKER_UPLOAD_DOCUMENT_TABLE_DATA } from "@root/dropdown-data/socialWorkerUploadDocumentData";
import React, { useRef, useState } from "react";

export const useUploadDocument = () => {
  const tableHeaderRefTwo = useRef<any>();
  const theme: any = useTheme();
  const [openDelete, setOpenDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false)

  // ----------------------------------------------------------------------
  const [data, setData] = React.useState(SOCIAL_WORKER_UPLOAD_DOCUMENT_TABLE_DATA);
  return {
    openDelete,
    setOpenDelete,
    tableHeaderRefTwo,
    openModal,
    setOpenModal,
    theme,
    data,
    setData
  };
};
