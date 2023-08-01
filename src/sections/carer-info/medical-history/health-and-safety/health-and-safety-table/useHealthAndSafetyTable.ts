import { useTheme } from "@mui/material";
import { useGetHealthAndSafetyListDataQuery } from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const useHealthAndSafetyTable = () => {
  const [open, setOpen] = React.useState(false);
  const { data, isLoading, isError, isSuccess } =
    useGetHealthAndSafetyListDataQuery({});
  // const le = data.data.length

  const healthAndSafetyApiData = data?.data[0]?.houseHoldConditionA;
  // const arryBE = [];
  // arryBE?.push(healthAndSafetyApiData);
  console.log(healthAndSafetyApiData);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme: any = useTheme();
  const router = useRouter();
  const tableHeaderRef = useRef<any>();
  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    router,
    tableHeaderRef,
    healthAndSafetyApiData,
    isLoading,
    isError,
    isSuccess,
    // arryBE
  };
};
