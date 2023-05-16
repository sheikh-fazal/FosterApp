import { useTheme } from "@mui/material";
import React from "react";

export const useContractsAndDeclarations = () => {
  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();

  const [formDialogId, setFormDialogId] = React.useState<any>();

  const [signedFormId, setsignedFormId] = React.useState<any>();

  const [unSignedFormId, setUnSignedFormId] = React.useState<any>();
  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    signedFormId,
    setsignedFormId,
    unSignedFormId,
    setUnSignedFormId,
  };
};
