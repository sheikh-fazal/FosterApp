import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import { Grid } from "@mui/material";
import { TrainingClockEngineTableData } from '.';
import useDeRegAssessmentStageOneTable from './useDeRegAssessmentStageOneTable';
import { DeRegAssissmentAddModal } from './Modal';





const DeRegAssessmentStageOneTable = () => {
  const {DeRegAssessmentStageOneColumn,
    tableHeaderRef,theme,SelectFilter, IsOpenAddAssessment, setOpenAddAssessment} = useDeRegAssessmentStageOneTable()
  


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
          onAdd={() => { setOpenAddAssessment({
            ...setOpenAddAssessment,
            value: "",
            type: "AddAssessment",
          }); }}
        />
        <CustomTable
          data={TrainingClockEngineTableData}
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
          open={IsOpenAddAssessment.type}
          //  onSubmit={(data: any) => handleAddCategory(data)}
          handleClose={() => setOpenAddAssessment({ value: "", type: "" })} />
      </Grid>
    </Grid>
  )
}

export default DeRegAssessmentStageOneTable
