import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import FormalReviewMeetingTable from "@root/sections/de-registration/de-reg-assessment-stage-1/formal-review-meeting/FormalReviewMeetingTable";

const PAGE_TILE = "De-Registration";

FormalReviewMeeting.getLayout = function getLayout(page: any) {
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

export default function FormalReviewMeeting() {
  return (
    <Page title={PAGE_TILE}>
     <FormalReviewMeetingTable/>
    </Page>
  );
}
