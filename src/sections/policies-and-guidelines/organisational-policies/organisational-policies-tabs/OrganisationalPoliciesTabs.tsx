import PolicyVerticalAddNew from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/PolicyVerticalAddNew'
import { usePolicyVerticalAddNew } from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/usePolicyVerticalAddNew'
import PolicyVerticalUploadDocument from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalUploadDocument'
import CustomHorizaontalTab from '@root/components/customTabs'
import React, { useState } from 'react'
import { uploadDocumentData } from '.'
import UploadDocumentModal from '@root/components/modal/UploadDocumentModal/UploadDocumentModal'
import { useRouter } from 'next/router'

const OrganisationalPoliciesTabs = () => {
    const { currentTab, setCurrentTab, handleNextTab } = usePolicyVerticalAddNew();
    const [isUploadDocumentOpenModal, setIsUploadDocumentOpenModal] = useState(false);
    const [count, setCount] = useState(0);
    const navgiate = useRouter();

    const handleSubmit = (data: any) => {
        setCount(0)
        handleNextTab();
    }

    const handleUploadedSubmit = () => {
        if(count === 1) {
            navgiate.push('/policies-and-guidelines/organisational-policies/');
        } else {
            setIsUploadDocumentOpenModal(true);
        }
      };

    return (
        <>
            <CustomHorizaontalTab tabsArray={["Add New Policy", "Upload document"]} currentTab={currentTab} setCurrentTab={setCurrentTab} >
                <PolicyVerticalAddNew onSubmit={handleSubmit} handleAddNewBack={'/policies-and-guidelines/organisational-policies/'} />
                <PolicyVerticalUploadDocument data={uploadDocumentData} addUploadDocument={() => setIsUploadDocumentOpenModal(true)} handleSubmit={handleUploadedSubmit} />
            </CustomHorizaontalTab>
            <UploadDocumentModal open={isUploadDocumentOpenModal} handleClose={() => setIsUploadDocumentOpenModal(false)} isHideSubmitButton={true} onSubmit={() => setIsUploadDocumentOpenModal(false)} />
        </>
    )
}

export default OrganisationalPoliciesTabs