import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import SelfAdvocacyToolkit from "@root/sections/carer-advocacy/carer-advocacy-dashboard/self-advocacy-toolkit/SelfAdvocacyToolkit";

const PAGE_TILE = "Carer’s Self Advocacy Toolkit";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          href: "/",
        },
        {
          name: "Advocacy Dashboard",
          href: "/",
        },
        {
          name: "Carer Advocacy",
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
      <SelfAdvocacyToolkit />
    </Page>
  );
}
