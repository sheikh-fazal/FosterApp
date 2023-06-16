import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import ChildMedicationInfotable from "@root/sections/foster-child/health-medical-history/child-medication-info/childMedicationInfotable";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Medication Info",
    href: "/carer-info/other-information/next-of-kin",
  },
  {
    name: "child Info",
    href: "/foster-child",
  },
  {
    name: "Child Medication Info info list",
    href: "",
  },
];
const PAGE_TITLE = "Child Medication Info";
// ----------------------------------------------------------------------

ChildMedicationInfo.getLayout = function getLayout(page: any) {
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

export default function ChildMedicationInfo() {
  return (
    <Box>
      <ChildMedicationInfotable />
    </Box>
  );
}
