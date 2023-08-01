import { useTheme } from "@mui/material";
import { useState } from "react";

export const useAuditLogs = () => {
  const theme = useTheme();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [fosterCarerFilter, setFosterCarerFilter] = useState({
    selectTime: '',
    selectDate: '',
    selectEventTime: '',
    selectAccountType: '',
  });

  const handleFosterCarerFilter = (name: string, e: any) => {
    setFosterCarerFilter({ ...fosterCarerFilter, [name]: e.target.value });
  };

  return {
    theme,
    fosterCarerFilter,
    handleFosterCarerFilter,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
  };
};
