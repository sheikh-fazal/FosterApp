import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildMissingPlacements from "@root/sections/reports/child-reports/child-missing-placements/ChildMissingPlacements";

const PAGE_TITLE = "Reports";

ChildMissingPlacementLayout.getLayout = function getLayout(page: any) {
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
          name: "Reports",
          href: "/reports",
        },
        {
          name: "Child Reports",
          href: "/reports",
        },
        {
          name: "Child Missing Placements Report",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function ChildMissingPlacementLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildMissingPlacements />
    </Page>
  );
}
