import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import AbsenceInfoListTable from "@root/sections/foster-child/child-background-info/child-chronology-of-events/absence-info/AbsenceInfoListTable";


// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/",
  },
  {
    name: "Absence Info List",
    href: "/foster-child/child-background-info/child-chronology-of-events/absence-info",
  },
];

const PAGE_TITLE = "Absence Info";
// ----------------------------------------------------------------------

AbsenceInfo.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function AbsenceInfo() {
  return (
    <Page title={PAGE_TITLE}>
      <Paper elevation={3}>
        {/* <FamilyPersonListTable /> */}
        <AbsenceInfoListTable />
      </Paper>
    </Page>
  );
}

