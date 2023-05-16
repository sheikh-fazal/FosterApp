import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';

const PAGE_TITLE = "Safeguarding Measures List";

SafeguardingMeasuresChildPlaced.getLayout = function getLayout(page: any) {
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
          name: "Safeguarding Measures ( During Child Placement )",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SafeguardingMeasuresChildPlaced() {
  return (
    <Page title={PAGE_TITLE}>
     <Box>{PAGE_TITLE}</Box>
    </Page>
  );
}