import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import CarerAdvocacy from "@root/sections/carer-advocacy/CarerAdvocacy";

const PAGE_TILE = "Carer List";

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
          name: "Dashboard",
          href: "/",
        },
        {
          name: "Advocacy",
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
      <CarerAdvocacy />
    </Page>
  );
}
