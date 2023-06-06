import React from "react";
// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { Card } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "School Detail Info List",
    href: "/foster-child/education-records/school-detail-info",
  },
  {
    name: "School Detail Info",
    href: "",
  },
];

const PAGE_TITLE = "School Detail Info";
// ----------------------------------------------------------------------

AddSchoolDetail.getLayout = function getLayout(page: any) {
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
export default function AddSchoolDetail() {
  return (
    <HorizaontalTabs tabsDataArray={["School Detail Info", "Upload Document"]}>
    
  </HorizaontalTabs>
  );
}
