import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { HealthAndSafetyTabsMain } from "@root/sections/carer-info/medical-history/health-and-safety/health-and-safety-table/health-and-safety-table-tabs/HealthAndSafetyTabsMain";

import React from "react";
HealthAndSafetyTableTabs.getLayout = function getLayout(page: any) {
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: "/carer-info/",
    },
    {
      name: "Health & Safety",
    },
  ];
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={"Health & Safety"}
    >
      {page}
    </Layout>
  );
};
export default function HealthAndSafetyTableTabs() {
  return (
    <>
      <HealthAndSafetyTabsMain />
    </>
  );
}
