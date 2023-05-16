import {
  useIncidentListQuery,
  useDeleteIncidentByIdMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/incident-api/incidentApi";
import { enqueueSnackbar } from "notistack";
import { useTableParams } from "@root/hooks/useTableParams";
import { useIncidentUploadDocumentListQuery } from "@root/services/carer-info/personal-info/chronology-of-events/incident-api/incidentUploadDocumentsApi";
const useIncidentTable = () => {
  const {
    data: incidentlist,
    isError: incidentListError,
    isLoading: incidentListIsloading,
    isFetching: incidentlistIsfetching,
    isSuccess: incidentListIsSuccess,
  } = useIncidentListQuery({});
  const {
    data: incidentUploadlist,
    isError: incidentUploadListError,
    isLoading: incidentUploadListIsloading,
    isFetching: incidentUploadlistIsfetching,
    isSuccess: incidentUploadListIsSuccess,
  } = useIncidentUploadDocumentListQuery();
  console.log("ds", incidentUploadlist);

  const [deleteIncidentByID] = useDeleteIncidentByIdMutation({});
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const deleteHander = (id: any) => {
    deleteIncidentByID(id)
      .unwrap()
      .then((res) => {
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
    deleteHander,
    pageChangeHandler,
    sortChangeHandler,
  };
};

export default useIncidentTable;
