import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ViewCarerFeedBackForm from "@root/sections/reports/ifa-reports/carer-feedback/view-carer-feedback/ViewCarerFeedBack";
import { Card } from "@mui/material";

const PAGE_TITLE = "Reports";

RiskAssessment.getLayout = function getLayout(page: any) {
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
          name: "CARER FEEDBACK FOR EMPLOYEES APRAISAL",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function RiskAssessment() {
  return (
    <Page title={PAGE_TITLE}>
        <ViewCarerFeedBackForm disabled={true} />
    </Page>
  );
}
