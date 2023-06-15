import { useTheme } from "@mui/material";
import { ReactNode, SyntheticEvent, useState } from "react";

export const useChildInfoTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
   
  };
  return {
    value,
    setValue,
    handleChange,
   
  };
};
