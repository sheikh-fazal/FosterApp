import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import DeRegAssessmentStageOneTable from "@root/sections/de-registration/de-reg-assessment-stage-1/DeRegAssessmentStageOneTable";

const PAGE_TILE = "De-Registration";

DeRegistration.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "De-reg Assessment Stage 1",
          href: "/de-registration",
        },
        {
          name: "Consultation with foster carer",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function DeRegistration() {
  return (
    <Page title={PAGE_TILE}>
     <DeRegAssessmentStageOneTable/>
    </Page>
  );
}
