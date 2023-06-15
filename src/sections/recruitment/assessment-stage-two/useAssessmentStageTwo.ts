import { useTheme } from "@mui/material";
import React from "react";
import { ASSESSMENTSTAGETWODATA } from ".";

export const useAssessmentStageTwo = () => {
  const theme: any = useTheme();
  const [assessmentStageTwoData, setAssessmentStageTwoData] =
    React.useState<any>(ASSESSMENTSTAGETWODATA);
  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [formDialogId, setFormDialogId] = React.useState<any>();
  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    assessmentStageTwoData,
    setAssessmentStageTwoData,
  };
};
