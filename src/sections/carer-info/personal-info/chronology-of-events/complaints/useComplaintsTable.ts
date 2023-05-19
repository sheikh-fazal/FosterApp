import { useTableParams } from "@root/hooks/useTableParams";
import { useComplaintsListQuery } from "@root/services/carer-info/personal-info/chronology-of-events/complaints-api/ComplaintsApi";
import { useRouter } from "next/router";
import { useRef } from "react";

export const useComplaintsTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useComplaintsListQuery();
  const complaints = data?.data?.complaints;
  const meta = data?.meta;
  return {
    router,
    tableHeaderRefTwo,
    isLoading,
    headerChangeHandler,
    complaints,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
  };
};
