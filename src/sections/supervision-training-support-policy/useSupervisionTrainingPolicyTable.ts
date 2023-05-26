import { useTheme } from "@mui/material";
import { useRouter } from 'next/router';
import React, { useRef } from 'react'

export const useSupervisionTrainingPolicy = () => {
    const router = useRouter();
    const tableHeaderRef = useRef();
    const theme: any = useTheme();
    // const handleEyeIconClick = (id: string, routePath: string) => {
    //   router.push({ pathname: routePath, query: { id } });
     
    // };
  return {
    router,
    tableHeaderRef,
    theme,
  }
}
