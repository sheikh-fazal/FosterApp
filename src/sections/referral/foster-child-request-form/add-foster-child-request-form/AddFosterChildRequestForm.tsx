import React from 'react'
import CustomHorizaontalTab from '@root/components/customTabs';
import PersonalInfoForm from './personal-info-form/PersonalInfoForm';
import LADetailsForm from './la-details-form/LADetailsForm';
import UploadDocumentTable from './upload-documents/UploadDocumentsTable';
import useAddFosterChildRequestForm from './useAddFosterChildRequestForm';
import { useRouter } from 'next/router';

const AddFosterChildRequestForm = () => {
  const { currentTab,setCurrentTab,
    handleNextTab,handlePreviousTab,tabsArray, query,disabled}= useAddFosterChildRequestForm();
   
  return (
    <CustomHorizaontalTab tabsArray={tabsArray}
    currentTab={currentTab}
    setCurrentTab={setCurrentTab}>
    <PersonalInfoForm disabled={disabled} handleNextBtn={handleNextTab} />
    <LADetailsForm disabled={disabled} handlePreviousBtn={handlePreviousTab} />
    <UploadDocumentTable disabled={disabled} />
  </CustomHorizaontalTab>
  )
}

export default AddFosterChildRequestForm
