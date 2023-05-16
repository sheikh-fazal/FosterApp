import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { getColumns } from "./index";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";
import TableHeader from "@root/components/TableHeader";
function UploadedDocumentsTable(props: any) {
  const { action } = props;
  const {
    deleteList,
    loadingList,
    complaintDocument,
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
      <TableHeader
        title="Uploaded Documents"
        searchKey="search"
        showAddBtn
        onAdd={modelHander}
      />
      <CustomTable
        data={complaintDocument}
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
