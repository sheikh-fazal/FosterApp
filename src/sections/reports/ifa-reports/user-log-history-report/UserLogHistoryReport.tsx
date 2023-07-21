import React from "react";
import { useUserLogHistoryReport } from "./useUserLogHistoryReport";
import { viewReportsFilterData, TableDemoData } from ".";
import ReportsLayout from "../../reports-layout/ReportsLayout";

const UserLogHistoryReport = () => {
  const { HandlerSearch, columns } = useUserLogHistoryReport();

  return (
    <ReportsLayout
      title={'Serach Criteria'}
      searchOnRight
      handleFilterBtn={HandlerSearch}
      tableHeaderProps={{ title: '' }}
      selectFilterArray={viewReportsFilterData}
      handleFilterChange={(event: any) => { }}
      tableProps={{
        data: TableDemoData,
        columns,
        isSuccess: true
      }}
    />
  );
};

export default UserLogHistoryReport;
