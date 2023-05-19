import Layout from '@root/layouts';
import React, { useState } from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Box } from '@mui/material';
import { SupportCarersCard } from '@root/sections/safeguarding/policy-guide-templates/support-carers/support-carers-card';
import { SUPPORT_CARERS_CARDS } from '@root/dropdown-data/support-carers-data';

const PAGE_TITLE = "Safeguarding Templates";

SupportCarers.getLayout = function getLayout(page: any) {
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
          name: "Support for parents",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function SupportCarers() {
  const [data, setData] = useState(SUPPORT_CARERS_CARDS)
  return ( 
    <Page title={PAGE_TITLE}>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {
          data.map((item:any, idx:any)=>{
            return(
              <SupportCarersCard key={idx} title={item.title} bgColor={item.bgColor} link={item.link}/>
            )
          })
        }
      </Box>
    </Page>
  );
}