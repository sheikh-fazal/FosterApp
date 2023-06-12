import React, { useRef, useState } from "react";
import EmployersViewForm from "./EmployersViewForm";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { columns } from ".";
import { useEmployerTable } from "./useEmployerTable";

export default function Employers({ apllicationFormid, role }: any) {
  let {
    changeView,
    viewData,
    setViewData,
    theme,
    employerData,
    setEmployerData,
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    listDeleteHandler,
    tableHeaderRef,
  } = useEmployerTable(apllicationFormid, role);

  return (
    <>
      {viewData ? (
        <EmployersViewForm
          role
          disabled={viewData == "view" ? true : false}
          employerData={employerData}
          changeView={changeView}
          viewData={viewData}
          apllicationFormid={apllicationFormid}
        />
      ) : (
        <>
          <TableHeader
            ref={tableHeaderRef}
            title="Existing Employer(s) Details"
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
              setEmployerData,
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
          />
        </>
      )}
    </>
  );

  //  <div>Reference</div>
}
