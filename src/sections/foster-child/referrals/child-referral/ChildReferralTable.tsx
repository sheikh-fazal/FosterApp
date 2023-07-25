import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { SELECTFILTERS, data, getColumnsChildReferral } from "./";
import CustomTable from "@root/components/Table/CustomTable";

export default function ChildReferralTable() {
  const tableHeaderRef = useRef<any>();
  const { makePath } = usePath();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columnsChildReferral = getColumnsChildReferral(makePath);

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        // disabled={isLoading}
        disabled={false}
        title="Child Referrals"
        searchKey="search"
        onChanged={headerChangeHandler}
        showSelectFilters
        selectFilters={SELECTFILTERS}
      />

      <CustomTable
        data={data}
        columns={columnsChildReferral}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        showSerialNo
        //   isLoading={isLoading}
        //   isFetching={isFetching}
        //   isError={isError}
        //   isSuccess={isSuccess}
        //   currentPage={meta?.page}
        //   totalPages={meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
}
