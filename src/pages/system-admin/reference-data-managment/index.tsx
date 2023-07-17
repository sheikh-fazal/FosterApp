import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Card } from "@mui/material";
import Page from "@root/components/Page";
import DataManagments from "@root/sections/system-admin/reference-data-managment/DataManagment";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Reference Data Managment",
    href: "",
  },
];

const PAGE_TITLE = "Reference Data Managment";
DataManagment.getLayout = function getLayout(page: any) {
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
export default function DataManagment() {
  return (
    <Page title={PAGE_TITLE}>
      <DataManagments />
    </Page>
  );
}
