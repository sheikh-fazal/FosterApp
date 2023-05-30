import PolicyVerticalAddNew from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/PolicyVerticalAddNew';
import PolicyVerticalUploadDocument from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalUploadDocument';
import CustomHorizaontalTab from '@root/components/customTabs';
import { uploadDocumentData } from '.'
import React from 'react'
import { usePolicyVerticalAddNew } from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/usePolicyVerticalAddNew';

const HandbookPoliciesTabs = () => {
    const { currentTab, setCurrentTab } = usePolicyVerticalAddNew();
    return (
        <CustomHorizaontalTab tabsArray={["Add New Handbook", "Upload document"]} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            <PolicyVerticalAddNew />
            <PolicyVerticalUploadDocument data={uploadDocumentData} />
        </CustomHorizaontalTab>
    )
}

export default HandbookPoliciesTabs