import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React, { useRef } from "react";

const TrainingDetailsTable = () => {
  const tableHeaderRefTwo = useRef<any>();
  const [data, setData] = React.useState([
    {
      courseAttendedCarer: "",
      coursesAttended: "",
      attendenceDate: "",
      courseStatus: "",
    },
  ]);

  const columns = [
    {
      accessorFn: (row: any) => row.courseAttendedCarer,
      id: "courseAttendedCarer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Course Attended Carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.coursesAttended,
      id: "coursesAttended",
      cell: (info: any) => info.getValue(),
      header: () => <span>Courses Attended</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.attendenceDate,
      id: "attendenceDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Attendance</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.courseStatus,
      id: "courseStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Course Status</span>,
      isSortable: true,
    },
  ];
  return (
    <Box sx={{ mt: 1 }}>
      <TableHeader ref={tableHeaderRefTwo} title="Training Details" />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        // count={Math.ceil(data?.data?.meta?.total / limit)}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />
    </Box>
  );
};

export default TrainingDetailsTable;
