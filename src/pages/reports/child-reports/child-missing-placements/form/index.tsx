import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildMissingPlacementForm from "@root/sections/reports/child-reports/child-missing-placements/child-missing-placements-form/ChildMissingPlacementsForm";

const PAGE_TITLE = "Child Missing Placements Report";

ChildMissingPlacementsForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "Reports",
          href: "/reports",
        },
        {
          name: "Child Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function ChildMissingPlacementsForm() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildMissingPlacementForm />
    </Page>
  );
}
