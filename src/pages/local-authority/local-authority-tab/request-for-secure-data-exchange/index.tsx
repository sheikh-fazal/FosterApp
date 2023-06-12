import React, { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, useTheme } from "@mui/material";
import RequestSecureDataExhange from "@root/sections/local-authority/request-for-secure-data-exchange/RequestSecureDataExhange";

const PAGE_TILE = "Secure Data Exchange";

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
                    name: "LADO",
                    href: "/local-authority",
                },
                {
                    name: "Secure Data Exchange",
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
                <RequestSecureDataExhange />
            </Card>
        </Page>
    );
}
