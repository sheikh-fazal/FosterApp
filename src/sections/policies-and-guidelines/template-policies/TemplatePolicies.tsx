import React from 'react';
import PolicyVerticalTable from '@root/components/PolicyVerticalTabs/PolicyVerticalTable'
import { TemplatePoliciesData } from '.';

const TemplatePolicies = () => {
    return (
        <PolicyVerticalTable data={TemplatePoliciesData} addNewTabNavigation={'/policies-and-guidelines/templates/add'} />
    )
}

export default TemplatePolicies