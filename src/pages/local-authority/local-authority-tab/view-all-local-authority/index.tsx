import React, { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, useTheme } from "@mui/material";
import ViewAllLocalAuthority from "@root/sections/local-authority/view-all-local-authority/ViewAllLocalAuthority";

const PAGE_TILE = "Referral List";

const dynamicTitle = (pageTitle: any) => {
    console.log("pageTitle", pageTitle);
};

ReferralList.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Referral",
                    href: "/local-authority",
                },
                {
                    name: "",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function ReferralList() {
    return (
        <Page title={PAGE_TILE}>
            <Card sx={{ p: 2 }}>
                <ViewAllLocalAuthority />
            </Card>
        </Page>
    );
}
