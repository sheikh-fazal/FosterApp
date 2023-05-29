/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import BankAccountDetailsForm from "./BankAccountDetailsForm";
import DeleteModel from "@root/components/modal/DeleteModel";

// ----------------------------------------------------------------------
export const BankAccountDetailsTable = (props: any) => {
  const { readOnly, isLoading, isError, isFetching, isSuccess, tableData } =
    props;
  const [openDeleteModal, setOpenDeleteModal] = useState<any>(false);
  // ----------------------------------------------------------------------
  const tableRows = [
    {
      id: 1,
      accountNumber: "522",
      accountType: "Savings",
      accountName: "Ahmed Shah",
      nameOfBank: "HBL",
      sortName: "name",
    },
    {
      id: 2,
      accountNumber: "888",
      accountType: "platinum",
      accountName: "Butt",
      nameOfBank: "Alfalah",
      sortName: "none",
    },
  ];
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
          <BankAccountDetailsForm
            content={info}
            btnType="edit"
            closeModal={() => {}}
            formData={(data: any) =>
              console.log("oooooooooooooooooooooi Edit", {
                ...info.row?.original,
                ...data,
              })
            }
          />
          <TableAction
            type="delete"
            onClicked={() => setOpenDeleteModal(info.row?.original)}
            size="small"
          />

          <BankAccountDetailsForm
            content={info}
            readOnly
            btnType="view"
            closeModal={() => {}}
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <Grid container>
      <DeleteModel
        open={openDeleteModal}
        onDeleteClick={() => alert(openDeleteModal?.nameOfBank)}
        handleClose={() => {
          setOpenDeleteModal(false);
        }}
      />
      <CustomTable
        data={tableRows}
        columns={columns}
        isLoading={
          false
          // isLoading
        }
        isFetching={
          false
          // isFetching
        }
        isError={
          false
          // isError
        }
        isSuccess={
          true
          // isSuccess
        }
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
