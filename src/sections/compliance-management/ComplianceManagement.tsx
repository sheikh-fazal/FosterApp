import { Grid } from '@mui/material'
import React from 'react'
import ComplianceVerticalTabs from './compliance-management-tabs/ComplianceManagementTabs'
import { ComplianceVerticalTabsData } from '.'

const ComplianceManagement = () => {
  return (
    <Grid container spacing={0} mt={2.5}>
      <ComplianceVerticalTabs  />
    </Grid>
  )
}

export default ComplianceManagement