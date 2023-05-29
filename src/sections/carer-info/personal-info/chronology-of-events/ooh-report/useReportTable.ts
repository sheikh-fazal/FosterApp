import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const useReportTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme: any = useTheme();

  return {
    router,
    tableHeaderRefTwo,
    theme,
   
  };
};
