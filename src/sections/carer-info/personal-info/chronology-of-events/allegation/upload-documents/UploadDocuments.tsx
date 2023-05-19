import React, { useRef } from "react";
import { Box, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import DeleteModel from "@root/components/modal/DeleteModel";
import UploadDocumentsModal from "./UploadDocumentsModal";
import { useUploadDocumentListQuery } from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/uploadDocumentsApi";
import UploadDocumentsModel from "./UploadDocumentsModal";
function UploadedDocuments(props: any) {
  const { id, action } = props;
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useUploadDocumentListQuery();
  const deleteList = (data: any) => {};
  const columns = [
    {
      accessorFn: (row: any) => row.id ?? "-",
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
      accessorFn: (row: any) => row.type,
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentDate ?? "-",
      id: "documentDate",
      cell: (info: any) => info.getValue(),
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
          <TableAction
            size="small"
            type="download"
            onClicked={() => alert("Download")}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() => alert("hello")}
          />
          {/* Delete Modal */}
          <DeleteModel onDeleteClick={() => deleteList(info.srNo)} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      {action === "view" || action === "edit" ? null : (
        <Box sx={{ textAlign: "end", mb: 1.5 }}>
          <UploadDocumentsModel allegationId={id} />
        </Box>
      )}
      <CustomTable
        data={data?.data?.allegation_documents}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        isPagination={true}
        totalPages={data?.data?.meta?.pages ?? 0}
        currentPage={data?.data?.meta?.page ?? 1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
    </>
  );
}

export default UploadedDocuments;
