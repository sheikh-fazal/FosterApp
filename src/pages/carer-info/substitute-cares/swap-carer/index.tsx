import Layout from "@root/layouts";
import React from "react";

// ----------------------------------------------------------------------

SwapCarer.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function SwapCarer() {
  return <div>SwapCarer</div>;
}
