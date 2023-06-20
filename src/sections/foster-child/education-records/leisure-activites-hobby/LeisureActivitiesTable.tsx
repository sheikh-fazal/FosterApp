import { Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import TableHeader from "@root/components/TableHeader";
import { columns, CarerAddressHistoryTableData } from ".";
import { useLeisureActivitiesTable } from "./useLeisureActivitiesTable";

export default function LeisureActivitiesTable() {
  const {
    router,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  } = useLeisureActivitiesTable();

  return (
    <Grid container>
      <Grid xs={12} item>
        <TableHeader
          ref={tableHeaderRef}
          title="Leisure Activities/Hobbies"
          searchKey="search"
          showAddBtn
          onAdd={() => {
            router.push(
              "/foster-child/education-records/leisure-activities-hobby/leisure-activity"
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
          showSerialNo
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
