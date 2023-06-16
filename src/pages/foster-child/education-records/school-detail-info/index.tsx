import React from "react";
// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { SchoolDetailInfoTable } from "@root/sections/foster-child/education-records/school-detail-info";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/foster-child",
  },
  {
    name: "School Detail Info List",
    href: "",
  },
];

const PAGE_TITLE = "School Detail Info ";
// ----------------------------------------------------------------------

SchoolDetailInfo.getLayout = function getLayout(page: any) {
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
export default function SchoolDetailInfo() {
  return (
    <Page title={PAGE_TITLE}>
      <SchoolDetailInfoTable />
    </Page>
  );
}
