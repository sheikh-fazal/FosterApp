import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Card } from "@mui/material";
import Page from "@root/components/Page";
import AreaOfficeSetup from "@root/sections/system-admin/area-office-setup/AreaOfficeSetup";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Area Office Setup",
    href: "",
  },
];

const PAGE_TITLE = "Area Office Setup";
AreaOfficeSetups.getLayout = function getLayout(page: any) {
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
export default function AreaOfficeSetups() {
  return (
    <Page title={PAGE_TITLE}>
      <AreaOfficeSetup />
    </Page>
  );
}
