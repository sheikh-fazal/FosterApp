import { useTableParams } from "@root/hooks/useTableParams";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const useAnnualReviewTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  return {
    router,
    tableHeaderRefTwo,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
};
