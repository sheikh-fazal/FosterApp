import { useTableParams } from "@root/hooks/useTableParams";
import { useRef, useState } from "react";
import { columnsOutSchoolActivityTable } from ".";
import { useRouter } from "next/router";
import { data } from "@root/sections/advocacy/carer-advocacy/carer-advocacy-dashboard/self-advocacy-toolkit";
import {
  useDeleteSingleSchoolActivityDataMutation,
  useGetOutSchoolActivityListQuery,
} from "@root/services/foster-child/education-records/out-of-school-activity/OutOfSchoolActivity";

const useOutSchoolActivityList = () => {
  const [cancelDelete, setCancelDelete] = useState(false);
  const [trainingProfileId, setTrainingProfileId] = useState<any>(null);
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  const fosterChildId = router?.query?.fosterChildId;

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isSuccess, isLoading, isFetching, isError } =
    useGetOutSchoolActivityListQuery({ fosterChildId, params });
  const [delteActivity] = useDeleteSingleSchoolActivityDataMutation();
  console.log(data);

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

  const columnsChildExclusionInfoTableFuntion = columnsOutSchoolActivityTable(
    deleteTrainingProfile,
    router,
    cancelDelete,
    setCancelDelete,
    openDeleteModel
  );

  return {
    tableHeaderRef,
    trainingProfileId,
    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    columnsChildExclusionInfoTableFuntion,
    closeDeleteProfile,
    deleteTrainingProfile,
    router,
    data,
    isSuccess,
    isLoading,
    isFetching,
    isError,
    fosterChildId
  };
};

export default useOutSchoolActivityList;
