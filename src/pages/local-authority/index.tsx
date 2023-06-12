import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page"; 
import LocalAuthorityList from "@root/sections/local-authority-list/LocalAuthorityList";

const PAGE_TILE = "Local Authority List";

LocalAuthority.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "",
          href: "/",
        },
        {
          name: "Local Authority",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function LocalAuthority() {
  return (
    <Page title={PAGE_TILE}>
      <LocalAuthorityList />
    </Page>
  );
}

