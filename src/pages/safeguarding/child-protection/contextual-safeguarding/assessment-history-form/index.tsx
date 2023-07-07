import React, { useState } from "react";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AssessmentInfoForm from "@root/sections/safeguarding/child-protection/contextual-safeguarding/termination-assessment-history/assessment-info-form/AssessmentInfoForm";
import TerminationInfoForm from "@root/sections/safeguarding/child-protection/contextual-safeguarding/termination-assessment-history/termination-info-form/TerminationInfoForm";

const PAGE_TITLE = "Contextual Safeguarding List";

AssessmentHistoryForm.getLayout = function getLayout(page: any) {
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
          name: "Contextual Safeguarding",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function AssessmentHistoryForm() {

  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs
        tabsDataArray={["Assessment Info", "Termination Info"]}
      >
        <AssessmentInfoForm />
        <TerminationInfoForm />
      </HorizaontalTabs>
    </Page>
  );
}
