import React, { useRef, useState } from "react";
import ReferenceViewForm from "./ReferenceViewForm";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { Box, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { columns } from ".";
import { useGetReferenceDetailsQuery } from "@root/services/carer-info/personal-info/application-form/ReferenceApi";

export default function Reference({ apllicationFormid, role }: any) {
  let [viewData, setViewData] = useState(null);
  let [refData, setRefData] = useState(null);
  const tableHeaderRef = useRef<any>();
  const theme: any = useTheme();

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetReferenceDetailsQuery(apllicationFormid);

  const changeView = (val: any) => {
    setViewData(val);
  };

  return (
    <>
      {viewData ? (
        <ReferenceViewForm
          role
          disabled={viewData == "view" ? true : false}
          refData={refData}
          changeView={changeView}
        />
      ) : (
        <>
          <TableHeader
            disabled={isLoading}
            ref={tableHeaderRef}
            title="Existing Ex-References(s) Details"
            showAddBtn={role == "foster-carer" ? false : true}
            onAdd={() => {
              changeView("add");
            }}
            searchKey="search"
            onChanged={(data: any) => {
              console.log("Updated params: ", data);
            }}
          />
          <CustomTable
            showSerialNo
            data={data?.data}
            columns={columns(changeView, setRefData, role)}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
            isSuccess={isSuccess}
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
        </>
      )}
    </>
  );
}
