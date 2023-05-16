import Layout from "@root/layouts";
import React from "react";

// ----------------------------------------------------------------------

HealthAndSafety.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HealthAndSafety() {
  return <div>HealthAndSafety</div>;
}
