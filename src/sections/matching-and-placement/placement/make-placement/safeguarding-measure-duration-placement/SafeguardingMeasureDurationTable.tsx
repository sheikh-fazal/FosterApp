import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import { Grid } from "@mui/material";
import {safeguardingMeasureDurationData } from '.';
import { useSafeguardingMeasureDurationTable } from './useSafeguardingMeasureDurationTable';
import { LoadingButton } from '@mui/lab';





const SafeguardingMeasureDurationTable = () => {
  const {tableHeaderRef, safeguardingMeasureDurationColumns,theme,
    IsOpenTrainingClockModal,
    setIsOpenTrainingClockModal,
  } = useSafeguardingMeasureDurationTable()


  return (
    <Grid container >
      <Grid item xs={12} mt={1}>
        {/* <TrainingClockEngineModal
          title={actionType === 'add' ? 'Add New Setting' : 'Edit Setting'}
          open={IsOpenTrainingClockModal}
          handleClose={() => setIsOpenTrainingClockModal(false)}
          SubmitBtnText={actionType === "edit" ? "Update" : "Submit"}
          CancelBtnText="Cancel"
        
        /> */}

        <CustomTable
          data={safeguardingMeasureDurationData}
          columns={safeguardingMeasureDurationColumns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          rootSX={{ my: theme.spacing(2) ,p:1.5}}

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

export default SafeguardingMeasureDurationTable
