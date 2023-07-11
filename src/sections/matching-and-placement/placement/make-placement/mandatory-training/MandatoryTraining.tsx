import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import { Grid } from "@mui/material";
import {Mandatorydata } from '.';
import { useMandatoryTraining } from './useMandatoryTraining';
import { LoadingButton } from '@mui/lab';
import TableHeader from "@root/components/TableHeader";
import MandatoryModal from './Modal/MandatoryModal';




const MandatoryTraining = () => {
  const {MandatoryTrainingColumns,theme,
    IsOpenMandatoryModal, setIsOpenMandatoryModal,actionType,
  } = useMandatoryTraining()


  return (
    <Grid container >
      <Grid item xs={12} mt={2}>
      <MandatoryModal
          title={actionType === 'add' ? 'Add New Setting' : 'Edit Setting'}
          open={IsOpenMandatoryModal}
          handleClose={() => setIsOpenMandatoryModal(false)}
          SubmitBtnText={actionType === "edit" ? "Update" : "Submit"}
          CancelBtnText="Cancel"
        
        />
       <TableHeader
        // ref={tableHeaderRef}
        title="Placement Meeting Record"
        // disabled={props.disabled}
        showAddBtn
        hideSearch
        onAdd={()=>setIsOpenNotificationModal(true)}
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
          rootSX={{ my: theme.spacing(2), p:1.5}}

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
