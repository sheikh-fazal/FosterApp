import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import { Grid } from "@mui/material";
import { FinanceAgreementLocalAuthData } from '.';
import { usePlacementSpecialNeedsAgreementTable } from './useFinanceAgreementLocalAuthorityTable';
import { LoadingButton } from '@mui/lab';
import TableHeader from "@root/components/TableHeader";




const FinanceAgreementLocalAuthorityTable = () => {
  const {FinanceAgreementLocalAuthorityColumns,theme} = usePlacementSpecialNeedsAgreementTable()


  return (
    <Grid container >
      <Grid item xs={12}>

       <TableHeader
        title="Placement Special Needs Agreement"
        showAddBtn
        hideSearch
        onAdd={''}
      />
        <CustomTable
          data={FinanceAgreementLocalAuthData}
          columns={FinanceAgreementLocalAuthorityColumns}
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

export default FinanceAgreementLocalAuthorityTable
