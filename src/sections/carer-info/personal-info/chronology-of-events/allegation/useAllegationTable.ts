import { useTableParams } from "@root/hooks/useTableParams";
import { useAllegationListQuery } from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/allegationApi";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const useAllegationTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useAllegationListQuery();
  const allegations = data?.data?.allegation;
  const meta = data?.meta;
  return {
    router,
    tableHeaderRefTwo,
    isLoading,
    headerChangeHandler,
    allegations,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
  };
};
