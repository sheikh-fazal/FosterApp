import { Grid } from '@mui/material'
import React from 'react'
import useComplianceMangement from './useComplianceMangement'
import ComplianceVerticalTabs from './compliance-management-tabs/ComplianceVerticalTabs'
import ComplianceHorizontalTabs from './compliance-management-tabs/ComplianceHorizontalTabs'
import VericalTabs from '@root/components/VericalTabs'
import ComplinceNew from './complince-new'

const ComplianceManagement = () => {
  const {
    tabsArray,
    verticalTab,
    horizontalTabValue,
    SelectedTabColor,
    handleTabChange,
    handleHorizontalTabChange,
    IsOpenPdfModal,
    setIsOpenPdfModal,
    IsOpenAddCategory,
    setIsOpenAddCategory,
    handleAddCategory,
    theme,
  } = useComplianceMangement();
  return (

    <ComplinceNew />
  )
}

export default ComplianceManagement


{/* <VericalTabs tabsDataArray={[{
        title:"title 1",
      }]} >
        <p style={{color:'#000'}}>gyhfg</p>
      </VericalTabs>
      <Grid xl={3}>
      <ComplianceVerticalTabs  
       tabsArray={tabsArray}
       verticalTab={verticalTab}
       SelectedTabColor={SelectedTabColor}
       handleTabChange={handleTabChange}
       IsOpenAddCategory={IsOpenAddCategory}
       setIsOpenAddCategory={setIsOpenAddCategory}
       handleAddCategory={handleAddCategory}
      />
    </Grid>
    <Grid xl={9}>
       <ComplianceHorizontalTabs
        tabsArray={tabsArray}
        verticalTab={verticalTab}
        horizontalTabValue={horizontalTabValue}
        SelectedTabColor={SelectedTabColor}
        handleHorizontalTabChange={handleHorizontalTabChange}
        IsOpenPdfModal={ IsOpenPdfModal}
        setIsOpenPdfModal={setIsOpenPdfModal}
        handleAddCategory={handleAddCategory}
        IsOpenAddCategory={IsOpenAddCategory}
        setIsOpenAddCategory={setIsOpenAddCategory}
        theme={theme}
      />
    </Grid> */}