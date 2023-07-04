import React, { Fragment } from "react";
import { useTheme } from "@mui/material";
// layout
import Layout from "@root/layouts";
// components
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { LeisureActivitiesTable } from "@root/sections/foster-child/education-records/leisure-activites-hobby/leisure-activites-hobby-table";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------
// Constants
const PAGE_TITLE = "Leisure Activities List";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    href: "/",
  },
  {
    name: "Child Info",
    href: "/child-info",
  },
  {
    name: PAGE_TITLE,
    href: "",
  },
];

// ----------------------------------------------------------------------

LeisureActivitiesHobby.getLayout = function getLayout(page: any) {
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

// ----------------------------------------------------------------------

export default function LeisureActivitiesHobby() {
  const router: any = useRouter();
  const { fosterChildId } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <LeisureActivitiesTable fosterChildId={fosterChildId} />
    </Page>
  );
}

// ----------------------------------------------------------------------
