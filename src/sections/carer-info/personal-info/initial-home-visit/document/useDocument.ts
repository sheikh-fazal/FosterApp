import { useTheme } from "@mui/material";
import { useGetInitialHomeDocumentDataQuery } from "@root/services/carer-info/personal-info/initial-home-visit/documents/documents";
import { useRef, useState } from "react";
import { initialHomeDocumentTableColumnsFunction } from ".";
import useAuth from "@root/hooks/useAuth";

export const useDocument = () => {
  const theme: any = useTheme();
  const auth = useAuth();
  console.log(auth);
  // ----------------------------------------------------------------------
  const tableHeaderRef = useRef<any>();
  // const [data, setData] = useState([]);
  const [isSingleDocumentDetailViewed, SetIsSingleDocumentDetailViewed] =
    useState(false);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const [dataTemp, setDataTemp] = useState([
    {
      documentName: "ninninnn",
      documentType: "123213",
      createdAt: "11/22/312313",
      personUploaded: "12qeqee",
      password: 1231,
    },
  ]);
  const initialHomeDocumentTableColumns =
  initialHomeDocumentTableColumnsFunction(SetIsSingleDocumentDetailViewed);
  const params = {
    offset: page,
    limit: 1,
    search: searchValue,
    fosterCarerId: "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
  };

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
    dataTemp,
    setDataTemp,
  };
};
