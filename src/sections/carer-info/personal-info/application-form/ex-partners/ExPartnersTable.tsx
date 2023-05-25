import React, { useRef, useState } from "react";
import ExPartnersViewForm from "./ExPartnersViewForm";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useTheme } from "@mui/material";
import { columns } from ".";
import { useGetExPartnerDetailsQuery } from "@root/services/carer-info/personal-info/application-form/ExPartnersApi";

export default function ExPartnersView({ apllicationFormid }: any) {
  let [viewData, setViewData] = useState(null);
  let [exPartnerData, setExPartnerData] = useState(null);

  const tableHeaderRef = useRef<any>();
  const theme: any = useTheme();

  const changeView = (val: any) => {
    setViewData(val);
  };
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetExPartnerDetailsQuery(apllicationFormid);
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
  return (
    <>
      {viewData ? (
        <ExPartnersViewForm
          disabled={viewData == "view" ? true : false}
          exPartnerData={exPartnerData}
          changeView={changeView}
        />
      ) : (
        <>
          <TableHeader
            ref={tableHeaderRef}
            title="Existing Ex-Partners(s) Details"
            searchKey="search"
            onChanged={(data: any) => {
              console.log("Updated params: ", data);
            }}
          />
          <CustomTable
            showSerialNo
            data={data?.data}
            columns={columns(changeView, setExPartnerData)}
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
