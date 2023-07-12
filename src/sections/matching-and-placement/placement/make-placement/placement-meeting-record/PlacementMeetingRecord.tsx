import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import { Button, Grid } from "@mui/material";
import { PlacementMeetingRecordsData } from '.';
import { usePlacementMeetingRecord } from './usePlacementMeetingRecord';
import TableHeader from "@root/components/TableHeader";
import PlacementMeetingAddModal from './Modal/PlacementMeetingAddModal';




const PlacementMeetingRecord = () => {
  const {PlacementMeetingRecordColumns,theme,isOpenPlacementMeetingModal, setIsOpenPlacementMeetingModal
  ,onAddPlacementMeetingRecord} = usePlacementMeetingRecord()


  return (
    <Grid container >
      <Grid item xs={12} mt={2}>

       <TableHeader
        title="Placement Meeting Record"
        showAddBtn
        hideSearch
        onAdd={()=>setIsOpenPlacementMeetingModal(true)}
      />
        <CustomTable
          data={PlacementMeetingRecordsData}
          columns={PlacementMeetingRecordColumns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          rootSX={{ my: theme.spacing(2),p:2.5 }}

        />
      </Grid>
      <Grid item xs={12}  ml={2.8} mb={2} mt={0}>
      <Button sx={styles.saveBtn}>Continue</Button>
    </Grid>
    
    <PlacementMeetingAddModal title='Placement Meeting Record' open={isOpenPlacementMeetingModal} handleClose={()=>setIsOpenPlacementMeetingModal(false)}
       onSubmit={onAddPlacementMeetingRecord}/>
    </Grid>
  )
}

export default PlacementMeetingRecord

const styles = {
  saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.2, py: 1, fontSize: "16px", fontWeight: 600 }
};

