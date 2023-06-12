import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page"; 
import LocalAuthorityList from "@root/sections/local-authority-list/LocalAuthorityList";
import RegisterNewLocalAuthority from "@root/sections/local-authority-list/register-new-local-authority/RegisterNewLocalAuthority";

const PAGE_TILE = "Local Authority";

AddNewLocalAuthority.getLayout = function getLayout(page: any) {
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

export default function AddNewLocalAuthority() {
  return (
    <Page title={PAGE_TILE}>
      <RegisterNewLocalAuthority />
    </Page>
  );
}

