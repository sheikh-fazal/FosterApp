import React from 'react';
import PolicyVerticalTable from '@root/components/PolicyVerticalTabs/PolicyVerticalTable'
import { ChecklistsPoliciesData } from '.';

const ChecklistPolicies = () => {
    return (
        <>
            <PolicyVerticalTable data={ChecklistsPoliciesData} addNewTabNavigation={'/policies-and-guidelines/checklists/add'}  />
        </>
    )
}

export default ChecklistPolicies