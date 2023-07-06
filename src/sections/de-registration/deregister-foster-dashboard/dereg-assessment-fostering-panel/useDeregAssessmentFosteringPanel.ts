import { useTheme } from "@mui/material";
import { DeRegStagePostingPanelData } from "./index";
import React, { useEffect, useState } from "react";

export const useDeregAssessmentFosteringPanel: any = () => {
  const [deRegisterData, setDeRegisterData] = useState(DeRegStagePostingPanelData);
  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = useState<any>();
  const [formDialogId, setFormDialogId] = useState<any>();
  const [openSocialWorkerAsessmentDialogbox, setOpenSocialWorkerAssessmentDialogbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handleSlide = () => {};

  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    openSocialWorkerAsessmentDialogbox,
    setOpenSocialWorkerAssessmentDialogbox,
    deRegisterData,
    isUpdating: false,
    hasUpdated: false,
    setDeRegisterData,
    currentIndex,
    setCurrentIndex,
    goToNextSlide,
    handleSlide
  };
};
