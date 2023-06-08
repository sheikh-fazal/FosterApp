import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";

const PAGE_TITLE = "Reports";

RecordCriticalIncidentsLayout.getLayout = function getLayout(page: any) {
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
          name: "Carer Reports",
          href: "/reports",
        },
        {
          name: "Foster Carer Record of Critical Incidents Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function RecordCriticalIncidentsLayout() {
  return (
    <Page title={PAGE_TITLE}>
     
    </Page>
  );
}
