import { Grid, Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React, { useRef } from "react";
import { useFamilyTable } from "./useFamilyTable";
import { columns, defaultValues } from ".";
import { useGetFamilyDetailsQuery } from "@root/services/carer-info/personal-info/application-form/FamilyApi";

export default function FamilyTable({ apllicationFormid }: any) {
  const {
    router,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  } = useFamilyTable();
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetFamilyDetailsQuery(apllicationFormid);
  return (
    <Grid container>
      <Grid xs={12} item>
        <TableHeader
          ref={tableHeaderRef}
          disabled={isLoading}
          title="Existing Family Member(s) Details"
          searchKey="search"
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
        <CustomTable
          data={data?.data}
          columns={columns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          showSerialNo
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={sortChangeHandler}
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
}
