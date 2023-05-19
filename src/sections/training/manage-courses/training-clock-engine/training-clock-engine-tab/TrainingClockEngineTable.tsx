import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import { Grid } from "@mui/material";
import DeleteModel from '@root/components/modal/DeleteModel';
import { TrainingClockEngineTableData } from '.';
import {useTrainingClockEngineTable } from './useTrainingClockEngineTable';
import TrainingClockEngineModal from '../modal/TrainingClockEngineModal';



const TrainingClockEngineTable = () => {
  const {IsDeleteModal,setIsDeleteModal,tableHeaderRef,TrainingClockEngineTableColumns,theme
,IsOpenTrainingClockEngineModal,
setIsOpenTrainingClockEngineModal}=useTrainingClockEngineTable()

  return (
    <Grid container >
    <Grid xs={12} item>
        <TrainingClockEngineModal open={IsOpenTrainingClockEngineModal} handleClose={()=>setIsOpenTrainingClockEngineModal(true)}/>
    <TableHeader
        ref={tableHeaderRef}
        title="Training Clock Engine"
        searchKey="search"
        showAddBtn
        onAdd={() => { setIsOpenTrainingClockEngineModal(true)}}
      />
      <CustomTable
        data={TrainingClockEngineTableData}
        columns={TrainingClockEngineTableColumns}
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
    <DeleteModel open={IsDeleteModal} handleClose={() => setIsDeleteModal(false)} />
    </Grid>
  </Grid>
  )
}

export default TrainingClockEngineTable
