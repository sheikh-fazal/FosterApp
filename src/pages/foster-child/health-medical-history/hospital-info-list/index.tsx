import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import HospitalInfoListTable from "@root/sections/foster-child/health-medical-history/hospitalInfoList/hospitalInfoListTable";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Hospital info List",
    href: "/carer-info/other-information/next-of-kin",
  },
  {
    name: "child Info",
    href: "/foster-child",
  },
  {
    name: "Hospital info List",
    href: "",
  },
];
const PAGE_TITLE = "Hospital info List";
// ----------------------------------------------------------------------

HospitalInfoList.getLayout = function getLayout(page: any) {
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

export default function HospitalInfoList() {
  return (
    <Box>
      <HospitalInfoListTable />
    </Box>
  );
}
