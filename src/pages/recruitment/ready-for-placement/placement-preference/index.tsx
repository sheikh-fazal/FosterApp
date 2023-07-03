import Page from "@root/components/Page";

import Layout from "@root/layouts";

import React from "react";
import { SignOffApproval } from "@root/sections/recruitment/assessment-stage-two/sign-off-approval";
// ----------------------------------------------------------------------
import HomeIcon from "@mui/icons-material/Home";
import { useTheme } from "@emotion/react";
import PlacementReference from "@root/sections/recruitment/ready-for-placement/placement-preference/PlacementReference";
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Ready For Placement",
    href: "",
  },
  {
    name: "Placement Preferences",
    href: "",
  },
];

const PAGE_TITLE = "Recruitment";

PlacementPreference.getLayout = function getLayout(page: any) {
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

export default function PlacementPreference() {
  const theme: any = useTheme();
  return (
    <Page title={PAGE_TITLE}>
      <PlacementReference />
    </Page>
  );
}
