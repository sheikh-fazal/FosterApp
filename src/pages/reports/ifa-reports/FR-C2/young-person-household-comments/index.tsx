import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import YoungPersonLivingComments from "@root/sections/reports/ifa-reports/FR-C2/young-person-living-comments/YoungPersonLivingComments";

const PAGE_TITLE = "Reports";

FRC2.getLayout = function getLayout(page: any) {
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
          name: "Reports",
          href: "/reports",
        },
        {
          name: "IFA Reports",
          href: "/reports",
        },
        {
          name:"FR-C2 YOUNG PERSON LIVING IN THE HOUSEHOLD’S COMMENTS"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRC2() {
  return (
    <Page title={PAGE_TITLE}>
      <YoungPersonLivingComments />
    </Page>
  );
}
