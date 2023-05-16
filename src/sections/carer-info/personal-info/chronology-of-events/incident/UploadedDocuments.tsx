import React from "react";
import { Box, Checkbox, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import useIncidentTable from "./useIncidentTable";
function UploadedDocuments() {
  //   const tableHeaderRefTwo = useRef<any>();
  const {
    incidentUploadlist,
    incidentUploadListError,
    incidentUploadListIsloading,
    incidentUploadlistIsfetching,
    incidentUploadListIsSuccess,
    pageChangeHandler,
    sortChangeHandler,
  }: any = useIncidentTable();

  const columns = [
    {
      accessorFn: (row: any) => row.id,
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
      accessorFn: (row: any) => row.type,
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
      accessorFn: (row: any) => row.incidentId,
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
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() => alert("hello")}
          />
          <TableAction
            size="small"
            type="download"
            onClicked={() => alert("Download")}
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Box sx={{ mb: 1 }}>
        <TableHeader title="Uploaded Documents" searchKey="search" showAddBtn />
      </Box>
      <CustomTable
        data={incidentUploadlist?.data?.incident_documents ?? []}
        columns={columns}
        isLoading={incidentUploadListIsloading}
        isFetching={incidentUploadlistIsfetching}
        isError={incidentUploadListError}
        isSuccess={incidentUploadListIsSuccess}
        isPagination={true}
        // showSerialNo={true}
         totalPages={incidentUploadlist?.data?.meta?.pages ?? 0}
         currentPage={incidentUploadlist?.data?.meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
}

export default UploadedDocuments;
