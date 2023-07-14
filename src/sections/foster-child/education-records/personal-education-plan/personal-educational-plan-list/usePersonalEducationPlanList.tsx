import { useTableParams } from "@root/hooks/useTableParams";
import { useRef, useState } from "react";
import { columnsPersonalEducationPlanTable } from ".";
import { useRouter } from "next/router";
import { useGetChildEducationPlanListQuery } from "@root/services/foster-child/education-records/child-education-plan/childEducationPlan";

const usePersonalEducationPlanList = () => {
  const [cancelDelete, setCancelDelete] = useState(false);
  const [trainingProfileId, setTrainingProfileId] = useState<any>(null);
  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const fosterChildId = router?.query?.fosterChildId;

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetChildEducationPlanListQuery(fosterChildId);

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

  const columnsChildExclusionInfoTableFuntion =
    columnsPersonalEducationPlanTable(
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
    isSuccess
  };
};

export default usePersonalEducationPlanList;
