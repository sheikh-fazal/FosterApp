import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";

const PAGE_TITLE = "Marketing Plan Meetings";

MarketingPlanMeetingLayout.getLayout = function getLayout(page: any) {
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
          name: "Merketing",
          href: "/marketing",
        },
        {
          name: "marketing",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function MarketingPlanMeetingLayout() {
  return <Page title={PAGE_TITLE}></Page>;
}
