import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import SecondOpinin from "@root/sections/reports/carer-report/second-opinion/SecondOpinin";

const PAGE_TITLE = "Reports";

SecondOpinionLayout.getLayout = function getLayout(page: any) {
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
          name: "Second Opinion Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function SecondOpinionLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <SecondOpinin/>
    </Page>
  );
}
