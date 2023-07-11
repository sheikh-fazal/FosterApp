import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import { Grid } from "@mui/material";
import {Mandatorydata } from '.';
import { useMandatoryTraining } from './useMandatoryTraining';
import { LoadingButton } from '@mui/lab';
import TableHeader from "@root/components/TableHeader";




const MandatoryTraining = () => {
  const {tableHeaderRef, MandatoryTrainingColumns,theme,
    IsOpenTrainingClockModal,
    setIsOpenTrainingClockModal,
  } = useMandatoryTraining()


  return (
    <Grid container >
      <Grid item xs={12}>
        {/* <TrainingClockEngineModal
          title={actionType === 'add' ? 'Add New Setting' : 'Edit Setting'}
          open={IsOpenTrainingClockModal}
          handleClose={() => setIsOpenTrainingClockModal(false)}
          SubmitBtnText={actionType === "edit" ? "Update" : "Submit"}
          CancelBtnText="Cancel"
        
        /> */}
       <TableHeader
        // ref={tableHeaderRef}
        title="Placement Meeting Record"
        // disabled={props.disabled}
        showAddBtn
        hideSearch
        onAdd={''}
      />
        <CustomTable
          data={Mandatorydata}
          columns={MandatoryTrainingColumns}
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
      </Grid>
      <Grid item xs={12}  ml={3.5} mb={2} mt={0}>
          <LoadingButton
            type="submit"
            sx={{
              bgcolor: theme.palette.primary.main,
            }}
            variant="contained"
            // loading={isfatching}
          >
            Continue
          </LoadingButton>
    </Grid>
    </Grid>
  )
}

export default MandatoryTraining
