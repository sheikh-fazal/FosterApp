import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  useDeleteEducationInfoDataMutation,
  useGetAllEducationInfoListDataQuery,
} from "@root/services/foster-child/education-records/child-education-info/ChildEducationInfoList";
import { enqueueSnackbar } from "notistack";
import { useTableParams } from "@root/hooks/useTableParams";
import { sanctionDetailsTableColumnsFunction } from ".";
import { useGetAllSanctionDetailsListDataQuery } from "@root/services/foster-child/other-information/saction-details/sactionDetailsList";

export const useSanctionDetailsList = () => {
  const router = useRouter();
  const theme = useTheme();
  const [isRecordSetForDelete, setIsRecordSetForDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const [deleteSanctionDetailsData] = useDeleteEducationInfoDataMutation();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const apiDataParameter = {
    params,
    fosterChildId: router?.query?.fosterChildId,
  };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllSanctionDetailsListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  //-------------------- Delete Handler
//   const onDeleteConfirm = async () => {
//     try {
//       const res: any = await deleteEducationInfoData({
//         id: deleteData,
//       }).unwrap();
//       setIsRecordSetForDelete(false);

//       enqueueSnackbar(res?.message ?? `Deleted Successfully`, {
//         variant: "success",
//       });
//     } catch (error: any) {
//       const errMsg = error?.data?.message;
//       enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
//     }
//   };

  const prepareRecordForDelete = (data: any) => {
    setIsRecordSetForDelete(true);
    setDeleteData(data);
  };

  const sanctionDetailsTableColumns = sanctionDetailsTableColumnsFunction(
    router,
    prepareRecordForDelete
  );

  return {
    sanctionDetailsTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    router,
    theme,
    // onDeleteConfirm,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
};
