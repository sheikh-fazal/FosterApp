
import React from "react";
import { useRouter } from "next/router";
import { useClaDocumentationListQuery, useDeleteClaDocumentationListMutation } from "@root/services/foster-child/child-background-info/cla-documentation-list/CLADocumentationListAPI";
import { enqueueSnackbar } from "notistack";

export const useDocumentationTable = () => {

  const router = useRouter();

  const [search, setSearch] = React.useState("");

  const { data, isError, isLoading, isSuccess, isFetching } = useClaDocumentationListQuery<any>({search: search});

  const [deleteList] = useDeleteClaDocumentationListMutation();
  //DELETE API For Cla Documentation List
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

  return { router, data, isError, isLoading, isSuccess, isFetching, listDeleteHandler };
};
