import Layout from "@root/layouts";
import BankAccountDetailsSection from "@root/sections/carer-info/other-info/bank-account-details/BankAccountDetailsSection";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

// ----------------------------------------------------------------------// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Bank Account Details",
    href: "/carer-info/personal-info/initial-enquiry",
  },
];
const PAGE_TITLE = "Bank Account Details";

BankAccountDetails.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function BankAccountDetails() {
  return <BankAccountDetailsSection />;
}
