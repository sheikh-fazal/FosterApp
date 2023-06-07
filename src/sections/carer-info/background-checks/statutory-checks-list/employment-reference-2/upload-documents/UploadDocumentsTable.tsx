import { Box } from "@mui/material";
import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import dayjs from "dayjs";
import UploadDocumentsModal from "./UploadDocumentsModal";
import { enqueueSnackbar } from "notistack";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import Link from "next/link";
import ViewDocumentsModal from "./ViewUploadDocuments";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";

const UploadDocumentsTable = () => {
  const {
    tableHeaderRefTwo,
    pageChangeHandler,
    sortChangeHandler,
    isError,
    isFetching,
    isSuccess,
    loadingList,
    statutoryUploadDocuments,
    id,
    handleSubmitForm,
    setSearch,
    modelHandler,
    action,
    meta,
    open,
    listDeleteHandler,
  } = useUploadDocumentsTable();

  const columns = [
    {
      accessorFn: (row: any) => row.id ?? "-",
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentOriginalName ?? "-",
      id: "documentName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType ?? "-",
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.documentDate ?? "-",
      id: "documentDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Document Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.personUploaded ?? "-",
      id: "personUploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentPassword ?? "-",
      id: "password",
      cell: (info: any) => info.getValue(),
      header: () => <span>Password</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <Link
            target="__blank"
            href={`${process.env.NEXT_PUBLIC_IMG_URL}${info.row.original.file}`}
          >
            <TableAction size="small" type="download" />
          </Link>
          {/* Calling Delete Modal */}
          {action === "add" || action === "edit" ? (
            <DeletePrompt
              onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
            />
          ) : null}
          {/* Modal To Display Specific Document Record */}
          <ViewDocumentsModal id={info?.row?.original?.id} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Uploaded Documents"
        searchKey="search"
        showAddBtn={action === "view" ? false : true}
        onAdd={() => {
          if (action === "add" && id === "") {
            enqueueSnackbar(
              "Please Fill The Employement Reference 2 Form First",
              {
                variant: "error",
              }
            );
          } else {
            return modelHandler();
          }
        }}
        onChanged={(e: any) => {
          setSearch(e.search);
        }}
      />
      {/* Upload Documents Modal */}
      <UploadDocumentsModal
        open={open}
        setOpen={modelHandler}
        handleSubmitForm={handleSubmitForm}
      />
      <CustomTable
        data={statutoryUploadDocuments}
        columns={columns}
        isLoading={loadingList}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default UploadDocumentsTable;
