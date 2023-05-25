import { useGetReferencesInfoQuery } from "@root/services/update-profile/reference/referenceApi";
import { useState } from "react";

export const useRefereneceTable = () => {
  const [tableStatusInfo, setTableStatusInfo] = useState({
    updateModel: false,
    updateId: "iamid",
  });
  const closeUpdateModel = () => {
    setTableStatusInfo((pre) => ({ ...pre, updateModel: false }));
  };
  const openUpdateModel = (id: string, index: string | number) => {
    setTableStatusInfo((pre) => ({ ...pre, updateModel: true, updateId: id }));
  };
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetReferencesInfoQuery({});
  return {
    tableRows: data?.data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    tableStatusInfo,
    closeUpdateModel,
    openUpdateModel,
  };
};
