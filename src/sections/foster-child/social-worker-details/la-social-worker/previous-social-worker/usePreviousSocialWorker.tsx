import { useTableParams } from "@root/hooks/useTableParams";
import { useGetPreviousSocialWorkerTableApiQuery } from "@root/services/foster-child/social-worker-details/la-social-worker/laSocialWorkerApi";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const usePreviousSocialWorkerTable = () => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  // ----------------------------------------------------------------------

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetPreviousSocialWorkerTableApiQuery({ params });

  const family = data?.faimly_details;
  const meta = data?.meta;

  return {
    router,
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
  };
};
