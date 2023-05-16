import Layout from "@root/layouts";
import React from "react";

// ----------------------------------------------------------------------

BankAccountDetails.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function BankAccountDetails() {
  return <div>BankAccountDetails</div>;
}
