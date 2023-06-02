import { useTheme } from "@mui/material";
import { useGetInitialHomeDocumentDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/documents/documents";
import { useRef, useState } from "react";
import { initialHomeDocumentTableColumnsFunction } from ".";
import useAuth from "@root/hooks/useAuth";
import { useRouter } from "next/router";

export const useDocument = () => {
  const theme: any = useTheme();
  const { user }: any = useAuth();
  const { query } = useRouter();
  // ----------------------------------------------------------------------
  const tableHeaderRef = useRef<any>();
  // const [data, setData] = useState([]);
  const [isSingleDocumentDetailViewed, SetIsSingleDocumentDetailViewed] =
    useState(false);
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
  };
};
