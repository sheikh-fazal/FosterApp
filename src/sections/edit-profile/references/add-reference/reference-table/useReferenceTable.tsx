import { useGetReferencesInfoQuery } from "@root/services/update-profile/reference/referenceApi";
import { useState } from "react";

export const useRefereneceTable = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetReferencesInfoQuery({});
  const [tableStatusInfo, setTableStatusInfo] = useState({
    updateViewModel: false,
    updateId: "",
    refFormDataHolder: null,
    isDisabled: true,
    viewModel: false,
  });

  const closeViewUpdateModel = () => {
    setTableStatusInfo((pre) => ({ ...pre, updateViewModel: false }));
  };
  const openViewUpdateModel = (id: string, disabled: boolean) => {
    const tableRows = data?.data ?? [];
    const indexOf = tableRows.findIndex(({ id: Id }: any) => Id === id);
    setTableStatusInfo((pre) => ({
      ...pre,
      updateViewModel: true,
      updateId: id,
      refFormDataHolder: tableRows[indexOf],
      isDisabled: Boolean(disabled),
    }));
  };
  // const closeViewModel = () => {
  //   setTableStatusInfo((pre) => ({ ...pre, viewModel: false }));
  // };
  // const openViewModel = (id: string) => {
  //   const tableRows = data?.data ?? [];
  //   const indexOf = tableRows.findIndex(({ id: Id }: any) => Id === id);
  //   setTableStatusInfo((pre) => ({
  //     ...pre,
  //     viewModel: true,
  //     refFormDataHolder: tableRows[indexOf],
  //   }));
  // };

  return {
    tableRows: data?.data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    tableStatusInfo,
    closeViewUpdateModel,
    openViewUpdateModel,
  };
};
