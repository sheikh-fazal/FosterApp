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

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function LeisureActivitiesHobby() {
  const router: any = useRouter();
  const { fosterChildId } = router.query;
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          href: "/",
        },
        {
          name: "Child Info",
          href: `/foster-child?fosterChildId=${fosterChildId}`,
        },
        {
          name: PAGE_TITLE,
          href: "",
        },
      ]}
      title={PAGE_TITLE}
    >
      <LeisureActivitiesTable fosterChildId={fosterChildId} />
    </Layout>
  );
}

// ----------------------------------------------------------------------
