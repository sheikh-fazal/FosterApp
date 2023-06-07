import  { useRef, useState } from "react";

import { useRouter } from "next/router";
import { gpDetailsInfoTableColumnsFunction } from ".";
import { useGetAllGpDetailsListDataQuery } from "@root/services/foster-child/health-medical-history/gp-details/gpDetailsList";

export const useGPDetailsList = () => {
  const router = useRouter();
  const { query } = useRouter();

  const gpDetailsInfoTableColumns = gpDetailsInfoTableColumnsFunction(router);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    search: searchValue,
    // offset: page,
    // limit: 10,
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
