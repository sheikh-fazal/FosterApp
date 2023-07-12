import React from 'react'
import HorizaontalTabs from '@root/components/HorizaontalTabs'
import PersonalInfo from './personal-info/PersonalInfo'
import ApprovedDetails from './approved-details/ApprovedDetails'
import UploadDocument from './social-worker-upload-document/UploadDocument'

const AddSocialWorkerForm = ({action}:any) => {
  return (
    <HorizaontalTabs
        tabsDataArray={[
          "Personal Info",
          "Approved Details",
          "Upload Documents"
        ]}
      >
        <PersonalInfo  message="Added"  action={action}/>
        <ApprovedDetails  message="Added" action={action} />
        <UploadDocument />
      </HorizaontalTabs>
  )
}

export default AddSocialWorkerForm
