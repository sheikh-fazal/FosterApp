import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const useReportTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme: any = useTheme();
  const [data, setData] = React.useState([
    {
      srNo: 1,
      reportingTime: "10/10/2021",
      placementRequired: "Text",
      status: "Text",
    },
    {
      srNo: 2,
      reportingTime: "10/10/2021",
      placementRequired: "Text",
      status: "Text",
    },
  ]);
  return {
    router,
    tableHeaderRefTwo,
    theme,
    data,
  };
};
