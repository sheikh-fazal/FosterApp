import React,{useState} from 'react'

const useAddFosterChildRequestForm = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const handleNextTab = () => setCurrentTab(currentTab + 1);
    const handlePreviousTab = () => setCurrentTab(currentTab - 1);
    const tabsArray = [
      "Personal Info",
      "LA-Details",
      "Upload Documents",
    ];
  return {
    currentTab,setCurrentTab,
    handleNextTab,handlePreviousTab,tabsArray
  }
}

export default useAddFosterChildRequestForm