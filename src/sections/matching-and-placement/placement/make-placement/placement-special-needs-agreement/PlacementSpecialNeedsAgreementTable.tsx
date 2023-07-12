import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import { Grid } from "@mui/material";
import { SpecialNeedsAgreementData } from '.';
import { usePlacementSpecialNeedsAgreementTable } from './usePlacementSpecialNeedsAgreementTable';
import { LoadingButton } from '@mui/lab';
import TableHeader from "@root/components/TableHeader";




const PlacementSpecialNeedsAgreementTable = () => {
  const {SpecialNeedsAgreementColumns,theme} = usePlacementSpecialNeedsAgreementTable()


  return (
    <Grid container >
      <Grid item xs={12} mt={2}>

       <TableHeader
        title="Placement Special Needs Agreement"
        showAddBtn
        hideSearch
        onAdd={''}
      />
        <CustomTable
          data={SpecialNeedsAgreementData}
          columns={SpecialNeedsAgreementColumns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          rootSX={{ my: theme.spacing(2),p:1.5 }}

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

export default PlacementSpecialNeedsAgreementTable
