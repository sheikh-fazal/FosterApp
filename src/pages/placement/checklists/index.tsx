import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";

const PAGE_TILE = "Placement Checklists";

PlacementModule.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/placement",
        },
        {
          name: "Placement Checklists",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function PlacementModule() {
  return (
    <Page title={PAGE_TILE}>
      {PAGE_TILE}
    </Page>
  );
}
