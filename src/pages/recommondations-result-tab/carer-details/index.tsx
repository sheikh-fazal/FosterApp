import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import { SafeguardingAssessmentAddForm, SafeguardingAssessmentForm } from '@root/sections/safeguarding/safeguarding-tools/safeguarding-assessment-tool/safeguarding-assessment-add-form';
import ChildDetailsForm from '@root/sections/recommondation-results/child-details/ChildDetailsForm';
// import SafeguardingAssessmentAddForm from '@root/sections/safeguarding/safeguarding-tools/safeguarding-assessment-tool/safeguarding-assessment-add-form';

const PAGE_TITLE = "Child Details";

ChildDetails.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "IFA",
                    href: "/recommondations-result-tab",
                },
                {
                    name: "Matching",
                },
            ]}
            title={PAGE_TITLE}
        >
            {page}
        </Layout>
    );
};

export default function ChildDetails() {
    return (
        //  <SafeguardingAssessmentAddForm/>
        <Page title={PAGE_TITLE}>
            <Box>
                <ChildDetailsForm disabled />
            </Box>

        </Page>
    );
}