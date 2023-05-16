import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import { columns } from "./index";
import { useReportTable } from "./useReportTable";

const ReportTable = () => {
  //OOH Report Custom Hook
  const { data } = useReportTable();
  return (
    <CustomTable
      data={data}
      columns={columns}
      isLoading={false}
      isFetching={false}
      isError={false}
      isPagination={false}
      isSuccess={true}
      // count={Math.ceil(data?.data?.meta?.total / limit)}
      currentPage={1}
      onPageChange={(data: any) => {}}
      onSortByChange={(data: any) => {}}
    />
  );
};

export default ReportTable;
