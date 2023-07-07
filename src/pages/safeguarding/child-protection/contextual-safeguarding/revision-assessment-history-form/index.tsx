import React from "react";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AssessmentInfoForm from "@root/sections/safeguarding/child-protection/contextual-safeguarding/termination-assessment-history/assessment-info-form/AssessmentInfoForm";
import TerminationInfoForm from "@root/sections/safeguarding/child-protection/contextual-safeguarding/termination-assessment-history/termination-info-form/TerminationInfoForm";
import RevisionAssessmentInfo from "@root/sections/safeguarding/child-protection/contextual-safeguarding/revision-assessment-history/revision-assessment-info-form/RevisionAssessmentInfoForm";
import RevisionInfo from "@root/sections/safeguarding/child-protection/contextual-safeguarding/revision-assessment-history/revision-info-form/RevisionInfoForm";

const PAGE_TITLE = "Contextual Safeguarding List";

RevisionAssessmentHistoryForm.getLayout = function getLayout(page: any) {
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

export default function RevisionAssessmentHistoryForm() {
  return (
    <Page title={PAGE_TITLE}>
      <HorizaontalTabs
        tabsDataArray={["Revision Assessment Info", "Revision Info"]}
      >
        <RevisionAssessmentInfo />
        <RevisionInfo />
      </HorizaontalTabs>
    </Page>
  );
}
