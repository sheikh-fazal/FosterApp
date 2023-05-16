import { useTheme } from "@mui/material";
import React from "react";

export const useAssessmentStageOne = () => {
  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [formDialogId, setFormDialogId] = React.useState<any>();
  return {
    theme,
    openIdForInfo,
    formDialogId,
    setFormDialogId,
    setOpenIdForInfo,
  };
};
