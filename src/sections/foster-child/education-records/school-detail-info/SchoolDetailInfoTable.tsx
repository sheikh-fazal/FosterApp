import React from 'react'
import { columns } from './'
import { useSchoolDetailInfoTable } from './useSchoolDetailInfoTable';
import { Card } from '@mui/material';
import TableHeader from '@root/components/TableHeader';
import CustomTable from '@root/components/Table/CustomTable';

export default function SchoolDetailInfoTable() {
    const {
        router,
        tableHeaderRef,
        isLoading,
        headerChangeHandler,
        family,
        isFetching,
        isError,
        isSuccess,
        meta,
        pageChangeHandler,
        sortChangeHandler,
      } = useSchoolDetailInfoTable();
  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="School Detail Info"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push(
            "/foster-child/education-records/school-detail-info/add-school-detail"
          );
        }}
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={family}
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
    </Card>
  )
}
