import React, { useRef } from "react";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import CustomTable from "@root/components/Table/CustomTable";
import { SELECTFILTERS, columnsFosterCarerList, dataFosterCarerList } from "./";

const FosterCarerListTable = () => {
  const tableHeaderRef = useRef<any>();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        //   disabled={isLoading}
        title="Foster Carer List"
        searchKey="search"
        showSelectFilters
        selectFilters={SELECTFILTERS}
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={dataFosterCarerList}
        columns={columnsFosterCarerList}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        //   isLoading={isLoading}
        //   isFetching={isFetching}
        //   isError={isError}
        //   isSuccess={isSuccess}
        //   currentPage={meta?.page}
        //   totalPages={meta?.pages}
        showSerialNo
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
};

export default FosterCarerListTable;
