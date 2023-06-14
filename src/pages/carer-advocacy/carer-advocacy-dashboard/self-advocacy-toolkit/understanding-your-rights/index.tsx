import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import UnderstandingRights from "@root/sections/carer-advocacy/carer-advocacy-dashboard/self-advocacy-toolkit/understanding-rights/UnderstandingRights";

const PAGE_TILE = "Understanding Your Rights";

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
          name: "Carer Advocacy",
          href: "/",
        },
        {
          name: "Carer’s Self Advocacy Toolkit",
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
      <UnderstandingRights />
    </Page>
  );
}
