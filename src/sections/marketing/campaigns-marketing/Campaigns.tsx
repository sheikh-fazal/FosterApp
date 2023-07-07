import React from 'react'
import { useCampaigns } from './useCampaigns'
import CustomHorizaontalTab from '@root/components/customTabs'
import CampaignsTable from './campaigns-table/CampaignsTable'
import AllSetTable from './all-sets-table/AllSetTable'
import ResultsTable from './results-table/ResultsTable'

const Campaigns = () => {
    const {currentTab , handleTabChange} = useCampaigns()
    return (
      <CustomHorizaontalTab
      currentTab={currentTab}
      setCurrentTab={handleTabChange}
      tabsArray={["Campaigns", "Ad Sets", "Results",]}
    >
      {/* <Editorial/>
      <Personas/>
      <Verticals/>
      <ContentIdeas/>
      <Published/> */}
      <CampaignsTable/>
      <AllSetTable/>
      <ResultsTable/>
    </CustomHorizaontalTab>
    )
}

export default Campaigns