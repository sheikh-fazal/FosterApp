import React, { useRef, useState } from "react";

import { useRouter } from "next/router";

import { useGetAllStatutoryMedicalListDataQuery } from "@root/services/foster-child/health-medical-history/statutory-medical-list/StatutoryMedicalList";
import { statutoryMedicalListXTableColumnsFunction } from ".";

export const useStatutoryMedicalTypeList = (props: any) => {
  console.log(props);
  const router = useRouter();
  const { query } = useRouter();

  const statutoryMedicalListXTableColumns =
    statutoryMedicalListXTableColumnsFunction(router, props.type);

  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState(undefined);
  const params = {
    search: searchValue,
    statutoryMedicalType: props?.type,
    // offset: page,
    // limit: 10,
  };

  const headerHeading: any = {
    EHCP: "EHCP",
    CLA: "CLA MEDICAL",
    Dental: "Dental Check",
    Optician: "Optician Check",
  };
  const setHeaderHeading = (type: any) => {
    return headerHeading?.[type];
  };

  const dataParameter = { params };
  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetAllStatutoryMedicalListDataQuery(dataParameter);
  return {
    statutoryMedicalListXTableColumns,
    data,
    router,
    setHeaderHeading,
    setSearchValue,
    setPage,
  };
};
