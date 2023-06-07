import React, { useRef, useState } from "react";

import { useRouter } from "next/router";
import { gpDetailsInfoTableColumnsFunction } from ".";
import { useGetAllGpDetailsListDataQuery } from "@root/services/foster-child/health-medical-history/gp-details/gpDetailsList";

export const useGPDetailsList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [isSingleDocumentDetailViewed, SetIsSingleDocumentDetailViewed] =
    useState(false);

  const gpDetailsInfoTableColumns = gpDetailsInfoTableColumnsFunction(router);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    offset: page,
    limit: 10,
    search: searchValue,
    fosterCarerId:
      query?.fosterCarerId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
  };

  const dataParameter = { params };
  const {data, isLoading , isSuccess, isError , isFetching } = useGetAllGpDetailsListDataQuery(dataParameter)
  const tableHeaderRef = useRef<any>();



  return {
    gpDetailsInfoTableColumns,
    tableHeaderRef,
    data, isLoading , isSuccess, isError , isFetching ,
    setSearchValue,router
  };
};
