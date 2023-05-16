import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SafeguardingLegislation from "@root/sections/safeguarding/policy-guide-templates/legislation";
import Layout from "@root/layouts";
import Page from "@root/components/Page";

let PAGE_TITLE: string='Gov Reference Link';
Legislation.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Safeguarding Panel",
          href: "/safeguarding",
        },
        {
          name: "Safeguarding",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function Legislation() {
  const [pageTitle, setPageTitle] = useState("Gov Reference Link");
  PAGE_TITLE = pageTitle;
  console.log(PAGE_TITLE);

  return (
    <Page title={PAGE_TITLE}>
      <SafeguardingLegislation setPageTitle={setPageTitle} />
    </Page>
  );
}

