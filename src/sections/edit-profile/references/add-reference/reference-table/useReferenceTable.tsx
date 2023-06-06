import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@root/sections/edit-profile/util/Util";
import {
  useDeleteRefernceMutation,
  useGetReferencesInfoQuery,
} from "@root/services/update-profile/reference/referenceApi";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export const useRefereneceTable = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetReferencesInfoQuery({});
  const [deleteRefernce] = useDeleteRefernceMutation();
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

  const delReference = async (id: string) => {
    try {
      // setIsUpdating(true);
      const data = await deleteRefernce({ body: null, id: id });
      displaySuccessMessage(data, enqueueSnackbar);
      // setIsUpdating(false);
      return true;
    } catch (error) {
      displayErrorMessage(error, enqueueSnackbar);
      return false;
    }
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
    delReference,
  };
};
