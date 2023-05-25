import React, { useRef, useState } from "react";
import EmployersViewForm from "./EmployersViewForm";
import TableHeader from "@root/components/TableHeader";
import { Box, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import CustomTable from "@root/components/Table/CustomTable";
import { columns } from ".";
import { useGetEmployerDetailsQuery } from "@root/services/carer-info/personal-info/application-form/EmployersApi";

export default function Employers({ apllicationFormid }: any) {
  let [viewData, setViewData] = useState(null);
  let [employerData, setEmployerData] = useState(null);
  const tableHeaderRef = useRef<any>();

  const changeView = (val: any) => {
    setViewData(val);
  };

  const theme: any = useTheme();

  // const [data, setData] = React.useState([
  //   {
  //     srNo: "U4721XBUCA",
  //     name: "John",
  //     phone: "123456789",
  //     email: "john@xyz",
  //   },
  //   {
  //     srNo: "U3721XBUCB",
  //     name: "John Doe",
  //     phone: "12345678109",
  //     email: "johndoe2@xyz",
  //   },
  // ]);
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetEmployerDetailsQuery(apllicationFormid);

  return (
    <>
      {viewData ? (
        <EmployersViewForm
          disabled={viewData == "view" ? true : false}
          employerData={employerData}
          changeView={changeView}
        />
      ) : (
        <>
          <TableHeader
            ref={tableHeaderRef}
            title="Existing Employer(s) Details"
            searchKey="search"
            onChanged={(data: any) => {
              console.log("Updated params: ", data);
            }}
          />
          <CustomTable
            showSerialNo
            data={data?.data}
            columns={columns(changeView, setEmployerData)}
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
