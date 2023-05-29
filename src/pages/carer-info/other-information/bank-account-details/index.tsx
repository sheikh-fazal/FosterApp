import Layout from "@root/layouts";
import BankAccountDetailsSection from "@root/sections/carer-info/other-info/bank-account-details/BankAccountDetailsSection";
import React from "react";

// ----------------------------------------------------------------------

BankAccountDetails.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function BankAccountDetails() {
  return <BankAccountDetailsSection />;
}
