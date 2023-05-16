import ContextualSafeguardingForm from '@root/sections/safeguarding/child-protection/contextual-safeguarding/contextual-safeguarding-form/contextual-safeguarding-form'
import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';


const PAGE_TITLE = "Add Contextual Safeguarding";

AddContextualSafeguarding.getLayout = function getLayout(page: any) {
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
          name: "Contextual Safeguarding List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function AddContextualSafeguarding() {
  return (
    <Page title={PAGE_TITLE}>
      <Box>
        <ContextualSafeguardingForm />
      </Box>
    </Page>
  );
}