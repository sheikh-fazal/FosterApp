// import React from "react";

// export default function FamilyPersonOrgInvolved() {
//   return <div>FamilyPersonOrgInvolved</div>;
// }

import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import FamilyPersonListTable from "@root/sections/foster-child/child-background-info/family-person-org-involved/family-person-list/FamilyPersonListTable";


// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/foster-child/child-background-info/family-person-org-involved",
  },
  {
    name: "Family Persons & Org Involved List",
    href: "",
  },
];

const PAGE_TITLE = "Family Persons & Org Involved";
// ----------------------------------------------------------------------

FamilyPersonList.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function FamilyPersonList() {
  return (
    <Page title={PAGE_TITLE}>
      <Paper elevation={3}>
        <FamilyPersonListTable />
      </Paper>
    </Page>
  );
}

