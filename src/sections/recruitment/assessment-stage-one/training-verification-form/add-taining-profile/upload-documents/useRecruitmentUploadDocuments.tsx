import { useGetTrainingProfileAllDocumentQuery } from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import { useRouter } from "next/router";
import { useState } from "react";

const useRecruitmentUploadDocuments = () => {
  const [openFormDialog, setOpenFormDialog] = useState(false);

  const router = useRouter();
  const trainingProfileId = Object.keys(router?.query)[0];

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetTrainingProfileAllDocumentQuery(trainingProfileId);

  // console.log(data?.data);

  const deleteList = (data: any) => {};

  return {
    data,
    openFormDialog,
    setOpenFormDialog,
    deleteList,
    isLoading,
    isFetching,
    isError,
  };
};

export default useRecruitmentUploadDocuments;
