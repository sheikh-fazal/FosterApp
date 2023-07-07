import React from "react";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import ContextualSafeguardingTable from "@root/sections/safeguarding/child-protection/contextual-safeguarding/ContextualSafeguardingTable";
import AssessmentHistory from "@root/sections/safeguarding/child-protection/contextual-safeguarding/termination-assessment-history/AssessmentHistory";
import RevisionAssessmentHistory from "@root/sections/safeguarding/child-protection/contextual-safeguarding/revision-assessment-history/RevisionAssessmentHistory";

const PAGE_TITLE = "Contextual Safeguarding List";

ContextualSafeguarding.getLayout = function getLayout(page: any) {
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

export default function ContextualSafeguarding() {
  return (
    <Page title={PAGE_TITLE}>
      <Box>
        {/* <ContextualSafeguardingTable /> */}
        <AssessmentHistory />
        {/* <RevisionAssessmentHistory/> */}
      </Box>
    </Page>
  );
}
