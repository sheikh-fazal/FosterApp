import React from "react";
import {
  useDeleteFamilyPersonListMutation,
  useGetFamilyPersonListQuery,
} from "@root/services/foster-child/child-background-info/family-person-list/FamilyPersonListAPI";
import { enqueueSnackbar } from "notistack";

export const useFamilyPersonListTable = () => {
  const [search, setSearch] = React.useState("");

  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetFamilyPersonListQuery<any>({ search: search });

  const [deleteList] = useDeleteFamilyPersonListMutation();

  // DELETE API For Family Person List
  const listDeleteHandler = (id: any) => {
    deleteList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    data,
    setSearch,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    listDeleteHandler,
  };
};
