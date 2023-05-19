import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useTheme } from "@mui/material";

const PAGE_TILE = "Trainer Evaluation Form";

TrainerEvaluation.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "training",
          href: "/training",
        },
        {
          name: "Manage Trainers",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function TrainerEvaluation() {
  const theme = useTheme();
  return (
    <Page title={PAGE_TILE}>
      <div>Trainer Evaluation Form</div>
    </Page>
  );
}