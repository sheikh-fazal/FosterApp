import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Card } from "@mui/material";
import Page from "@root/components/Page";
// import UserManagment from "@root/sections/system-admin/user-managment/UserManagment";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "User Management",
    href: "",
  },
];

const PAGE_TITLE = "User Management";
UserManagement.getLayout = function getLayout(page: any) {
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
export default function UserManagement() {
  return (
    <Page title={PAGE_TITLE}>
      {/* <UserManagment /> */}
    </Page>
  );
}
