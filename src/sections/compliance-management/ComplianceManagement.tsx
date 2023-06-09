import { Grid } from '@mui/material'
import React from 'react'
import ComplianceVerticalTabs from './vertical-tabs/ComplianceVerticalTabs'

const ComplianceManagement = () => {
  return (
   <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt={3.5}>
     <Grid lg={3.5} sx={{height:"820px"}}>
     <ComplianceVerticalTabs/>
     </Grid>
     <Grid lg={8.5} sx={{background:"fff",boxShadow:"2px 4px 7px rgba(14, 145, 140, 0.2)",borderRadius:'10px',height:"820px"}}>

      </Grid>
   </Grid>
  )
}

export default ComplianceManagement