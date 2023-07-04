import { useTheme } from "@mui/material";
import { DeRegInitialRequestData } from "./index";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useDeRegInitialRequest: any = () => {
  const router = useRouter();
  const [deRegisterData, setDeRegisterData] = useState(DeRegInitialRequestData);
  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = useState<any>();
  const [formDialogId, setFormDialogId] = useState<any>();
  const [openSocialWorkerAsessmentDialogbox, setOpenSocialWorkerAssessmentDialogbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const handleDisabled = () => setDisabled(!disabled);

  const goToNextSlide = () => {
    const newArray = deRegisterData.map((data) => data.viewForms);
    const newMainIndex = currentIndex + 1 >= newArray.length ? 0 : currentIndex + 1;
    setCurrentIndex(newMainIndex);
  };
  const handleViewChecklist = () => router.push('/de-registration/deregister-foster-carer/sw-assessment');

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
    disabled,
    handleDisabled,
    handleViewChecklist
  };
};
