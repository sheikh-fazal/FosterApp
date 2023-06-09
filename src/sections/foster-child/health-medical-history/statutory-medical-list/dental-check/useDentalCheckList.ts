import React, { useRef, useState } from "react";

import { useRouter } from "next/router";
import { dentalCheckListTableColumnsFunction } from ".";

export const useDentalCheckList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [isSingleDocumentDetailViewed, SetIsSingleDocumentDetailViewed] =
    useState(false);

  const dentalCheckListTableColumns = dentalCheckListTableColumnsFunction(router);
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
    dentalCheckListTableColumns,
    data,
    dataTable,
  };
};
