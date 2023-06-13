import React, { useRef, useState } from "react";

import { useRouter } from "next/router";
import { ehcpListTableColumnsFunction } from ".";
import { useGetAllstatutoryMedicalListDataQuery } from "@root/services/foster-child/health-medical-history/statutory-medical-list/StatutoryMedicalList";

export const useEhcpList = () => {
  const router = useRouter();
  const { query } = useRouter();

  const ehcpListTableColumns = ehcpListTableColumnsFunction(router);

  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    search: searchValue,
    statutoryMedicalType:'EHCP'
    // offset: page,
    // limit: 10,
  };

  const dataParameter = { params };
  const {data, isLoading , isSuccess, isError , isFetching } = useGetAllstatutoryMedicalListDataQuery(dataParameter)
  return {
    ehcpListTableColumns,
    data,
  };
};
