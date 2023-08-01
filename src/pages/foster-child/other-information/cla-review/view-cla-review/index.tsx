import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

const PAGE_TITLE = "View CLA Review";

ViewClaReview.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ViewClaReview() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "CLA Review List",
      href: makePath({
        path: "/foster-child/other-information/cla-review",
        skipQueries: ["claReviewId"],
      }),
    },
    {
      name: "CLA Review Details",
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={"CLA Review"}
      />
    </Page>
  );
}
