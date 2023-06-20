import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ComplianceManagement from "@root/sections/compliance-management/ComplianceManagement";


const PAGE_TILE = "Compliance Management";

Compliance.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "System Admin",
          href: "/dashboard",
        },
        {
          name: "Compliance Management List",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Compliance() {
  return (
    <Page title={PAGE_TILE}>
      <ComplianceManagement />
    </Page>
  );
}
