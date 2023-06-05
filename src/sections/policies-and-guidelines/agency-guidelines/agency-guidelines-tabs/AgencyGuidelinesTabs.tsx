import PolicyVerticalAddNew from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/PolicyVerticalAddNew'
import PolicyVerticalUploadDocument from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalUploadDocument'
import CustomHorizaontalTab from '@root/components/customTabs'
import React from 'react'
import { uploadDocumentData } from '.'
import UploadDocumentModal from '@root/components/modal/UploadDocumentModal/UploadDocumentModal'
import DeleteModel from '@root/components/modal/DeleteModel'
import { useAgencyGuidelinesTabs } from './useAgencyGuidelinesTabs'

const AgencyGuidelinesTabs = () => {
   const { currentTab, setCurrentTab, handlePreviousTab, isUploadDocumentOpenModal, isDeleteOpenModal, setCount, handleSubmit, handleUploadedSubmit, handleAction, setIsUploadDocumentOpenModal,setIsDeleteOpenModal, count, route } = useAgencyGuidelinesTabs();

    return (
        <>
            <CustomHorizaontalTab tabsArray={[`${route.query.action === 'add' || route.query.action === 'view' ? route.query.name : 'Add New Policy'}`, "Upload document"]} currentTab={currentTab} setCurrentTab={setCurrentTab} isDisabled={true}>
                <PolicyVerticalAddNew onSubmit={handleSubmit} handleAddNewBack={'/policies-and-guidelines/agency-guidelines'} />

                <PolicyVerticalUploadDocument data={uploadDocumentData} addUploadDocument={() => setIsUploadDocumentOpenModal(true)} handleSubmit={handleUploadedSubmit} isUploadBackBtn={count === 1 && true} handleBackBtn={() => handlePreviousTab()} handleAction={handleAction} />
            </CustomHorizaontalTab>

            <UploadDocumentModal open={isUploadDocumentOpenModal} handleClose={() => setIsUploadDocumentOpenModal(false)} isHideSubmitButton={true} onSubmit={() => { setIsUploadDocumentOpenModal(false); setCount(1) }} />

            <DeleteModel open={isDeleteOpenModal} handleClose={() => setIsDeleteOpenModal(false)} />
        </>
    )
}

export default AgencyGuidelinesTabs