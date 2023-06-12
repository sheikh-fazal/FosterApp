import CustomHorizaontalTab from '@root/components/customTabs';
import React from 'react'
import useComplianceHorizontalTabs from './useComplianceHorizontalTabs';
import { ComplianceVerticalTabsData } from '../..';

const ComplianceHorizontalTabs = () => {
    const { currentTab,setCurrentTab}= useComplianceHorizontalTabs();
   
  return (
    <CustomHorizaontalTab  tabsArray={ComplianceVerticalTabsData[currentTab]?.innerData?.map((item) => item.tabTitle)}
    currentTab={currentTab}
    setCurrentTab={setCurrentTab}>
     {ComplianceVerticalTabsData[currentTab]?.innerData?.map((item) => (
        <h1 key={item.id}>{item.tabTitle}</h1>
      ))}
  </CustomHorizaontalTab>
  )
}

export default ComplianceHorizontalTabs