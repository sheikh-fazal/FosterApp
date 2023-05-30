import React, { useState } from 'react';
import PolicyVerticalTable from '@root/components/PolicyVerticalTabs/PolicyVerticalTable'
import { OrganisationalPoliciesData } from '.';
import PolicyVerticalUploadDocument from '@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalUploadDocument';

const OrganisationalPolicies = () => {
    return (
        <>
            <PolicyVerticalTable data={OrganisationalPoliciesData} addNewTabNavigation={'/policies-and-guidelines/organisational-policies/add'}  />
        </>
    )
}

export default OrganisationalPolicies