import React from "react";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import { CLADocumentationForm } from "@root/sections/cla-documentation-list/cla-documentation-form/CLADocumentationForm";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "CLA Document",
    href: "/",
  },
  {
    name: "CLA Documentation List",
    href: "",
  },
];

const PAGE_TITLE = "View EHCP Document";
// ----------------------------------------------------------------------

ClaDocumentationForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function ClaDocumentationForm() {
  return (
    <Page title={PAGE_TITLE}>
      <Paper elevation={3}>
        <CLADocumentationForm />
      </Paper>
    </Page>
  );
}

