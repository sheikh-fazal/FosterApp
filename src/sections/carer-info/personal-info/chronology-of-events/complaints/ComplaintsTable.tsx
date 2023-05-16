import React from "react";
import { Badge, Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRef } from "react";
import router from "next/router";
import DeleteModel from "@root/components/modal/DeleteModel";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteComplaintListMutation,
  useComplaintsListQuery,
} from "@root/services/carer-info/personal-info/chronology-of-events/complaints-api/ComplaintsApi";
import { useComplaintsTable } from "./useComplaintsTable";
import { getColumns } from ".";

const ComplaintsTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    isLoading,
    complaints,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
  } = useComplaintsTable();
  const [deleteList, { isSuccess: successMessage }] =
    useDeleteComplaintListMutation();
  //Checking If Complaint is Deleted Successfully
  if (successMessage) {
    enqueueSnackbar("Complaint Deleted Successfully", {
      variant: "success",
    });
  }
  const columns = getColumns(deleteList);
  return (
    <>
      <Box sx={{ mb: 1 }}>
        <TableHeader
          ref={tableHeaderRefTwo}
          title="Complaints"
          searchKey="search"
          showAddBtn
          onAdd={() => {
            router.push({
              pathname:
                "/carer-info/personal-info/carer-chronology-of-events/complaints",
              query: { action: "add" },
            });
          }}
          onChanged={(data: any) => {}}
        />
      </Box>
      <CustomTable
        data={complaints}
        columns={columns}
        isLoading={isLoading}
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
};

export default ComplaintsTable;

//Styling
const styles: any = {
  badge: (theme: any) => ({
    "& .MuiBadge-badge": {
      fontSize: 9,
      top: 11,
      right: -22,
      height: 15,
      background: theme.palette.primary.main,
      cursor: "pointer",
    },
  }),
};
