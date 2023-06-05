import CustomHorizaontalTab from '@root/components/customTabs'
import React from 'react'
import { uploadDocumentData } from '.'
import UploadDocumentModal from '@root/components/modal/UploadDocumentModal/UploadDocumentModal'
import DeleteModel from '@root/components/modal/DeleteModel'
import { useChecklistPoliciesTabs } from './useChecklistPoliciesTabs'
import PolicyVerticalAddNew from '@root/components/policy-vertical-tabs/policy-vertical-form/policy-vertical-add-form/PolicyVerticalAddForm'
import PolicyVerticalUploadDocument from '@root/components/policy-vertical-tabs/policy-vertical-form/PolicyVerticalUploadDocument'

const ChecklistPoliciesTabs = () => {
   const { currentTab, setCurrentTab, handlePreviousTab, isUploadDocumentOpenModal, isDeleteOpenModal, setCount, handleSubmit, handleUploadedSubmit, handleAction, setIsUploadDocumentOpenModal,setIsDeleteOpenModal, count, route } = useChecklistPoliciesTabs();
   
    return (
        <>
            <CustomHorizaontalTab tabsArray={[`${route.query.name}`, "Upload document"]} currentTab={currentTab} setCurrentTab={setCurrentTab} isDisabled={true}>
                <PolicyVerticalAddNew onSubmit={handleSubmit} handleAddNewBack={'/policies-and-guidelines/checklists'} />

                <PolicyVerticalUploadDocument data={uploadDocumentData} addUploadDocument={() => setIsUploadDocumentOpenModal(true)} handleSubmit={handleUploadedSubmit} isUploadBackBtn={count === 1 && true} handleBackBtn={() => handlePreviousTab()} handleAction={handleAction} />
            </CustomHorizaontalTab>

            <UploadDocumentModal open={isUploadDocumentOpenModal} handleClose={() => setIsUploadDocumentOpenModal(false)} isHideSubmitButton={true} onSubmit={() => { setIsUploadDocumentOpenModal(false); setCount(1) }} />

            <DeleteModel open={isDeleteOpenModal} handleClose={() => setIsDeleteOpenModal(false)} />
        </>
    )
}

export default ChecklistPoliciesTabs