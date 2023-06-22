import { useState } from "react";

import { useRouter } from "next/router";

import {
  useDeleteStatutoryMedicalTypeDataMutation,
  useGetAllStatutoryMedicalListDataQuery,
} from "@root/services/foster-child/health-medical-history/statutory-medical-list/StatutoryMedicalList";
import { statutoryMedicalListXTableColumnsFunction } from ".";
import { enqueueSnackbar } from "notistack";

export const useStatutoryMedicalTypeList = (props: any) => {
  const router = useRouter();

  const [
    deleteStatutoryMedicalTypeDataTrigger,
    deleteStatutoryMedicalTypeDataStatus,
  ] = useDeleteStatutoryMedicalTypeDataMutation();

  const [isRecordSetForDelete, setIsRecordSetForDelete] = useState(false);
  const [deleteData, setDeleteData] = useState("");
  const onDeleteConfirm = async (data: any) => {
    const pathParams = {
      id: deleteData,
    };
    const params = {
      statutoryMedicalType: props?.type,
    };
    const apiDataParameter = { pathParams, params };
    try {
      const res: any = await deleteStatutoryMedicalTypeDataTrigger(
        apiDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? `Deleted Successfully`, {
        variant: "success",
      });
      setIsRecordSetForDelete(false);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  const prepareRecordForDelete = (data: any) => {
    setIsRecordSetForDelete(true);
    setDeleteData(data);
  };
  const statutoryMedicalListXTableColumns =
    statutoryMedicalListXTableColumnsFunction(
      router,
      props.type,
      prepareRecordForDelete
    );

  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    search: searchValue,
    statutoryMedicalType: props?.type,
    offset: page,
    limit: 10,
  };

  const headerHeading: any = {
    EHCP: "EHCP",
    CLA: "CLA MEDICAL",
    Dental: "Dental Check",
    Optician: "Optician Check",
  };
  const setHeaderHeading = (type: any) => {
    return headerHeading?.[type];
  };

  const apiDataParameter = { params };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllStatutoryMedicalListDataQuery(apiDataParameter, {
      refetchOnMountOrArgChange: true,
    });
  return {
    statutoryMedicalListXTableColumns,
    data,
    router,
    setHeaderHeading,
    setSearchValue,
    setPage,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    onDeleteConfirm,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  };
};
