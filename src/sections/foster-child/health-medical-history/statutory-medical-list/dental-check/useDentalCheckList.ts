import React, { useRef, useState } from "react";

import { useRouter } from "next/router";
import { dentalCheckListTableColumnsFunction } from ".";
import { useGetAllstatutoryMedicalListDataQuery } from "@root/services/foster-child/health-medical-history/statutory-medical-list/StatutoryMedicalList";

export const useDentalCheckList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [isSingleDocumentDetailViewed, SetIsSingleDocumentDetailViewed] =
    useState(false);

  const dentalCheckListTableColumns = dentalCheckListTableColumnsFunction(router);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    search: searchValue,
    statutoryMedicalType: "Dental",
    // offset: page,
    // limit: 10,
  };

  const dataParameter = { params };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllstatutoryMedicalListDataQuery(dataParameter);

  return {
    dentalCheckListTableColumns,
    data,
  };
};
