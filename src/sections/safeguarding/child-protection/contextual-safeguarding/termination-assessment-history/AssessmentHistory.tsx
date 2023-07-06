import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useAssessmentHistory } from "./useAssessmentHistory";

const AssessmentHistory = () => {
  const { tableHeaderRefTwo, router, columns, TableData, theme } =
    useAssessmentHistory();
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Assessment to"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/safeguarding/child-protection/contextual-safeguarding/assessment-history-form",
            query: { action: "add", id: "" },
          });
        }}
        onChanged={(data: any) => {}}
      />
      <CustomTable
        data={TableData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
        rootSX={{ my: theme.spacing(2) }}
      />
    </>
  );
};

export default AssessmentHistory;
