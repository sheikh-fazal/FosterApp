import { Card } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import React, { useRef } from 'react'
import { useTableParams } from '@root/hooks/useTableParams';
import { columns } from './';

export default function TrainingProfileTable() {
  const tableHeaderRef = useRef<any>();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const [data, setData] = React.useState([
    {
      CarerName: "Doc Name",
      CarerType: "Document Type",
      CoursesAttended: "19/05/2021",
      AttendedDate: "Name Xame",
    },
    {
      CarerName: "Doc Name",
      CarerType: "Document Type",
      CoursesAttended: "19/05/2021",
      AttendedDate: "Name Xame",
    },
  ])


  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        // disabled={isLoading}
        title="Training Profile"
        searchKey="search"
        showAddBtn
        // onAdd={() => {
        //   router.push(
        //     "/carer-info/personal-info/carer-family-support-network/add-family-support"
        //   );
        // }}
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={data}
        columns={columns}
        // isLoading={isLoading}
        // isFetching={isFetching}
        // isError={isError}
        // isSuccess={isSuccess}
        // currentPage={meta?.page}
        // totalPages={meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  )
}
