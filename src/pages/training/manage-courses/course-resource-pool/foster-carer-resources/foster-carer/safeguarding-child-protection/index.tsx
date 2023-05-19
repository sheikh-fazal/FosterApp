import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import SafeguardingChildProtection from "@root/sections/training/manage-courses/course-resource-pool/foster-carer-resources/foster-carer/safeguarding-child-protection/SafeguardingChildProtection";

const PAGE_TILE = "Course List";

index.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "training",
          href: "/training",
        },
        {
          name: "Course Sub Categories",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function index() {
  return (
    <Page title={PAGE_TILE}>
      <>
        <SafeguardingChildProtection />
      </>
    </Page>
  );
}
