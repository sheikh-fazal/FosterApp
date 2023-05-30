import PolicyVerticalAddNew from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/PolicyVerticalAddNew';
import PolicyVerticalUploadDocument from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalUploadDocument';
import CustomHorizaontalTab from '@root/components/customTabs';
import { uploadDocumentData } from '.'
import React from 'react'
// import { usePolicyVerticalAddNew } from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/usePolicyVerticalAddNew';
import UploadDocumentModal from '@root/components/modal/UploadDocumentModal/UploadDocumentModal';
import DeleteModel from '@root/components/modal/DeleteModel';
import { useHandbookPoliciesTabs } from './useHandbookPoliciesTabs';

const HandbookPoliciesTabs = () => {
    const { currentTab, setCurrentTab, handlePreviousTab, isUploadDocumentOpenModal, isDeleteOpenModal, setCount, handleSubmit, handleUploadedSubmit, handleAction, setIsUploadDocumentOpenModal, setIsDeleteOpenModal, count } = useHandbookPoliciesTabs();
    return (
        <>
            <CustomHorizaontalTab tabsArray={["Add New Handbook", "Upload document"]} currentTab={currentTab} setCurrentTab={setCurrentTab} isDisabled={true}>
                <PolicyVerticalAddNew onSubmit={handleSubmit} handleAddNewBack={'/policies-and-guidelines/organisational-policies/'} />
                <PolicyVerticalUploadDocument data={uploadDocumentData} addUploadDocument={() => setIsUploadDocumentOpenModal(true)} handleSubmit={handleUploadedSubmit} isUploadBackBtn={count === 1 && true} handleBackBtn={() => handlePreviousTab()} handleAction={handleAction} />
            </CustomHorizaontalTab>

            <UploadDocumentModal open={isUploadDocumentOpenModal} handleClose={() => setIsUploadDocumentOpenModal(false)} isHideSubmitButton={true} onSubmit={() => { setIsUploadDocumentOpenModal(false); setCount(1) }} />
            <DeleteModel open={isDeleteOpenModal} handleClose={() => setIsDeleteOpenModal(false)} />
        </>
    )
}

export default HandbookPoliciesTabs