import { useTheme } from "@mui/material";
import { DeRegContractsAgreementsData, DeRegisterFinalFinanceSchema } from "./index";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useDeregContractsAgreements: any = () => {
  const [deRegisterData, setDeRegisterData] = useState(DeRegContractsAgreementsData);
  const theme: any = useTheme();
  const [openIdForInfo, setOpenIdForInfo] = useState<any>();
  const [formDialogId, setFormDialogId] = useState<any>();
  const [isFinalFinanceModalOpen, setIsFinalFinanceModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % deRegisterData.length);
  };

  const handleSlide = () => {
    
  }

  const handleContractModalOpen = (id: any) => {
    id === 1 && setIsFinalFinanceModalOpen(true)
  }

  const methods: any = useForm({
    resolver: yupResolver(DeRegisterFinalFinanceSchema),
    defaultValues: { updatePhoto: "" },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = () => {
    setIsFinalFinanceModalOpen(false)
  }
  

  return {
    theme,
    openIdForInfo,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    isFinalFinanceModalOpen, 
    setIsFinalFinanceModalOpen,
    deRegisterData,
    setDeRegisterData,
    currentIndex,
    setCurrentIndex,
    goToNextSlide,
    handleSlide,
    handleContractModalOpen,
    handleSubmit,
    methods,
    onSubmit
  };
};
