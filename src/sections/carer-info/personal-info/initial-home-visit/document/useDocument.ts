import { useTheme } from "@mui/material";
import {
  useGetInitialHomeDocumentDataQuery,
  usePostInitialHomeDocumentDataMutation,
} from "@root/services/carer-info/personal-info/initial-home-visit/documents/documents";
import { useRef, useState } from "react";
import { initialHomeDocumentTableColumnsFunction } from ".";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

export const useDocument = () => {
  const theme: any = useTheme();
  const { user }: any = useAuth();
  const { query } = useRouter();
  // ----------------------------------------------------------------------
  const tableHeaderRef = useRef<any>();
  // const [data, setData] = useState([]);
  const [isSingleDocumentDetailViewed, SetIsSingleDocumentDetailViewed] =
    useState(false);
  const [
    postInitialHomeDocumentDataTrigger,
    postInitialHomeDocumentDataStatus,
  ] = usePostInitialHomeDocumentDataMutation();
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const initialHomeDocumentTableColumns =
    initialHomeDocumentTableColumnsFunction(SetIsSingleDocumentDetailViewed);
  const params = {
    offset: page,
    limit: 10,
    search: searchValue,
    fosterCarerId:
      query?.fosterCarerId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
  };

  const dataParameter = { params };
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetInitialHomeDocumentDataQuery(dataParameter);

  const submitInitialHomeVisitDocument = async (data: any) => {
    console.log(data);
    const documentFormData = new FormData();

    documentFormData.append("documentType", data.documentType);
    documentFormData.append("documentDate", data.documentDate);
    documentFormData.append("password", data.password);
    documentFormData.append("documentFile", data.chosenFile);
    const putParams = {
      fosterCarerId:
        query?.fosterCarerId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
    };
    const putDataParameter = { params: putParams, body: documentFormData };
    try {
      const res: any = await postInitialHomeDocumentDataTrigger(
        putDataParameter
      ).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return {
    theme,
    tableHeaderRef,
    page,
    setPage,
    searchValue,
    setSearchValue,
    data,
    isLoading,
    isError,
    isSuccess,
    isSingleDocumentDetailViewed,
    SetIsSingleDocumentDetailViewed,
    initialHomeDocumentTableColumns,
    user,
    isFetching,
    submitInitialHomeVisitDocument,
  };
};
