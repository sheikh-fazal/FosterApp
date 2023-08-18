import { useTheme } from "@mui/material";
import { useGetHealthAndSafetyDocumentListQuery } from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useRef } from "react";

export const useUploadDocument = (breadCrumbData: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme: any = useTheme();
  const router = useRouter();
  const { healthAndSafetyId } = router.query;
  const tableHeaderRef = useRef<any>();
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetHealthAndSafetyDocumentListQuery(healthAndSafetyId);
  const uploadDocumentApiData = data?.data;
  isSuccess &&
    enqueueSnackbar(data?.message ?? "Data Retrieved Successfully!", {
      variant: "success",
    });
  isError &&
    enqueueSnackbar(data?.message ?? "Something Went Wrong!", {
      variant: "error",
    });
  useEffect(() => {
    breadCrumbData("Upload Documents");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
    theme,
    router,
    tableHeaderRef,
    uploadDocumentApiData,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  };
};
