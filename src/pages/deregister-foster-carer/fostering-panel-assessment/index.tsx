import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page"; 
import HomeIcon from "@mui/icons-material/Home";
import FosteringPanelAssessment from "@root/sections/deregister-foster-dashboard/dereg-assessment-fostering-panel/fostering-panel-assessment/FosteringPanelAssessment";

// ==========================================================

const PAGE_TILE = "De-Registration";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "De-reg Assessments Stage 2",
          href: "/",
        },
        {
          name: "Fostering Panel",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Panel() {
  return (
    <Page title={PAGE_TILE}>
      <FosteringPanelAssessment />
    </Page>
  );
}

