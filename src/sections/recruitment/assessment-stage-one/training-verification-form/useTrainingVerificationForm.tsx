import { useTableParams } from "@root/hooks/useTableParams";
import { useGetTrainingProfileAllDataQuery } from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { columnsTrainingVerification } from ".";

const useTrainingVerificationForm = () => {
  const [cancelDelete, setCancelDelete] = useState(false);
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  
  const tableHeaderRef = useRef<any>();
  const router = useRouter();
  
  const handleDelete = () => {
    alert("deleted successfully");
    setCancelDelete(!cancelDelete);
  };

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetTrainingProfileAllDataQuery({ params });

  const trainingPRofileData = data?.data?.trainingProfile;
  const meta = data?.data?.meta;

  const columnsTrainingVerificationFuntion = columnsTrainingVerification(handleDelete,router,cancelDelete,setCancelDelete);
  
  console.log(data, "training profile");

  
  return {
    columnsTrainingVerificationFuntion,
    trainingPRofileData,
    router,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    headerChangeHandler,
    tableHeaderRef,
    meta,
    pageChangeHandler,
    sortChangeHandler,
  };
};

export default useTrainingVerificationForm;
