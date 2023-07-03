import { useTableParams } from "@root/hooks/useTableParams";
import { useRef, useState } from "react";
import { columnsChildExclusionInfoTable } from ".";
import { useRouter } from "next/router";
import { useGetChildExclusionInfoListQuery } from "@root/services/foster-child/education-records/child-exclusion-info/childExclusionInfo";

const useChildExclusionInfoList = () => {
  const [cancelDelete, setCancelDelete] = useState(false);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);

  const [trainingProfileId, setTrainingProfileId] = useState<any>(null);
  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const params = {
    search: searchValue,
    offset: page,
    limit: 10,
  };

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetChildExclusionInfoListQuery(params);

  const deleteTrainingProfile = async () => {
    console.log(trainingProfileId);
    setTrainingProfileId(null);
  };

  const openDeleteModel = (id: string) => {
    console.log("ProfileID: ", id);
    setTrainingProfileId(id);
  };

  const closeDeleteProfile = (id: string) => {
    setTrainingProfileId(null);
  };

  const columnsChildExclusionInfoTableFuntion = columnsChildExclusionInfoTable(
    deleteTrainingProfile,
    router,
    cancelDelete,
    setCancelDelete,
    openDeleteModel
  );

  return {
    tableHeaderRef,
    trainingProfileId,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    columnsChildExclusionInfoTableFuntion,
    closeDeleteProfile,
    deleteTrainingProfile,
    router,
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  };
};

export default useChildExclusionInfoList;
