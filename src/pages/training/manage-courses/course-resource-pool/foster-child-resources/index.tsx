import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { FosterChildResources } from "@root/sections/training/manage-courses/course-resource-pool/foster-child-resources/FosterChildResources";

const PAGE_TILE = "Course Sub Categories";

SocialWorkerResources.getLayout = function getLayout(page: any) {
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

export default function SocialWorkerResources() {
  return (
    <Page title={PAGE_TILE}>
      <FosterChildResources />
    </Page>
  );
}
