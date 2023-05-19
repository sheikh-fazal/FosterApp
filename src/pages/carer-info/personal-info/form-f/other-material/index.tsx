import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import OtherMaterialTable from "@root/sections/carer-info/personal-info/form-f/other-material/OtherMaterialTable";

// Constants
const PAGE_TILE = "Form F";

OtherMaterial.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Form F List",
          href: "/carer-info/personal-info/form-f",
        },
        {
          name: "Other Material",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function OtherMaterial() {
  return (
    <Page title={PAGE_TILE}>
      <OtherMaterialTable />
    </Page>
  );
}
