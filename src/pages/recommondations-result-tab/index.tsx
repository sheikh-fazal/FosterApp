import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import RecommondationResults from "@root/sections/recommondation-results/RecommondationResults";

const PAGE_TILE = "View Panel Dashboard";

Panel.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Panel",
                    href: "/",
                },
                {
                    name: "Panel Dashboard",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function Panel() {
    return (
        <Page title={PAGE_TILE}>
            <RecommondationResults />
        </Page>
    );
}

