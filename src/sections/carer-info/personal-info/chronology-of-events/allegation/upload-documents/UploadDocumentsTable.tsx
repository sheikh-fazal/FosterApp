import React from "react";
import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import UploadDocumentsModel from "./UploadDocumentsModal";
import { getColumns } from "./index";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";
import TableHeader from "@root/components/TableHeader";
function UploadedDocumentsTable() {
  const {
    deleteList,
    loadingList,
    allegationDocuments,
    isError,
    isFetching,
    isSuccess,
    meta,
  } = useUploadDocumentsTable();
  const columns = getColumns(deleteList);
  const [open, setOpen] = React.useState(false);
  const modelHander = () => (open === true ? setOpen(false) : setOpen(true));
  return (
    <>
      <Box sx={{ mb: 1 }}>
        <TableHeader
          title="Uploaded Documents"
          searchKey="search"
          showAddBtn
          onAdd={modelHander}
        />
      </Box>
      <UploadDocumentsModel open={open} setOpen={setOpen} />
      <CustomTable
        data={allegationDocuments}
        columns={columns}
        isLoading={loadingList}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        isPagination={true}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
    </>
  );
}

export default UploadedDocumentsTable;
