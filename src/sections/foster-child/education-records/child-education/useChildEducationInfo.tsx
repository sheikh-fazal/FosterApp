import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import { defaultValues } from ".";
import Image from "next/image";
import UserImg from "../../../assets/img/ifaAvatar.png";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import {
  useDeleteEducationInfoDataMutation,
  useGetAllEducationInfoListDataQuery,
} from "@root/services/foster-child/education-records/child-education-info/ChildEducationInfoList";
import { enqueueSnackbar } from "notistack";
import { educationInfoTableColumnsFunction } from ".";

export const useChildEducationInfo = () => {
  const router = useRouter();
  const theme = useTheme();
  const [isRecordSetForDelete, setIsRecordSetForDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const [deleteEducationInfoData] = useDeleteEducationInfoDataMutation();
  const params = {
    search: searchValue,
    offset: page,
    limit: 10,
  };
  // const methods: any = useForm({
  //     defaultValues,
  // });
  const apiDataParameter = { params };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllEducationInfoListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });

  const onDeleteConfirm = async () => {
    try {
      const res: any = await deleteEducationInfoData({id: deleteData}).unwrap();
      setIsRecordSetForDelete(false);

      enqueueSnackbar(res?.message ?? `Deleted Successfully`, {
        variant: "success",
      });
      setPage(0);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  const prepareRecordForDelete = (data: any) => {
    console.log(data);

    setIsRecordSetForDelete(true);
    setDeleteData(data);
  };
  const educationInfoTableColumns = educationInfoTableColumnsFunction(
    router,
    prepareRecordForDelete
  );

  return {
    educationInfoTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    theme,
    setPage,
    onDeleteConfirm,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
  };
};
