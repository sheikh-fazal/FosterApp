import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import PlacementChecklist from "@root/sections/placement/placement-checklist/PlacementChecklist";

const PAGE_TILE = "Placement Checklist";

PlacementChecklistPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Dashboard",
                    href: "/",
                },
                {
                    name: "Placement Checklist",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function PlacementChecklistPage() {
    return (
        <Page title={PAGE_TILE}>
            <PlacementChecklist />
        </Page>
    );
}

