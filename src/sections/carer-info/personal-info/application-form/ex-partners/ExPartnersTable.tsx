import React, { useRef, useState } from "react";
import ExPartnersViewForm from "./ExPartnersViewForm";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useTheme } from "@mui/material";
import { columns } from ".";

import { enqueueSnackbar } from "notistack";
import { useExPartnersTable } from "./useExPartnersTable";

export default function ExPartnersView({ apllicationFormid, role }: any) {
  let {
    changeView,
    viewData,
    setViewData,
    theme,
    exPartnerData,
    setExPartnerData,
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    listDeleteHandler,
    tableHeaderRef,
  } = useExPartnersTable(apllicationFormid, role);

  return (
    <>
      {viewData ? (
        <ExPartnersViewForm
          role
          disabled={viewData == "view" ? true : false}
          exPartnerData={exPartnerData}
          changeView={changeView}
          viewData={viewData}
          apllicationFormid={apllicationFormid}
        />
      ) : (
        <>
          <TableHeader
            ref={tableHeaderRef}
            title="Existing Ex-Partners(s) Details"
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
            columns={columns(
              changeView,
              setExPartnerData,
              role,
              listDeleteHandler
            )}
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
          />{" "}
        </>
      )}
    </>
  );
}
