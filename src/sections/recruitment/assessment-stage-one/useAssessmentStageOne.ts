import { useTheme } from "@mui/material";
import React from "react";
import { ASSESSMENTSTAGEONEDATA } from ".";

export const useAssessmentStageOne = () => {
  const theme: any = useTheme();
  const [assessmentStageOneData, setAssessmentStageOneData] = React.useState(
    ASSESSMENTSTAGEONEDATA
  );
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [formDialogId, setFormDialogId] = React.useState<any>();
  return {
    theme,
    openIdForInfo,
    formDialogId,
    setFormDialogId,
    setOpenIdForInfo,
    assessmentStageOneData,
    setAssessmentStageOneData,
  };
};
