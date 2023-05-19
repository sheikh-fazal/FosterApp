import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import PanelChair from "@root/sections/panel/panel-chair/PanelChair";

// =======================================================================================

const PAGE_TILE = "View Panel Dashboard";

Chair.getLayout = function getLayout(page: any) {
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

export default function Chair() {
  return (
    <Page title={PAGE_TILE}>
      <PanelChair />
    </Page>
  );
}
