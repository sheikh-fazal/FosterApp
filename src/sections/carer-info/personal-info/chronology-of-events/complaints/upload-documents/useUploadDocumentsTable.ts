import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import { usePostComplaintDocumentsMutation } from "@root/services/carer-info/personal-info/chronology-of-events/complaints-api/uploadDocuments";
import { useRouter } from "next/router";
import { useUploadDocumentListQuery } from "@root/services/carer-info/personal-info/chronology-of-events/complaints-api/uploadDocuments";
import React, { useRef } from "react";

export const useUploadDocumentsTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme: any = useTheme();
  const [error, setError] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const {
    data,
    isError,
    isLoading: loadingList,
    isFetching,
    isSuccess,
  }: any = useUploadDocumentListQuery();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const [postComplaintDetails] = usePostComplaintDocumentsMutation();
  const complaintDocument = data?.data?.complaint_documents;
  const meta = data?.meta;
  const deleteList = (data: any) => {};
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
    deleteList,
    postComplaintDetails,
    theme,
  };
};
