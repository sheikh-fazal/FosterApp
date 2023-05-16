import { Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import TableHeader from "@root/components/TableHeader";
import { columns, CarerAddressHistoryTableData } from ".";
import { useCarerAddressTable } from "./useCarerAddressTable";

export function CarerAddressHistoryTable() {
  const {
    router,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  } = useCarerAddressTable();

  return (
    <Grid container>
      <Grid xs={12} item>
        <TableHeader
          ref={tableHeaderRef}
          title="Carer Address History"
          searchKey="search"
          showAddBtn
          onAdd={() => {
            router.push(
              "/carer-info/personal-info/carer-address-history/add-address-history"
            );
          }}
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
        <CustomTable
          data={CarerAddressHistoryTableData}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
}
