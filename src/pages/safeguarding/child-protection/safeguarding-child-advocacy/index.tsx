import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import SafeguardingChildAdvocacyList from '@root/sections/safeguarding/child-protection/safeguarding-child-advocacy';
import { Card } from '@mui/material';

const PAGE_TITLE = "Safeguarding - Child Advocacy List";

SafeguardingChildAdvocacy.getLayout = function getLayout(page: any) {
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

export default function SafeguardingChildAdvocacy() {
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 2 }}>
        <SafeguardingChildAdvocacyList />
      </Card>
    </Page>
  );
}