import { useTheme } from "@mui/material";
import { useGetInitialHomeDocumentDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/documents/documents";
import { useRef, useState } from "react";
import { initialHomeDocumentTableColumnsFunction } from ".";

export const useDocument = () => {
  const theme: any = useTheme();

  // ----------------------------------------------------------------------
  const tableHeaderRef = useRef<any>();
  // const [data, setData] = useState([]);
  const [isSingleDocumentDetailViewed, SetIsSingleDocumentDetailViewed] =
    useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    offset: page,
    limit: 10,
    search: searchValue,
  };
  const initialHomeDocumentTableColumns =
    initialHomeDocumentTableColumnsFunction(SetIsSingleDocumentDetailViewed);
  const dataParameter = { params };
  const { data, isLoading, isError, isSuccess } =
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
  };
};
