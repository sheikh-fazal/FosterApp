import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";

export const useFinalPlacementApprovalDeclarations = () => {
  const theme = useTheme();

  return {
    theme
  };
};
