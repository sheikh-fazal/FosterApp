import { useTheme } from "@mui/material";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteDocumentListMutation,
  usePostAllegationDocumentsMutation,
  useUploadDocumentListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/uploadDocumentsApi";
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
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const {
    data,
    isError,
    isLoading: loadingList,
    isFetching,
    isSuccess,
  }: any = useUploadDocumentListQuery({ search: search });

  //API For Post Documents
  const [postAllegationDetails]: any = usePostAllegationDocumentsMutation();
  //API For Delete Document List
  const [deleteDocumentList] = useDeleteDocumentListMutation();

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

  const allegationDocuments = data?.data?.allegation_documents;
  const meta = data?.meta;
  //Submit Function To Submit Form Data
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("type", data.type);
    formData.append("documentDate", data.documentDate);
    formData.append("password", data.password);
    formData.append("file", data.file);
    formData.append("allegationId", id);
    try {
      await postAllegationDetails(formData).unwrap();
      setIsLoading(false);
      enqueueSnackbar("Document Uploaded Successfully", {
        variant: "success",
      });
    } catch (error: any) {
      setIsLoading(false);
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
    postAllegationDetails,
    theme,
    action,
    listDeleteHandler,
    setSearch,
  };
};
