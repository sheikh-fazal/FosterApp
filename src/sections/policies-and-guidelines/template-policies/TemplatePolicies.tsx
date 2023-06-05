import React from 'react';
import { TemplatePoliciesData } from '.';
import PolicyVerticalTable from '@root/components/policy-vertical-tabs/PolicyVerticalTable';

const TemplatePolicies = () => {
    return (
        <PolicyVerticalTable data={TemplatePoliciesData} addNewTabNavigation={'/policies-and-guidelines/templates/add'} />
    )
}

export default TemplatePolicies