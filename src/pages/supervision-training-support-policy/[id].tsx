import React from "react";
import Layout from "@root/layouts";
import Page from '@root/components/Page';
import HomeIcon from "@mui/icons-material/Home";
import AddSuperversionTrainingSupportPolicy from "@root/sections/supervision-training-support-policy/add-supervision-training-support-policy/AddSuperversionTrainingSupportPolicy";


const PAGE_TITLE = "Organisational Policies";

// ----------------------------------------------------------------------

SupervisionTrainingSupportPolicy.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Supervision Training Support Policy",
          href: "/supervision-training-support-policy",
        },
        {
          name:"Supervision Training Support Policy",
        },
      ]}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------
export default function SupervisionTrainingSupportPolicy() {

  return (
    <Page title={PAGE_TITLE}>
   <AddSuperversionTrainingSupportPolicy />
  </Page>
  );
}
// 