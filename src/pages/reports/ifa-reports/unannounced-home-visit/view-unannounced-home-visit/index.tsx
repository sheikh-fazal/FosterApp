import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import TabsSection from "@root/sections/reports/ifa-reports/unannounced-home-visit/tabs";

const PAGE_TITLE = "Report";

ViewUnannouncedHomeVisitLayout.getLayout = function getLayout(page: any) {
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
          name: "Unannounced Home Visit",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function ViewUnannouncedHomeVisitLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <TabsSection />
    </Page>
  );
}
