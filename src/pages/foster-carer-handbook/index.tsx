import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";

import FosterCarerHandbookTable from "@root/sections/foster-carer-handbook/FosterCarerHandbookTable";

const PAGE_TILE = "Foster Carer Handbook";

FosterCarerHandbook.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Foster Carer Handbook",
          href: "/fostercarerhandbook",
        },
        {
          name: "Foster Carer Handbook",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function FosterCarerHandbook() {
  return (
    <Page title={PAGE_TILE}>
     <FosterCarerHandbookTable/>
    </Page>
  );
}
