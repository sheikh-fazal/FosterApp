import CustomHorizaontalTab from '@root/components/customTabs';
import React from 'react'
import SuperversionTrainingSupportPolicyForm from './supervision-training-support-policy-form/SuperversionTrainingSupportPolicyForm';
import UploadDocumentTable from './upload-document/UploadDocumentTable';
import { useAddSuperversionTrainingSupportPolicy } from './useAddSuperversionTrainingSupportPolicy';
import { useRouter } from 'next/router';

const tabsArray = [
    "Supervision Training Support Policy",
    "Upload document",
  ];
const AddSuperversionTrainingSupportPolicy = () => {
    const { currentTab,
        setCurrentTab,
        handleNextTab,
        handlePreviousTab} = useAddSuperversionTrainingSupportPolicy();
        const { query } = useRouter();
        let disabled = query.action === "view" ? true : false;
  return (
 
    <CustomHorizaontalTab  tabsArray={tabsArray}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}>
      <SuperversionTrainingSupportPolicyForm  disabled={disabled}    handleNextBtn={handleNextTab} /> 
      <UploadDocumentTable  disabled={disabled}   handlePreviousBtn={handlePreviousTab}/>
    </CustomHorizaontalTab>
   
  )
}

export default AddSuperversionTrainingSupportPolicy