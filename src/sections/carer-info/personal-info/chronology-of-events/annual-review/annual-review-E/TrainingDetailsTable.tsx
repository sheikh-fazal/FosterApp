import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React, { useRef } from "react";
import { useTrainingDetailsTable } from "./useTrainingDetailsTable";

const TrainingDetailsTable = () => {
  const {
    tableHeaderRefTwo,
    annualReviewListIsloading,
    annualReviewData,
    annualReviewListIsfetching,
    annualReviewListError,
    annualReviewListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  } = useTrainingDetailsTable();

  const columns = [
    {
      accessorFn: (row: any) =>
        row?.annualReviewE?.trainingDetails?.courseAttendedCarer ?? "-",
      id: "courseAttendedCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Course Attended Carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) =>
        row?.annualReviewE?.trainingDetails?.coursesAttended ?? "-",
      id: "coursesAttended",
      cell: (info: any) => info.getValue(),
      header: () => <span>Courses Attended</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) =>
        row?.annualReviewE?.trainingDetails?.dateOfAttendance ?? "-",
      id: "attendenceDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Attendance</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) =>
        row?.annualReviewE?.trainingDetails?.coursesStatus ?? "-",
      id: "courseStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Course Status</span>,
      isSortable: true,
    },
  ];
  return (
    <Box sx={{ mt: 1 }}>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Training Details"
        onChanged={(e: any) => {
          setSearch(e.search);
        }}
      />
      <CustomTable
        data={annualReviewData}
        columns={columns}
        isLoading={annualReviewListIsloading}
        isFetching={annualReviewListIsfetching}
        isError={annualReviewListError}
        isSuccess={annualReviewListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Box>
  );
};

export default TrainingDetailsTable;
