import Layout from "@root/layouts";
import StatutoryChecksList from "@root/sections/carer-info/background-checks/statutory-checks-list/StatutoryChecksList";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Statutory Checks List",
    href: "",
  },
];

const PAGE_TITLE = "Statutory Checks List";
StatutoryCheckList.getLayout = function getLayout(page: any) {
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

export default function StatutoryCheckList() {
  return <StatutoryChecksList />;
}
