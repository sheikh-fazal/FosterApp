import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import UserLogHistoryReport from "@root/sections/reports/ifa-reports/user-log-history-report/UserLogHistoryReport";

const PAGE_TITLE = "Reports";

UnannouncedHomeVisitLayout.getLayout = function getLayout(page: any) {
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
          name: "User Log History Report",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function UnannouncedHomeVisitLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <UserLogHistoryReport />
    </Page>
  );
}
