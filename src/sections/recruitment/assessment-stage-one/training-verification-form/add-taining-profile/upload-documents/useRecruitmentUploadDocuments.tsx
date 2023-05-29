import {
  useDeleteTrainingProfileDocumentMutation,
  useGetTrainingProfileAllDocumentQuery,
} from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";
import { useRouter } from "next/router";
import { useState } from "react";
import { columnsRecruitmentUpload } from ".";
import { enqueueSnackbar } from "notistack";

const useRecruitmentUploadDocuments = () => {
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [cancelDelete, setCancelDelete] = useState(false);
  const [profileId, setProfileId] = useState<any>(null);

  const router = useRouter();
  const trainingProfileId= Object.keys(router?.query)[0];

  const { data, isLoading, isError, isFetching } =
    useGetTrainingProfileAllDocumentQuery(trainingProfileId);
  const [deleteProfile] = useDeleteTrainingProfileDocumentMutation();

  const deleteTrainingProfile = async () => {
  
    const res: any = deleteProfile({trainingProfileId, profileId})
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Training Profile deleted  Successfully", {
          variant: "success",
        });
        setProfileId(null);
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  const openDeleteModel = (id: string) => {
    console.log("ProfileID: ", id);
    setProfileId(id);
  };

  const closeDeleteProfile = (id: string) => {
    setProfileId(null);
  };

  // console.log(data?.data);

  const deleteList = (data: any) => {};

  const columnsRecruitmentUploadFunction =
    columnsRecruitmentUpload(openDeleteModel);

  return {
    data,
    openFormDialog,
    setOpenFormDialog,
    deleteList,
    isLoading,
    isFetching,
    isError,
    columnsRecruitmentUploadFunction,
    closeDeleteProfile,
    profileId,
    deleteTrainingProfile
  };
};

export default useRecruitmentUploadDocuments;
