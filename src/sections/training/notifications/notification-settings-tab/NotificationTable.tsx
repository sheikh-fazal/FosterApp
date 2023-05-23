import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import { Grid } from "@mui/material";
import DeleteModel from '@root/components/modal/DeleteModel';
import { NotificationTableData } from '.';
import { useNotificationTable } from './useNotificationTable';
import TrainingClockEngineModal from '../../manage-courses/training-clock-engine/modal/TrainingClockEngineModal';




const NotificationTable = () => {
  const { NotificationTableColumns,
    IsDeleteModal,
    setIsDeleteModal,
    tableHeaderRef, theme,
    IsOpenTrainingAddModal,
    setIsOpenTrainingAddModal, handleEditClicked,
    selectedRowId, actionType,
    setActionType
  } = useNotificationTable()
  console.log("Selected row ID:", selectedRowId);
  return (
    <Grid container >
      <Grid xs={12} item>
        <TrainingClockEngineModal title={actionType === 'add' ?' Add New Notification' : 'Edit Notification '} open={IsOpenTrainingAddModal}
          SubmitBtnText={actionType === "edit" ? "Update" : "Submit"}
          CancelBtnText="Cancel"
          handleClose={() => setIsOpenTrainingAddModal(false)}

        />
        <TableHeader
          ref={tableHeaderRef}
          title="Notification Setting"
          searchKey="search"
          showAddBtn
          onAdd={() => { setIsOpenTrainingAddModal(true); setActionType('add') }}
        />
        <CustomTable
          data={NotificationTableData}
          columns={NotificationTableColumns.map(column => {
            if (column.id === "actions") {
              return {
                ...column,
                cell: (info: any) => column.cell({
                  ...info,
                  handleEditClicked: handleEditClicked
                })
              };
            }
            return column;
          })}
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
