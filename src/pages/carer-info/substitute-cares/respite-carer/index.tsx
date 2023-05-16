import Layout from "@root/layouts";
import React from "react";

// ----------------------------------------------------------------------

RespiteCarer.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function RespiteCarer() {
  return <div>RespiteCarer</div>;
}
