import { useTheme } from "@mui/material";
import {
  useDeleteHealthAndSafetyListDataMutation,
  useGetHealthAndSafetyListDataQuery,
} from "@root/services/carer-info/medical-history/health-and-safety/healthAndSafetyApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";
import { columns } from ".";

export const useHealthAndSafetyTable = () => {
  const [open, setOpen] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const { data, isLoading, isError, isSuccess } =
    useGetHealthAndSafetyListDataQuery({});
  const healthAndSafetyApiData = data?.data;
  // console.log(healthAndSafetyApiData);

  // const [deleteListItem, { isLoading: deleteLoading }] =
  //   useDeleteHealthAndSafetyListDataMutation({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme: any = useTheme();

  const deleteList = async (info: any) => {
    // console.log(info.cell.row.original.id);
    // const id = info.cell.row.original.id;
    // setDeleteModal(true);
    // try {
    //   const res: any = await deleteListItem(id);
    //   enqueueSnackbar(res?.data?.message, { variant: "success" });
    // } catch (error: any) {
    //   console.log(error?.message);
    //   const errMsg = error?.data?.message;
    //   console.log(errMsg);
    //   enqueueSnackbar(error?.message, { variant: "error" });
    // }
  };
  const router = useRouter();
  const tableHeaderRef = useRef<any>();

  const columnsFunction = columns(deleteList);
  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
    deleteModal,
    setDeleteModal,
    theme,
    router,
    tableHeaderRef,
    healthAndSafetyApiData,
    isLoading,
    isError,
    isSuccess,
    deleteList,
    columnsFunction,
  };
};
