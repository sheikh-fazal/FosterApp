import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  usePostAllegationDocumentsMutation,
  useUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/uploadDocumentsApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useUploadDocumentsTable = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const tableHeaderRefTwo = useRef<any>();
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
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("type", data.type);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("file", data.file);
    formData.append("allegationId", id);
    try {
      await postAllegationDetails(formData);
      enqueueSnackbar("Documents Uploaded Successfully", {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  return {
    router,
    tableHeaderRefTwo,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    isError,
    onSubmit,
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
