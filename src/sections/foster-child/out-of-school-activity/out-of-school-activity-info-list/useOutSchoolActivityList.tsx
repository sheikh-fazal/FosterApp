import { useTableParams } from "@root/hooks/useTableParams";
import { useRef, useState } from "react";
import { columnsOutSchoolActivityTable } from ".";
import { useRouter } from "next/router";

const useOutSchoolActivityList = () => {
  const [cancelDelete, setCancelDelete] = useState(false);
  const [trainingProfileId, setTrainingProfileId] = useState<any>(null);
  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

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
  };
};

export default useOutSchoolActivityList;
