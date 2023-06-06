import React, { useRef, useState } from "react";

import { useRouter } from "next/router";
import { gpDetailsInfoTableColumnsFunction } from ".";

export const useGPDetailsList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [isSingleDocumentDetailViewed, SetIsSingleDocumentDetailViewed] =
    useState(false);

  const gpDetailsInfoTableColumns = gpDetailsInfoTableColumnsFunction(router);
  const [searchValue, setSearchValue] = useState(undefined);

  const tableHeaderRef = useRef<any>();

  const data: any = {};

  const [dataTable, setDataTable] = React.useState([
    {
      physicianName: "Sijo Francis",
      physicianType: "£40.00",
      telephone:"+123334455982"
    },
    {
      physicianName: "Sijo Francis",
      physicianType: "£40.00",
      telephone:"+123334455982"
    },
  ]);
  return {
    gpDetailsInfoTableColumns,
    tableHeaderRef,
    data,
    dataTable,
  };
};
