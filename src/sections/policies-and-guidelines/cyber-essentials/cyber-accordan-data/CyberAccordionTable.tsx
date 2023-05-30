import React from "react";
import { data } from ".";
import CustomTable from "@root/components/Table/CustomTable";
import { useCyberAccordionTable } from "./useCyberAccordionTable";

// ============================================================================

const CyberAccordionTable = () => {
  const { appendixAColumns, theme } = useCyberAccordionTable();
  return (
    <>
      <CustomTable
        data={data}
        columns={appendixAColumns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
        rootSX={{ my: theme.spacing(2), mt: 0 }}
      />
    </>
  );
};

export default CyberAccordionTable;
