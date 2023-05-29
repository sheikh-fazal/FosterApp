import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import PolicyANdGuidline from "@root/sections/policy-and-guidlines/PolicyANdGuidline";

const PAGE_TILE = "Dashboard";

PolicyGuidLine.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Dashboard",
                    href: "/dashboard",
                },
                {
                    name: "Training",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function PolicyGuidLine() {

    return (
        <Page title={PAGE_TILE}>
            <PolicyANdGuidline />
        </Page>
    );
}
