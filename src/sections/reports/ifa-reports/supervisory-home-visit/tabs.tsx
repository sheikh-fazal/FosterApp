import HorizaontalTabs from '@root/components/HorizaontalTabs'
import React from 'react'
import SuperVisoryCarerSectionA from './carer-section-A/CarerSectionA'
import SuperVisoryCarerSectionB from './carer-section-B/CarerSectionB'
import SupervisoryUploadDocuments from './upload-documents/UploadDoucment'

const TabsSection = () => {
  return (
    <HorizaontalTabs
      tabsDataArray={[
        "Carer Section A",
        "Carer Section B",
        "Upload Documents",
      ]}
    >
      <SuperVisoryCarerSectionA disabled={true} />
      <SuperVisoryCarerSectionB disabled={true} />
      <SupervisoryUploadDocuments />
    </HorizaontalTabs>
  )
}

export default TabsSection