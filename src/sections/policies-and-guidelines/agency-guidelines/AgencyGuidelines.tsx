import React, { useState } from 'react';
import PolicyVerticalTable from '@root/components/PolicyVerticalTabs/PolicyVerticalTable'
import { OrganisationalPoliciesData } from '.';
import PolicyVerticalUploadDocument from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalUploadDocument';

const AgencyGuidelines = () => {
    return (
        <>
            <PolicyVerticalTable data={OrganisationalPoliciesData} addNewTabNavigation={'/policies-and-guidelines/agency-guidelines/add'}  />
        </>
    )
}

export default AgencyGuidelines