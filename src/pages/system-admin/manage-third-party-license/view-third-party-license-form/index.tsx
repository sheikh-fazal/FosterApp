import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Card } from "@mui/material";
import Page from "@root/components/Page";
import ThirdPartyLicenceTableForm from "@root/sections/system-admin/manage-third-party-license/third-party-licence-table/third-party-licence-table-form/ThirdPartyLicenceTableForm";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Manage Third Party License",
    href: "",
  },
];

const PAGE_TITLE = "View Manage Third Party License";
ManageThirdParty.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
export default function ManageThirdParty() {
  return (
    <Page title={PAGE_TITLE}>
      <ThirdPartyLicenceTableForm disabled />
    </Page>
  );
}
