import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import PlacementMeetingRecord from "@root/sections/placement/placement-meeting-record/PlacementMeetingRecord";

const PAGE_TILE = "Placement Meeting Record";

PlacementMeetingRecordPage.getLayout = function getLayout(page: any) {
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
                    name: "Placement Meeting Record List",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function PlacementMeetingRecordPage() {
    return (
        <Page title={PAGE_TILE}>
            <PlacementMeetingRecord />
        </Page>
    );
}

