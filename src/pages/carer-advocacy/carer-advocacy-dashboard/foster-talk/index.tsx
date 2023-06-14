import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import FosterTalk from "@root/sections/carer-advocacy/carer-advocacy-dashboard/foster-talk/FosterTalk";

const PAGE_TILE = "Foster Talk";

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
          name: "Carer List",
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
     <FosterTalk />
    </Page>
  );
}
