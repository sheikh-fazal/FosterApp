import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  usePostAllegationDocumentsMutation,
  useUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/uploadDocumentsApi";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const useUploadDocumentsTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme: any = useTheme();
  const [error, setError] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const {
    data,
    isError,
    isLoading: loadingList,
    isFetching,
    isSuccess,
  }: any = useUploadDocumentListQuery();
  const [postAllegationDetails] = usePostAllegationDocumentsMutation();
  const allegationDocuments = data?.data?.allegation_documents;
  const meta = data?.meta;
  const deleteList = (data: any) => {};
  return {
    router,
    tableHeaderRefTwo,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    isError,
    isFetching,
    isSuccess,
    loadingList,
    allegationDocuments,
    error,
    meta,
    setError,
    isLoading,
    setIsLoading,
    deleteList,
    postAllegationDetails,
    theme,
  };
};
