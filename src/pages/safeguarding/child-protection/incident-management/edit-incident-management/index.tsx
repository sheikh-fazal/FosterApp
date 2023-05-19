import React from 'react'
import Page from '@root/components/Page';
import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";
import { Box, Card } from '@mui/material';
import IncidentManagementForm from '@root/sections/safeguarding/child-protection/incident-management/incident-management-form/IncidentManagementForm';

const PAGE_TITLE = "Add Incident Management";

ViewIncidentManagement.getLayout = function getLayout(page: any) {
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
          name: "Incident Management List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function ViewIncidentManagement() {
  return (
    <Page title={PAGE_TITLE}>
        <Card sx={{ p: 2 }}>
       <IncidentManagementForm />
       
      </Card>
     {/* <Box>{PAGE_TITLE}</Box> */}
    </Page>
  );
}