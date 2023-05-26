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
const AddSuperversionTrainingSupportPolicy = (props:any) => {
    const { currentTab,
        setCurrentTab,
        handleNextTab,isFormDisabled,setIsFormDisabled,
        handlePreviousTab} = useAddSuperversionTrainingSupportPolicy();
      
  return (
    <>
    <CustomHorizaontalTab  tabsArray={tabsArray}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}>
      <SuperversionTrainingSupportPolicyForm disabled={props.disabled}    handleNextBtn={handleNextTab} /> 
      <UploadDocumentTable    handlePreviousBtn={handlePreviousTab}/>
    </CustomHorizaontalTab>
    </>
  )
}

export default AddSuperversionTrainingSupportPolicy