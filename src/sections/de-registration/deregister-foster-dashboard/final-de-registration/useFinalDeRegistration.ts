import { useTheme } from "@mui/material";
import { DeRegContractsAgreementsData } from "./index";
import React, { useEffect, useState } from "react";

export const useFinalDeRegistration: any = () => {
  const [deRegisterData, setDeRegisterData] = useState(DeRegContractsAgreementsData);
  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = useState<any>();
  const [formDialogId, setFormDialogId] = useState<any>();
  const [openSocialWorkerAsessmentDialogbox, setOpenSocialWorkerAssessmentDialogbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newArray = deRegisterData.map((data) => data.viewForms);
    const newMainIndex = currentIndex + 1 >= newArray.length ? 0 : currentIndex + 1;
    setCurrentIndex(newMainIndex);
  };
  

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
    goToNextSlide
  };
};
