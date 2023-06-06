import React from "react";
import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";
import TableHeader from "@root/components/TableHeader";
import TableAction from "@root/components/TableAction";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import ViewDocumentsModal from "./ViewDocumentsModal";
import UploadDocumentsModal from "./UploadDocumentsModal";
import { enqueueSnackbar } from "notistack";
import Link from "next/link";
import { UPLOAD_DOCUMENTS } from ".";
function UploadedDocumentsTable() {
  // const {
  //   loadingList,
  //   allegationDocuments,
  //   isError,
  //   isFetching,
  //   isSuccess,
  //   meta,
  //   setSearch,
  //   pageChangeHandler,
  //   sortChangeHandler,
  //   listDeleteHandler,
  //   action,
  //   id,
  //   modelHandler,
  //   uploadDocumentsHandler,
  //   open,
  // } = useUploadDocumentsTable();

  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentName ?? "-",
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
      accessorFn: (row: any) => row.password ?? "-",
      id: "password",
      cell: (info: any) => info.getValue(),
      header: () => <span>Password</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
          {/* <Link
            target="__blank"
            href={`${process.env.NEXT_PUBLIC_IMG_URL}${info.row.original.file}`}
          > */}
            <TableAction size="small" type="download" />
          {/* </Link> */}
          {/* Calling Delete Modal */}
          {/* {action === "add" || action === "edit" ? ( */}
            <DeletePrompt
              // onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
            />
          {/* ) : null} */}
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
      <Box sx={{ mb: 1 }}>
        <TableHeader
          title="Uploaded Documents"
          searchKey="search"
          // showAddBtn={action === "view" ? false : true}
          onChanged={(e: any) => {
            // setSearch(e.search);
          }}
          onAdd={() => {
            // if (action === "add" && id === "") {
              enqueueSnackbar("Please Fill The Allegation Form First", {
                variant: "error",
              });
            } 
            // else {
            //   // return modelHandler();
            // }
          }
        />
      </Box>
      {/* Upload Documents Modal */}
      {/* <UploadDocumentsModal
        open={open}
        setOpen={modelHandler}
        uploadDocumentsHandler={uploadDocumentsHandler}
      /> */}
      <CustomTable
        data={UPLOAD_DOCUMENTS}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        // isLoading={false}
        // isFetching={false}
        // isError={false}
        // isSuccess={isSuccess}
        // isPagination={true}
        // currentPage={meta?.page}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
        // totalPages={meta?.pages}
        // onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
      />
    </>
  );
}

export default UploadedDocumentsTable;
