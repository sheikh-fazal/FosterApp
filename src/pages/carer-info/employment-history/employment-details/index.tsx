import Layout from "@root/layouts";
import React from "react";

// ----------------------------------------------------------------------

EmploymentDetails.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function EmploymentDetails() {
  return <div>EmploymentDetails</div>;
}
