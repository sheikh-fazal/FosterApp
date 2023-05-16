import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ThirdPartySection from '@root/sections/safeguarding/third-parties';
import { useRouter } from 'next/router';

const PAGE_TILE = "Safeguarding Panel";

ThirdParties.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "/ Safeguarding Panel",
          href: "/safeguarding",
        },
        {
          name: "Safeguarding",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function ThirdParties() {
  const router = useRouter();
  console.log(router.query.index);
  
  return (
    <Page title={PAGE_TILE}>
      <ThirdPartySection />
    </Page>
  );
}