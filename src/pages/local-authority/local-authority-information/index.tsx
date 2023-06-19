import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page"; 
import RegisterNewLocalAuthority from "@root/sections/local-authority-list/register-new-local-authority/RegisterNewLocalAuthority";

const PAGE_TILE = "Local Authority";

LocalAuthorityInformation.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/",
        },
        {
          name: "Register New Local Authority ",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function LocalAuthorityInformation() {
  return (
    <Page title={PAGE_TILE}>
      <RegisterNewLocalAuthority />
    </Page>
  );
}

