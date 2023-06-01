import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import AddOtherProfessionals from "@root/sections/reports/ifa-reports/FR-F1/add/AddOtherProfessionals";

const PAGE_TITLE = "Reports";

FRF1.getLayout = function getLayout(page: any) {
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
          name: "IFA Reports",
          href: "/reports",
        },
        {
          name:"FR-F1: OTHER PROFESSIONALS",
          href: "/reports/ifa-reports/FR-F1",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRF1() {
  return (
    <Page title={PAGE_TITLE}>
      <AddOtherProfessionals />
    </Page>
  );
}
