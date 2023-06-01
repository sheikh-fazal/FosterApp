import React, { useRef } from "react";
import { therapyInfoTableColumnsFunction } from ".";

export const useTherapyInfoList = () => {
  const therapyInfoTableColumns = therapyInfoTableColumnsFunction();
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
