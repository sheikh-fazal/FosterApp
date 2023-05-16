import { useTableParams } from "@root/hooks/useTableParams";
import { useGetCarerFamilyTableApiQuery } from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";
import { useRouter } from "next/router";
import { useRef } from "react";

export const useCarerFamilySupportNetworkTable = () => {
  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  // ----------------------------------------------------------------------

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetCarerFamilyTableApiQuery({ params });

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
