import {
  useIncidentListQuery,
  useDeleteIncidentByIdMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/incident-api/incidentApi";
import { enqueueSnackbar } from "notistack";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteIncidentDocumentsMutation,
  useIncidentUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/incident-api/incidentUploadDocumentsApi";
import React from "react";
const useIncidentTable = () => {
  const [search, setsearch] = React.useState("");
  const {
    data: incidentlist,
    isError: incidentListError,
    isLoading: incidentListIsloading,
    isFetching: incidentlistIsfetching,
    isSuccess: incidentListIsSuccess,
  } = useIncidentListQuery({ search: search });

  const {
    data: incidentUploadlist,
    isError: incidentUploadListError,
    isLoading: incidentUploadListIsloading,
    isFetching: incidentUploadlistIsfetching,
    isSuccess: incidentUploadListIsSuccess,
  } = useIncidentUploadDocumentListQuery({ search: search });

  const [deleteIncidentByID] = useDeleteIncidentByIdMutation({});
  const [deleteIncidentDocuments] = useDeleteIncidentDocumentsMutation({});
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const deleteHander = (id: any) => {
    deleteIncidentByID(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information deleted  Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  // UPLOAD DELETE DOCUMENTS
  const uploadDeleteHandler = (id: any) => {
    deleteIncidentDocuments({ id: id })
      .unwrap()
      .then((res) => {
        console.log(res);

        enqueueSnackbar("Information deleted  Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };
  return {
    incidentlist,
    incidentListError,
    incidentListIsloading,
    incidentlistIsfetching,
    incidentListIsSuccess,
    incidentUploadlist,
    incidentUploadListError,
    incidentUploadListIsloading,
    incidentUploadlistIsfetching,
    incidentUploadListIsSuccess,
    setsearch,
    deleteHander,
    pageChangeHandler,
    sortChangeHandler,
    uploadDeleteHandler,
  };
};

export default useIncidentTable;
