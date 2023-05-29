import { useGetTrainingProfileAllDocumentQuery } from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import { useRouter } from "next/router";
import { useState } from "react";
import { columnsRecruitmentUpload } from ".";

const useRecruitmentUploadDocuments = () => {
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [cancelDelete, setCancelDelete] = useState(false);

  const router = useRouter();
  const trainingProfileId = Object.keys(router?.query)[0];

  const handleDelete = () => {
    setCancelDelete(!cancelDelete);
  };

  const columnsRecruitmentUploadFunction = columnsRecruitmentUpload ( cancelDelete, setCancelDelete, handleDelete); 

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
    columnsRecruitmentUploadFunction
  };
  
};

export default useRecruitmentUploadDocuments;
