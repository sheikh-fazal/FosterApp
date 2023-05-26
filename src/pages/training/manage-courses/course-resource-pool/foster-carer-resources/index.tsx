import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { FosterCarerResourcesCard } from "@root/sections/training/manage-courses/course-resource-pool/foster-carer-resources/FosterCarerResources";

const PAGE_TILE = "Course Sub Categories";

FosterCarerResource.getLayout = function getLayout(page: any) {
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
          name: "Course Categories",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function FosterCarerResource() {
  return (
    <Page title={PAGE_TILE}>
      <FosterCarerResourcesCard />
    </Page>
  );
}
