import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import HouseholdComments from "@root/sections/reports/FR-C1/household-comments/HouseholdComments";
const PAGE_TITLE = "Reports";

FRC1.getLayout = function getLayout(page: any) {
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
        },
        {
          name: "IFA Reports"
        },
        {
          name: "FR-C1 CHILD LIVING IN THE HOUSEHOLD’S COMMENTS"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRC1() {
  return (
    <Page title={PAGE_TITLE}>
      <HouseholdComments />
    </Page>
  );
}
