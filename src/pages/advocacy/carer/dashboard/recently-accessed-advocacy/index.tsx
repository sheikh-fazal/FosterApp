import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import RecentlyAccessedAdvocacy from "@root/sections/advocacy/carer-advocacy/carer-advocacy-dashboard/recently-accessed-advocacy/RecentlyAccessedAdvocacy";

const PAGE_TILE = "View all Advocacy";

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
          name: "carer Advocacy",
          href: "/",
        },
        {
          name: "all",
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
      <RecentlyAccessedAdvocacy />
    </Page>
  );
}
