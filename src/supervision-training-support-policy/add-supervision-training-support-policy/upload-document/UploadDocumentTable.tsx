import React, { useState } from "react";
import { Box, Checkbox, Grid, Button, Link } from "@mui/material";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import DeleteModel from "@root/components/modal/DeleteModel";
import CustomTable from "@root/components/Table/CustomTable";
import UploadDocumentModal from "@root/components/modal/UploadDocumentModal/UploadDocumentModal";

import { useUploadDocumentsTableData } from "./useUploadDocumentsTable";

const UploadDocumentTable = ({
  disabled,
  props = {},
  handlePreviousBtn,
}: any) => {
  const {
    IsDeleteModal,
    setIsDeleteModal,
    IsOpenDocuementModal,
    setIsOpenDocuementModal,
    tableHeaderRefTwo,
    router,
    SupervisionTrainingUploadDocData,
    actionType,setActionType,
  } = useUploadDocumentsTableData();
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
        return (
          <Box>
            {!disabled && (
              <Checkbox
                checked={table.getIsAllRowsSelected()}
                onChange={table.getToggleAllRowsSelectedHandler()}
              />
            )}
          </Box>
        );
      },
      cell: ({ row, table }: any) => (
        <Box>
          {!disabled && (
            <Checkbox
              disabled={row?.original?.Assigned}
              checked={row?.original?.Assigned ? false : row.getIsSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          )}
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentName,
      id: "documentName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentDate,
      id: "documentDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.personUploaded,
      id: "personUploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.password,
      id: "password",
      cell: (info: any) => info.getValue(),
      header: () => <span>Password</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="download"
            onClicked={() =>
              router.push({
                pathname: "",
                query: { action: "edit", id: "" },
              })
            }
          />
          {!disabled && (
            <TableAction
              size="small"
              type="delete"
              onClicked={() => setIsDeleteModal(true)}
            />
          )}
          <DeleteModel
            open={IsDeleteModal}
            handleClose={() => setIsDeleteModal(false)}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() => {
              console.log(info.row.original.id);
              setIsOpenDocuementModal(!IsOpenDocuementModal);setActionType('view')
            }}
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {!disabled ? (
            <TableHeader
              ref={tableHeaderRefTwo}
              title="Uploaded Documents"
              searchKey="search"
              showAddBtn
              onAdd={() => {
                setIsOpenDocuementModal(!IsOpenDocuementModal);setActionType('add')
              }}
              onChanged={(data: any) => {
                console.log("Updated params: ", data);
              }}
            />
          ) : (
            <TableHeader
              ref={tableHeaderRefTwo}
              title="Uploaded Documents"
              searchKey="search"
              onAdd={() => {
                setIsOpenDocuementModal(!IsOpenDocuementModal);
              }}
              onChanged={(data: any) => {
                console.log("Updated params: ", data);
              }}
            />
          )}
          <CustomTable
            data={SupervisionTrainingUploadDocData}
            columns={columns}
            isLoading={false}
            isFetching={false}
            isError={false}
            isPagination={false}
            isSuccess={true}
            currentPage={1}
            onPageChange={(data: any) => {}}
            onSortByChange={(data: any) => {}}
          />
        </Grid>
        <Grid item xs={12}>
          {!disabled && (
            <Button
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
              onClick={() => setIsOpenDocuementModal(true)}
            >
              Submit
            </Button>
          )}

          <Button
            type="button"
            variant="contained"
            sx={{
              backgroundColor: "#F6830F",
              "&:hover": { backgroundColor: "#F6830F" },
            }}
            onClick={() => {
              handlePreviousBtn();
            }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      {actionType==='view' ? (
        <UploadDocumentModal
        disabled
        open={IsOpenDocuementModal}
        handleClose={() => setIsOpenDocuementModal(false)}
        />
      ) : (
        <UploadDocumentModal 
        open={IsOpenDocuementModal}
        handleClose={() => setIsOpenDocuementModal(false)}
        isHideSubmitButton
      />
      )}
    </>
  );
};

export default UploadDocumentTable;
