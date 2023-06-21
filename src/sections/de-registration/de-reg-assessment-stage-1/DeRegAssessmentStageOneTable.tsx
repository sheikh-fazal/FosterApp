import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import { Grid } from "@mui/material";
import useDeRegAssessmentStageOneTable from './useDeRegAssessmentStageOneTable';
import { DeRegAssissmentAddModal } from './Modal';





const DeRegAssessmentStageOneTable = () => {
  const {
    DeRegAssessmentStageOneColumn,
    tableHeaderRef, theme, SelectFilter, isOpenAddAssessment, setOpenAddAssessment,
    actionType, setActionType,editData,
    DeRegAssessmentTableData, setDeRegAssessmentTableData, onHandleAddAssessment,onHandleEditAssessment
  } = useDeRegAssessmentStageOneTable()




  return (
    <Grid container >
      <Grid xs={12} item>

        <TableHeader
          ref={tableHeaderRef}
          title="De-Reg Consultation with foster carer"
          searchKey="search"
          showAddBtn
          selectFilters={SelectFilter}
          showSelectFilters
          onAdd={() => {
            setOpenAddAssessment(true); setActionType('Add')
          }}
        />
        <CustomTable
          data={DeRegAssessmentTableData}
          columns={DeRegAssessmentStageOneColumn}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
        <DeRegAssissmentAddModal
         initialValues={editData}
          title={
            actionType === 'View'
              ? 'View Person Uploaded: XYZ'
              : actionType === 'Add'
                ? 'Person Uploaded: XYZ'
                : 'Edit Person Uploaded: XYZ'
          }
          disabled={actionType === 'View'}
          open={isOpenAddAssessment}
          isHideSubmitButton={actionType === 'View' }
          onSubmit={actionType === 'Add' ? (data: any) => onHandleAddAssessment(data) :  (data: any) => onHandleEditAssessment(data) }
          handleClose={() => setOpenAddAssessment(false)}
        />
      </Grid>
    </Grid>
  )
}

export default DeRegAssessmentStageOneTable
