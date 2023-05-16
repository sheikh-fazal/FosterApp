import Layout from '@root/layouts';
import React, { useRef } from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import AgencySafeguardingOfficer from '@root/sections/safeguarding/child-protection/agency-safeguarding-officer-contact';

const PAGE_TITLE = "Agency Safeguarding Officer / Contact";

AgencySafeguarding.getLayout = function getLayout(page: any) {
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
          name: "Contact Directory",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function AgencySafeguarding() {
  return (
    <Page title={PAGE_TITLE}>
     <AgencySafeguardingOfficer/>
    </Page>
  );
}