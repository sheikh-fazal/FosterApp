import { Grid } from '@mui/material'
import React from 'react'
import ComplianceVerticalTabs from './compliance-management-tabs/ComplianceManagementTabs'
import { ComplianceVerticalTabsData } from '.'

const ComplianceManagement = () => {
  return (
   <Grid  container spacing={0} mt={2.5}>
     {/* <Grid lg={2.5} sx={{height:"715px"}}> */}
     <ComplianceVerticalTabs tabsData={ComplianceVerticalTabsData}/>
     {/* </Grid> */}
     {/* <Grid lg={9.5} sx={{background:"fff",boxShadow:"2px 4px 7px rgba(14, 145, 140, 0.2)",borderRadius:'10px',height:"715px"}}>
<ComplianceHorizontalTabs/>
      </Grid> */}
   </Grid>
  )
}

export default ComplianceManagement