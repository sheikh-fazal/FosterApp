import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useCarerFamilySupportNetworkTable } from "./useCarerFamilySupportNetworkTable";
import { columns } from "./";

export default function CarerFamilySupportNetworkTable() {
  const {
    router,
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
  } = useCarerFamilySupportNetworkTable();

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Excisting Family Member Details"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push(
            "/carer-info/personal-info/carer-family-support-network/add-family-support"
          );
        }}
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={family}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        showSerialNo
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
}
