import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import { Grid } from "@mui/material";
import DeleteModel from '@root/components/modal/DeleteModel';
import { NotificationTableData } from '.';
import { useNotificationTable } from './useNotificationTable';



const NotificationTable = () => {
  const { NotificationTableColumns,
    IsDeleteModal,
    setIsDeleteModal,
    tableHeaderRef,
    theme}=useNotificationTable()

  return (
    <Grid container >
    <Grid xs={12} item>
    <TableHeader
        ref={tableHeaderRef}
        title="Notification Setting"
        searchKey="search"
        showAddBtn
        onAdd={() => { }}
      />
      <CustomTable
        data={NotificationTableData}
        columns={NotificationTableColumns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
        rootSX={{ my: theme.spacing(2) }}
      />
    <DeleteModel open={IsDeleteModal} handleClose={() => setIsDeleteModal(false)} />
    </Grid>
  </Grid>
  )
}

export default NotificationTable
