import React from "react";
import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useDeleteAllegationListMutation } from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/allegationApi";
import { enqueueSnackbar } from "notistack";
import { useAllegationTable } from "./useAllegationTable";
import { getColumns } from "./index";

const AllegationTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    isLoading,
    allegations,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
  } = useAllegationTable();

  const [deleteList, { isSuccess: successMessage }] =
    useDeleteAllegationListMutation();
  //Checking If Allegation is Deleted Successfully
  if (successMessage) {
    enqueueSnackbar("Allegation Deleted Successfully", {
      variant: "success",
    });
  }
  const columns = getColumns(deleteList);
  return (
    <>
      <Box sx={{ mb: 1 }}>
        <TableHeader
          ref={tableHeaderRefTwo}
          title="Allegation"
          searchKey="search"
          showAddBtn
          onAdd={() => {
            router.push({
              pathname:
                "/carer-info/personal-info/carer-chronology-of-events/allegation",
              query: { action: "add" },
            });
          }}
        />
      </Box>
      <CustomTable
        data={allegations}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        showSerialNo
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default AllegationTable;
