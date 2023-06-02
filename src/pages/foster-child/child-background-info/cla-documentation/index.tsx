

import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import Layout from "@root/layouts";
import ClaDocumentationListTable from "@root/sections/foster-child/child-background-info/cla-documentation-list/ClaDocumentationList";

// ----------------------------------------------------------------------

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: "/",
  },
  {
    name: "CLA Documentation List",
    href: "",
  },
];

const PAGE_TITLE = "CLA Documentation";
// ----------------------------------------------------------------------

ClaDocumentationList.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function ClaDocumentationList() {
  return (
    <Page title={PAGE_TITLE}>
      <Paper elevation={3}>
        <ClaDocumentationListTable />
      </Paper>
    </Page>
  );
}
