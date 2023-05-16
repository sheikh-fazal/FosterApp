import Layout from "@root/layouts";
import React from "react";
import { SocialMediaLinksSection } from "@root/sections/carer-info/personal-info/social-media-links";
import Page from "@root/components/Page";

// icons
import HomeIcon from "@mui/icons-material/Home";

// ----------------------------------------------------------------------
const PAGE_TITLE = "Social Media Links";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Personal Info",
    href: "/carer-info/personal-info",
  },
];

SocialMediaLinks.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function SocialMediaLinks() {
  return (
    <Page title={PAGE_TITLE}>
      <SocialMediaLinksSection />
    </Page>
  );
}
