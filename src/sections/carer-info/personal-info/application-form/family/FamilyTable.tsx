import { Grid, Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React, { useRef, useState } from "react";
import { useFamilyTable } from "./useFamilyTable";
import { columns } from ".";
import { useGetFamilyDetailsQuery } from "@root/services/carer-info/personal-info/application-form/FamilyApi";
import FamilyViewForm from "./FamilyViewForm";

export default function FamilyTable({ apllicationFormid, role }: any) {
  let [viewData, setViewData] = useState(null);
  let [refData, setRefData] = useState(null);

  const changeView = (val: any) => {
    setViewData(val);
  };
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
        {viewData ? (
          <FamilyViewForm
            disabled={viewData == "view" ? true : false}
            refData={refData}
            changeView={changeView}
          />
        ) : (
          <>
            <TableHeader
              ref={tableHeaderRef}
              disabled={isLoading}
              title="Existing Family Member(s) Details"
              showAddBtn={role == "foster-carer" ? false : true}
              onAdd={() => {
                changeView("view");
              }}
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
          </>
        )}
      </Grid>
    </Grid>
  );
}
