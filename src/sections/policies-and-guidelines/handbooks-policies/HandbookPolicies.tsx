import PolicyVerticalTable from '@root/components/PolicyVerticalTabs/PolicyVerticalTable'
import { HandbookPoliciesData } from '.';
import React from 'react'

const HandbookPolicies = () => {
    return (
        <>
            <PolicyVerticalTable data={HandbookPoliciesData} addNewTabNavigation={'/policies-and-guidelines/handbooks/add'} />
        </>
    )
}

export default HandbookPolicies