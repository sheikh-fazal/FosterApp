import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import SupervisionTrainingPolicy from "@root/supervision-training-support-policy/SupervisionTrainingPolicyTable";


const PAGE_TILE = "Supervision Training Support Policy";

SupervisionTrainingSupportPolicy.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Policies &  Guidelines",
          href: "/Policies &  Guidelines",
        },
        {
          name: "Policies &  Guidelines",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function SupervisionTrainingSupportPolicy() {
  return (
    <Page title={PAGE_TILE}>
     <SupervisionTrainingPolicy/>
    </Page>
  );
}
