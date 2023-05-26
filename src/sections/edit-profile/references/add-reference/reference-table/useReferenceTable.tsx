import { useGetReferencesInfoQuery } from "@root/services/update-profile/reference/referenceApi";
import { useState } from "react";

export const useRefereneceTable = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetReferencesInfoQuery({});
  const [tableStatusInfo, setTableStatusInfo] = useState({
    updateModel: false,
    updateId: "iamid",
    refFormDataHolder: null,
    viewModel: false,
  });

  const closeUpdateModel = () => {
    setTableStatusInfo((pre) => ({ ...pre, updateModel: false }));
  };
  const openUpdateModel = (id: string) => {
    const tableRows = data?.data ?? [];
    const indexOf = tableRows.findIndex(({ id: Id }: any) => Id === id);
    setTableStatusInfo((pre) => ({
      ...pre,
      updateModel: true,
      updateId: id,
      refFormDataHolder: tableRows[indexOf],
    }));
  };
  const closeViewModel = () => {
    setTableStatusInfo((pre) => ({ ...pre, viewModel: false }));
  };
  const openViewModel = (id: string) => {
    const tableRows = data?.data ?? [];
    const indexOf = tableRows.findIndex(({ id: Id }: any) => Id === id);
    setTableStatusInfo((pre) => ({
      ...pre,
      viewModel: true,
      refFormDataHolder: tableRows[indexOf],
    }));
  };

  return {
    tableRows: data?.data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    tableStatusInfo,
    closeUpdateModel,
    openUpdateModel,
    closeViewModel,
    openViewModel,
  };
};
