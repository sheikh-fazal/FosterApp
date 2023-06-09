/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import BankAccountDetailsForm from "./BankAccountDetailsForm";
import DeleteModel from "@root/components/modal/DeleteModel";

// ----------------------------------------------------------------------
export const BankAccountDetailsTable = (props: any) => {
  const {
    readOnly,
    gettingStatus,
    tableData,
    editedData,
    editingStatus,
    onDelete,
  } = props;
  const [openDeleteModal, setOpenDeleteModal] = useState<any>(false);
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
      accessorFn: (row: any) => row.bankName,
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
            status={editingStatus}
            closeModal={() => {}}
            formData={(data: any) =>
              editedData({
                id: info.row?.original?.id,
                body: data,
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
        onDeleteClick={onDelete(openDeleteModal?.id)}
        handleClose={() => {
          setOpenDeleteModal(false);
        }}
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isLoading={
          // false
          gettingStatus?.isLoading
        }
        isFetching={
          // false
          gettingStatus?.isFetching
        }
        isError={
          // false
          gettingStatus?.isError
        }
        isSuccess={
          // true
          gettingStatus?.isSuccess
        }
        // showSerialNo
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
