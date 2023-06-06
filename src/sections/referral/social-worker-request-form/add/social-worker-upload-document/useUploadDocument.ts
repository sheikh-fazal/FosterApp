import { useTheme } from "@mui/material";
import { SOCIAL_WORKER_UPLOAD_DOCUMENT_TABLE_DATA } from ".";
import React, { useRef, useState } from "react";

export const useUploadDocument = () => {
  const tableHeaderRefTwo = useRef<any>();
  const theme: any = useTheme();
  const [openDelete, setOpenDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [uploadModalDisabled, setUploadModalDisabled] = useState(false);
  // ----------------------------------------------------------------------
  const openDeleteFunc = (value: any) => {
    setOpenDelete(value);
  };
  const openModalFunc = (value: any) => {
    setOpenModal(value);
  };
  const uploadModalDisabledFunc = (value: any) => {
    setOpenModal(true);
    switch (value) {
      case "add":
        setUploadModalDisabled(false);
        break;
      case "view":
        setUploadModalDisabled(true);
        break;
      default:
        break;
    }
  };
  // ----------------------------------------------------------------------
  const [data, setData] = React.useState(
    SOCIAL_WORKER_UPLOAD_DOCUMENT_TABLE_DATA
  );
  return {
    openDelete,
    setOpenDelete,
    openDeleteFunc,
    tableHeaderRefTwo,
    openModal,
    openModalFunc,
    uploadModalDisabled,
    uploadModalDisabledFunc,
    theme,
    data,
    setData,
  };
};
