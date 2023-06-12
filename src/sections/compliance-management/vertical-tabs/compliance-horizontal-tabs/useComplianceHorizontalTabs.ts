import React, { useState } from 'react'

const useComplianceHorizontalTabs = () => {
    const [currentTab, setCurrentTab] = useState(0);
   
     
  return {
    currentTab,setCurrentTab,
  }
}

export default useComplianceHorizontalTabs