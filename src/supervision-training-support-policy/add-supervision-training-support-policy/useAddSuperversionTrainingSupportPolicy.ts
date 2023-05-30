import React,{useState} from 'react'

export const useAddSuperversionTrainingSupportPolicy = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);
  return {
    currentTab,
    setCurrentTab,
    handleNextTab,
    handlePreviousTab,
  }
}
