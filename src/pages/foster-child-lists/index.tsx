import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { FosterCarerListTable } from "@root/sections/foster-carer";
import FosterChildListTable from "@root/sections/foster-child-list/FosterChildListTable";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "ChildList",
    href: "/foster-child-list",
  },
  {
    name: "Dashboard",
    href: "/foster-child",
  },
  {
    name: "ChildList info list",
    href: "",
  },
];
const PAGE_TITLE = "ChildList";
// ----------------------------------------------------------------------

FosterChildLists.getLayout = function getLayout(page: any) {
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

// ----------------------------------------------------------------------

export default function FosterChildLists() {
  return (
    <Box>
      <FosterChildListTable />
    </Box>
  );
}
