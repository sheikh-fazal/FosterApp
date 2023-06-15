import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import ChildInfoTab from "@root/sections/safeguarding/child-protection/contextual-safeguarding/request-secure-data-exchange/approved-request/childInfo/ChildInfo";

const PAGE_TITLE = "Child Info";

ChildInfo.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "local Authority",
          href: "/local-Authority",
        },
        {
          name: "Secure Data Exchange",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ChildInfo() {
  return (
    <Page title={PAGE_TITLE}>
      <ChildInfoTab />
    </Page>
  );
}
