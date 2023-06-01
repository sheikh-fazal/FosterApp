import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import HouseHoldComments from "@root/sections/reports/ifa-reports/FR-C1/household-comments/HouseholdComments";
import { useRouter } from "next/router";
const PAGE_TITLE = "Reports";

FRC1.getLayout = function getLayout(page: any) {
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
          name: "FR-C1 CHILD LIVING IN THE HOUSEHOLD’S COMMENTS"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRC1() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <HouseHoldComments action={action} id={id} />
    </Page>
  );
}
