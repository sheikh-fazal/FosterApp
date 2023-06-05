import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import ChildEducationInfoList from "@root/sections/foster-child/education-records/child-education-info/ChildEducationInfoList";
import Page from "@root/components/Page";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "",
  },
  {
    name: "Education Info List",
    href: "",
  },
];

const PAGE_TITLE = "Child Education Info";

////-----------------------------------------
ChildEducationInfo.getLayout = function getLayout(page: any) {
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

export default function ChildEducationInfo() {
  return (
    <Page title={PAGE_TITLE}>
      <ChildEducationInfoList />
    </Page>
  );
}
