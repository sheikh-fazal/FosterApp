import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import ViewAllAdvocacy from "@root/sections/carer-advocacy/carer-advocacy-dashboard/view-all-advocacy/ViewAllAdvocacy";

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
          name: "Carer Advocacy",
          href: "/",
        },
        {
          name: "All",
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
      <ViewAllAdvocacy />
    </Page>
  );
}
