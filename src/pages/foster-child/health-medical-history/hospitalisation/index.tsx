import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import HospitalizationTable from "@root/sections/foster-child/health-medical-history/hospitalization/hospitalizationTable";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Hospitalization",
    href: "/carer-info/other-information/next-of-kin",
  },
  {
    name: "child Info",
    href: "/foster-child",
  },
  {
    name: "Hospitalization info list",
    href: "",
  },
];
const PAGE_TITLE = "Hospitalization";
// ----------------------------------------------------------------------

Hospitalization.getLayout = function getLayout(page: any) {
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

export default function Hospitalization() {
  return (
    <Box>
      <HospitalizationTable />
    </Box>
  );
}
