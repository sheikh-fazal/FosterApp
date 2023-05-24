import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteComplaintDocumentListMutation,
  usePostComplaintDocumentsMutation,
  useUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/complaints-api/uploadDocumentsApi";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useUploadDocumentsTable = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const { id, action }: any = router.query;
  const tableHeaderRefTwo = useRef<any>();
  const theme: any = useTheme();
  const [error, setError] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const {
    data,
    isError,
    isLoading: loadingList,
    isFetching,
    isSuccess,
  }: any = useUploadDocumentListQuery({ search: search });
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  //API fOR pOST Complaint List
  const [postComplaintDetails] = usePostComplaintDocumentsMutation();
  //API For Delete Document List
  const [deleteDocumentList] = useDeleteComplaintDocumentListMutation();
  const complaintDocument = data?.data?.complaint_documents;
  const meta = data?.meta;
  //API For Deleting Document List
  const listDeleteHandler = (id: any) => {
    deleteDocumentList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted  Successfully", {
          variant: "success",
        });
      })
      .catch((error: any) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("type", data.type);
    formData.append(
      "documentDate",
      dayjs(data?.documentDate).format("MM/DD/YYYY")
    );
    formData.append("password", data.password);
    formData.append("file", data.file);
    formData.append("complaintId", id);
    try {
      await postComplaintDetails(formData).unwrap();
      enqueueSnackbar("Documents Uploaded Successfully", {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      router.push("/carer-info/personal-info/carer-chronology-of-events");
    }
  };
  return {
    router,
    tableHeaderRefTwo,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    error,
    meta,
    isError,
    isFetching,
    isSuccess,
    complaintDocument,
    setError,
    loadingList,
    isLoading,
    setIsLoading,
    postComplaintDetails,
    theme,
    onSubmit,
    action,
    listDeleteHandler,
    setSearch,
  };
};
