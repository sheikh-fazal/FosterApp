import { Box, Checkbox, useTheme } from '@mui/material';
import CustomAccordian from '@root/components/CustomAccordian';
import ChecklistPolicyTable from './ChecklistPolicyTable';
import React from 'react';
import { GDPRChecklistData, JobDescriptionData } from '.';

const ChecklistPolicy = () => {
    
    const ChecklistAccordianData = [
        {
            title: 'Appendix A ( GDPR CHECKLIST )',
            component: <ChecklistPolicyTable tableData={GDPRChecklistData} />,
        },
        {
            title: 'Appendix B ( Job Description of Data Protection officer  )',
            component: <ChecklistPolicyTable tableData={JobDescriptionData} />,
        },
        {
            title: 'Appendix C ( GDPR specific Privacy Notice  )',
            component: <ChecklistPolicyTable tableData={JobDescriptionData} />
        },
        {
            title: 'Appendix D ( Privacy Notice  for Foster Carer’s Network )',
            component: <ChecklistPolicyTable tableData={JobDescriptionData} />
        },
        {
            title: 'Appendix E ( Privacy Notice  - Letter to Personal Referee )',
            component: <ChecklistPolicyTable tableData={JobDescriptionData} />
        },
        {
            title: 'Appendix F ( Info to include in GDPR )',
            component: <ChecklistPolicyTable tableData={JobDescriptionData} />
        },
        {
            title: 'DPO and 6 Core Principles',
            component: <ChecklistPolicyTable tableData={JobDescriptionData} />
        },
        {
            title: 'Cyber Essentials',
            component: <ChecklistPolicyTable tableData={JobDescriptionData} />
        },
        {
            title: 'Cyber Essentials Checklist',
            component: <ChecklistPolicyTable tableData={JobDescriptionData} />
        },
    ];

    return (
        <>
            <CustomAccordian data={ChecklistAccordianData} />
        </>
    );
};

export default ChecklistPolicy;
