import { useState } from "react";

import { useRouter } from "next/router";
import { opticianCheckListTableColumnsFunction } from ".";
import { useGetAllstatutoryMedicalListDataQuery } from "@root/services/foster-child/health-medical-history/statutory-medical-list/StatutoryMedicalList";

export const useOpticianCheckList = () => {
  const router = useRouter();
  const { query } = useRouter();

  const opticianCheckListTableColumns =
    opticianCheckListTableColumnsFunction(router);

  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    search: searchValue,
    statutoryMedicalType: "Optician",
    // offset: page,
    // limit: 10,
  };

  const dataParameter = { params };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllstatutoryMedicalListDataQuery(dataParameter);

  return {
    opticianCheckListTableColumns,
    data,
  };
};
