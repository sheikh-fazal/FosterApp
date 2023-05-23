import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, Grid } from "@mui/material";
import CourseListSelectFilter from "@root/sections/training/manage-courses/course-resource-pool/CourseListSelectFilter";
import CourseListCard from "@root/sections/training/manage-courses/course-resource-pool/CourseListCard";
import { courseList } from "@root/sections/training/manage-courses/course-resource-pool";

const PAGE_TILE = "Course List";

CourseList.getLayout = function getLayout(page: any) {
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

export default function CourseList() {
  return (
    <Page title={PAGE_TILE}>
      <Card sx={{ p: 2 }}>
        <CourseListSelectFilter
          searchKey="search"
          showSelectFilters
          onChanged={(data: any) => {}}
        />
        <Grid
          container
          spacing={7}
          sx={{ padding: { xs: "5px 5px 0px 5px", lg: "15px 15px 0 15px" } }}
        >
          {courseList.map((item, i) => (
            <Grid xs={12} lg={6} xl={3} item key={i}>
              <CourseListCard
                desc={
                  item.desc.length > 90
                    ? `${item.desc.substring(0, 90)}...`
                    : item.desc
                }
                isStatus={item.isStatus}
                coverImage={item.coverImage}
                isMandatory={item.isMandatory}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </Page>
  );
}
