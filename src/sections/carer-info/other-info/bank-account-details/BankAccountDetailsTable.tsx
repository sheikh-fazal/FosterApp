/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Grid } from "@mui/material";
import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";

// ----------------------------------------------------------------------
export const BankAccountDetailsTable = (props: any) => {
  const { readOnly, isLoading, isError, isFetching, isSuccess, tableData } =
    props;

  // ----------------------------------------------------------------------

  const columns = [
    {
      accessorFn: (row: any) => row.accountNumber,
      id: "Account Number",
      cell: (info: any) => info.getValue(),
      header: () => <span>Account Number</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.sortName,
      id: "Sort Name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sort Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.nameOfBank,
      id: "Name of the Bank",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name of the Bank</span>,
    },
    {
      accessorFn: (row: any) => row.accountName,
      id: "Account Name",
      cell: (info: any) => info.getValue(),
      header: "Account Name",
    },
    {
      accessorFn: (row: any) => row.accountType,
      id: "Account Type",
      cell: (info: any) => info.getValue(),
      header: "Account Type",
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {/* <ActionModal content={info} readOnly={readOnly} btnType="view" /> */}
          <TableAction
            type="download"
            onClicked={() => alert("Download")}
            size="small"
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <Grid container>
      <CustomTable
        data={tableData}
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
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />
    </Grid>
  );
};
