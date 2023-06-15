import { useTheme } from "@mui/material";
import React from "react";
import { READYFORPLACEMENT } from ".";

export const useReadyForPlacement = () => {
  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [readyForPlacementData, setReadyForPlacementData] =
    React.useState<any>(READYFORPLACEMENT);
  const [formDialogId, setFormDialogId] = React.useState<any>();
  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    readyForPlacementData,
    setReadyForPlacementData,
  };
};
