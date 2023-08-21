import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef } from "react";
import { columnsEducationKeyStageTable } from ".";
import { useRouter } from "next/router";

const useEducationKeyStageReportList = () => {
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const tableHeaderRef = useRef<any>();
  const router = useRouter();

  const columnsEducationKeyStageTableFuntion =
    columnsEducationKeyStageTable(router);
  return {
    headerChangeHandler,
    tableHeaderRef,
    pageChangeHandler,
    sortChangeHandler,
    columnsEducationKeyStageTableFuntion,
  };
};

export default useEducationKeyStageReportList;
