import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';


const PAGE_TITLE = "De-Registration";

InitialRequestForm.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "De-reg Initial Request",
                    href: "/de-registration/deregister-foster-carer",
                },
                {
                    name: "Initial Request Form",
                },
            ]}
            title={PAGE_TITLE}
        >
            {page}
        </Layout>
    );
};

export default function InitialRequestForm() {
    return (
        <Page title={PAGE_TITLE}>
            {/* <AgencyPolicyAgreements /> */}
        </Page>
    );
}