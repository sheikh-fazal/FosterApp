import React, { useRef, useState } from "react";
import { therapyInfoTableColumnsFunction } from ".";
import { useRouter } from "next/router";

export const useTherapyInfoList = () => {
  const router = useRouter();
  const { query } = useRouter();
  const [isSingleDocumentDetailViewed, SetIsSingleDocumentDetailViewed] =
    useState(false);

  const therapyInfoTableColumns = therapyInfoTableColumnsFunction(router);
  const [searchValue, setSearchValue] = useState(undefined);

  const tableHeaderRef = useRef<any>();

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
    therapyInfoTableColumns,
    tableHeaderRef,
    data,
    dataTable,
  };
};
