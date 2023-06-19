import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const useLocalAuthorityList = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const theme = useTheme();
  const navigate = useRouter();
  return {
    theme,
    navigate,
    isDeleteModalOpen,
    setIsDeleteModalOpen
  };
};
