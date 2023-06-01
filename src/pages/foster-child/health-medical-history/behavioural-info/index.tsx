import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import BehavioralInfoTable from "@root/sections/foster-child/health-medical-history/behavioral-info-list/behavioralInfoTable";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Behavioural Info list",
    href: "/carer-info/other-information/next-of-kin",
  },
  {
    name: "child Info",
    href: "/foster-child",
  },
  {
    name: "Behavioral Info list",
    href: "",
  },
];
const PAGE_TITLE = "Behavioural Info list";
// ----------------------------------------------------------------------

BehaviouralInfo.getLayout = function getLayout(page: any) {
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

export default function BehaviouralInfo() {
  return (
    <Box>
      <BehavioralInfoTable />
    </Box>
  );
}
