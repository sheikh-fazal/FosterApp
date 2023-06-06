import React from 'react'
import CustomHorizaontalTab from '@root/components/customTabs';
import PersonalInfoForm from './personal-info-form/PersonalInfoForm';
import LADetailsForm from './la-details-form/LADetailsForm';
import UploadDocumentTable from './upload-documents/UploadDocumentsTable';
import useAddFosterChildRequestForm from './useAddFosterChildRequestForm';

const AddFosterChildRequestForm = () => {
  const { currentTab,setCurrentTab,
    handleNextTab,handlePreviousTab,tabsArray}= useAddFosterChildRequestForm();
  return (
    <CustomHorizaontalTab  tabsArray={tabsArray}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}>
      <PersonalInfoForm   handleNextBtn={handleNextTab}/>
      <LADetailsForm   handlePreviousBtn={handlePreviousTab}/>
      <UploadDocumentTable />
    </CustomHorizaontalTab>
  )
}

export default AddFosterChildRequestForm
