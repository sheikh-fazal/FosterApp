import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";
import CourseResourcePoolList from "@root/sections/training/manage-courses/course-resource-pool/CourseResourcePoolList";


const PAGE_TILE = "Course Categories";

CoursePool.getLayout = function getLayout(page: any) {
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

export default function CoursePool() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
     <CourseResourcePoolList/>
    </Page>
  );
}
