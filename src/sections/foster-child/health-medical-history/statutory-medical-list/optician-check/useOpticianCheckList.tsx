import React, { useRef, useState } from "react";

import { useRouter } from "next/router";
import { opticianCheckListTableColumnsFunction } from ".";

export const useOpticianCheckList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [isSingleDocumentDetailViewed, SetIsSingleDocumentDetailViewed] =
    useState(false);

  const opticianCheckListTableColumns = opticianCheckListTableColumnsFunction(router);
  const [searchValue, setSearchValue] = useState(undefined);


  const data: any = {};

  const [dataTable, setDataTable] = React.useState([
    {
      CAMHSDate: "Sijo Francis",
      appointment: "£40.00",
    },
    {
      CAMHSDate: "Sijo Francis",
      appointment: "£40.00",
    },
  ]);
  return {
    opticianCheckListTableColumns,
    data,
    dataTable,
  };
};
