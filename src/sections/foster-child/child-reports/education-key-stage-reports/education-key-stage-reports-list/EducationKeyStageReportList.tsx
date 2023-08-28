import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import useEducationKeyStageReportList from "./useEducationKeyStageReportList";
import { columnsEducationKeyStageTable, dummyData } from ".";

const EducationKeyStageReportList = () => {
  const {
    headerChangeHandler,
    tableHeaderRef,
    pageChangeHandler,
    sortChangeHandler,
    columnsEducationKeyStageTableFuntion,
  } = useEducationKeyStageReportList();
  return (
    <div>
      <TableHeader
        ref={tableHeaderRef}
        title="Out of School Activity Info"
        searchKey="search"
        onChanged={headerChangeHandler}
      />
      <CustomTable
        columns={columnsEducationKeyStageTableFuntion}
        data={dummyData}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
        isSuccess={true}
        isError={false}
        isFetching={false}
        isLoading={false}
        isPagination={true}
        // totalPages={data?.data?.meta?.pages}
        // currentPage={data?.data?.meta?.page}
      />
    </div>
  );
};

export default EducationKeyStageReportList;
