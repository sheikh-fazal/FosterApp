import { Box } from '@mui/material'
import VericalTabs from "@root/components/VericalTabs";
import React from 'react'
import { registerLocalAuthorityTabs } from '.';
import LaBasicInformation from './la-basic-information/LaBasicInformation';
import AddLaEmployee from './add-la-employee/AddLaEmployee';
import SingleChildDataExchange from './single-child-data-exchange/SingleChildDataExchange';
import SecureChildrenDataExchange from './secure-children-data-exchange/SecureChildrenDataExchange';
import LaBankDetails from './la-bank-details/LaBankDetails';
import LaPoliciesAgreement from './la-policies-agreement/LaPoliciesAgreement';
import AnyOtherDocument from './any-other-document/AnyOtherDocument';
import MeetingRecording from './meeting-recording/MeetingRecording';
import LaSocialMedia from './la-social-media/LaSocialMedia';

const RegisterNewLocalAuthority = () => {
    return (
        <Box >
            <VericalTabs tabsDataArray={registerLocalAuthorityTabs} >
                <LaBasicInformation />
                <AddLaEmployee />
                <SingleChildDataExchange />
                <SecureChildrenDataExchange />
                <LaBankDetails />
                <LaPoliciesAgreement />
                <AnyOtherDocument />
                <MeetingRecording />
                <LaSocialMedia />
            </VericalTabs>
        </Box>
    )
}

export default RegisterNewLocalAuthority