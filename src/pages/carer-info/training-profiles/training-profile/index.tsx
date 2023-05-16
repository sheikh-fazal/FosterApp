import Layout from "@root/layouts";
import React from "react";

// ----------------------------------------------------------------------

TrainingProfile.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function TrainingProfile() {
  return <div>TrainingProfile</div>;
}
